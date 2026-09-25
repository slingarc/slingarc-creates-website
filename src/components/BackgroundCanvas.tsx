import { useEffect, useRef, useState } from 'react';

interface BackgroundCanvasProps {
  paused?: boolean;
}

export default function BackgroundCanvas({ paused = false }: BackgroundCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReduced = mediaQuery.matches;

    const handleMotionPrefChange = (e: MediaQueryListEvent) => {
      prefersReduced = e.matches;
    };
    mediaQuery.addEventListener('change', handleMotionPrefChange);

    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: false,
    }) as WebGLRenderingContext | null;

    if (!gl) {
      setHasWebGL(false);
      return;
    }

    const vsSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;

      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187,
                            0.366025403784439,
                           -0.577350269189626,
                            0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      float fbm(vec2 st) {
          float v = 0.0;
          float a = 0.5;
          vec2 shift = vec2(100.0);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          for (int i = 0; i < 4; ++i) {
              v += a * snoise(st);
              st = rot * st * 2.0 + shift;
              a *= 0.5;
          }
          return v;
      }

      void main() {
          vec2 st = gl_FragCoord.xy / u_resolution.xy;
          vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
          vec2 p = (st - 0.5) * aspect;

          vec2 mouseNorm = (u_mouse / u_resolution) - 0.5;
          mouseNorm.x *= aspect.x;

          float mouseDist = length(p - mouseNorm * 0.7);
          vec2 mouseInfluence = (p - mouseNorm * 0.7) * exp(-mouseDist * 2.5) * 0.18;
          p -= mouseInfluence;

          float t = u_time * 0.045;

          vec2 q = vec2(0.0);
          q.x = fbm(p * 1.1 + vec2(t * 0.4, -t * 0.3));
          q.y = fbm(p * 1.1 + vec2(-t * 0.35, t * 0.25));

          vec2 r = vec2(0.0);
          r.x = fbm(p * 1.4 + 1.8 * q + vec2(1.7, 9.2) + 0.15 * t);
          r.y = fbm(p * 1.4 + 1.8 * q + vec2(8.3, 2.8) + 0.126 * t);

          float f = fbm(p * 1.2 + 2.5 * r + t * 0.18);

          // Deep studio ocean palette with warm sunset reflection
          vec3 colDeep = vec3(0.025, 0.025, 0.028);    // Pitch obsidian water depths
          vec3 colLow = vec3(0.055, 0.052, 0.058);     // Midnight oceanic wave troughs
          vec3 colMid = vec3(0.115, 0.110, 0.125);     // Deep wave swells
          vec3 colHigh = vec3(0.20, 0.19, 0.22);       // Wave crests
          vec3 colHighlight = vec3(0.88, 0.85, 0.82);  // Lustrous water crest highlights

          // Sunset on ocean neon orange reflection colors
          vec3 colSunsetCore = vec3(1.0, 0.415, 0.0);      // #FF6A00 signature vibrant neon flame orange
          vec3 colSunsetGlow = vec3(1.0, 0.25, 0.02);      // Deep fiery sunset amber
          vec3 colSunsetGold = vec3(1.0, 0.68, 0.25);      // Liquid sunset shimmer / gold glint

          float wave1 = sin((p.x * 1.5 + p.y * 2.2 + r.x * 2.5 + t * 0.6) * 3.14159);
          float wave2 = cos((p.x * 2.8 - p.y * 1.7 + q.y * 3.2 - t * 0.5) * 3.14159);
          float wave3 = sin((p.x * 4.2 + p.y * 3.1 - t * 0.85) * 3.14159);

          float crest = pow(clamp(f * 0.7 + wave1 * 0.25 + wave2 * 0.2, 0.0, 1.0), 2.2);
          float sheen = pow(clamp(dot(q, r) * 0.5 + 0.5, 0.0, 1.0), 3.5);

          // Ocean sunset reflection light column (mimicking sunset over water)
          // The reflection creates a vertical shimmer column down the waves with ripple distortions
          float waterDistort = r.x * 0.22 + q.y * 0.18 + wave1 * 0.12;
          float reflectionColumnX = abs(p.x + waterDistort);
          
          // Shimmer beam spreading softly down the ocean surface
          float sunsetBeam = exp(-reflectionColumnX * reflectionColumnX * 2.8);
          
          // Sunset specular glint on water wave ripples (concentrated along wave facets)
          float rippleGlint = pow(clamp(wave1 * 0.4 + wave2 * 0.35 + wave3 * 0.25 + f * 0.5, 0.0, 1.0), 3.8);
          float sunsetSpecular = sunsetBeam * rippleGlint * 1.45;
          
          // Ambient warm sunset horizon glow reflecting broadly on the water
          float sunsetAmbientGlow = exp(-reflectionColumnX * 1.2) * (0.15 + 0.25 * clamp(st.y * 1.2, 0.0, 1.0));

          float edgeVignette = smoothstep(0.0, 0.85, length(p * vec2(0.7, 1.0)));

          vec3 color = mix(colDeep, colLow, clamp(f * 1.6, 0.0, 1.0));
          color = mix(color, colMid, clamp(crest * 1.4, 0.0, 1.0));
          color = mix(color, colHigh, clamp(sheen * 1.2, 0.0, 1.0));

          // Apply sunset on the ocean reflection onto the wave ripples
          // 1. Broad soft orange atmospheric sunset glow on the water
          color += colSunsetGlow * sunsetAmbientGlow * 0.26;

          // 2. Focused vibrant neon orange sunset column shimmer on the wave crests
          color += colSunsetCore * sunsetSpecular * 0.65;

          // 3. Bright golden-orange sparkle on the sharpest water facets
          color += colSunsetGold * pow(sunsetSpecular, 1.8) * 0.55;

          // Natural silver-pearl crests on the edges
          color += colHighlight * pow(clamp(f * 1.1 + wave1 * 0.3, 0.0, 1.0), 4.5) * (0.05 + 0.10 * edgeVignette);

          float grain = (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.018;
          color += vec3(grain);

          gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
      }
    `;

    function compileShader(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn('Shader compile failed:', gl.getShaderInfoLog(s));
        gl.deleteShader(s);
        return null;
      }
      return s;
    }

    const vs = compileShader(gl.VERTEX_SHADER, vsSource);
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) {
      setHasWebGL(false);
      return;
    }

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);

    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.warn('Program link error:', gl.getProgramInfoLog(prog));
      setHasWebGL(false);
      return;
    }

    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    // Sync resolution
    function syncSize() {
      if (!canvas || !gl) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.floor((canvas.clientWidth || window.innerWidth) * dpr);
      const h = Math.floor((canvas.clientHeight || window.innerHeight) * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    const resizeObserver = new ResizeObserver(() => {
      syncSize();
    });
    resizeObserver.observe(canvas);
    syncSize();

    // Mouse tracking with smooth damping
    let targetX = canvas.width / 2;
    let targetY = canvas.height / 2;
    let currentX = targetX;
    let currentY = targetY;

    const handlePointerMove = (e: PointerEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      if (rect.width && rect.height) {
        const nx = (e.clientX - rect.left) / rect.width;
        const ny = 1.0 - (e.clientY - rect.top) / rect.height;
        targetX = nx * canvas.width;
        targetY = ny * canvas.height;
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    let animationFrameId: number;
    let startTime = performance.now();
    let isRendering = true;

    function render(timeNow: number) {
      if (!isRendering || !gl || !canvas) return;

      gl.viewport(0, 0, canvas.width, canvas.height);

      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      const elapsedSec = prefersReduced || paused ? 12.0 : (timeNow - startTime) * 0.001;

      if (uTime) gl.uniform1f(uTime, elapsedSec);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, currentX, currentY);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      if (!prefersReduced && !paused) {
        animationFrameId = requestAnimationFrame(render);
      }
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isRendering = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      mediaQuery.removeEventListener('change', handleMotionPrefChange);
      resizeObserver.disconnect();
      if (gl) {
        gl.deleteProgram(prog);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
        gl.deleteBuffer(buf);
      }
    };
  }, [paused]);

  return (
    <div
      id="living-canvas-container"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#131315]"
    >
      <canvas
        ref={canvasRef}
        id="shader-canvas-ANIMATION_10"
        className="w-full h-full block"
      />
      {!hasWebGL && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#151517] via-[#101012] to-[#0c0c0d]" />
      )}
    </div>
  );
}
