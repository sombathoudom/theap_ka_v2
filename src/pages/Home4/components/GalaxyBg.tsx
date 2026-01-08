import { PropsWithChildren, useEffect, useRef } from "react";

// ១. បង្កើត Interface សម្រាប់ Star ដើម្បីឱ្យ TypeScript ងាយស្រួលយល់
interface IStar {
  x: number;
  y: number;
  z: number;
  size: number;
  reset: () => void;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D, width: number, height: number) => void;
}

const BG_COLOR = "#7B542F";

const GalaxyBackground = ({ children }: PropsWithChildren) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number>();
  const starsRef = useRef<IStar[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ២. បន្ថែម Access Modifiers (public) ក្នុង Class
    class Star implements IStar {
      public x!: number;
      public y!: number;
      public z!: number;
      public size!: number;

      constructor() {
        this.reset();
        this.z = Math.random() * window.innerWidth;
      }

      public reset() {
        this.x = (Math.random() - 0.5) * window.innerWidth * 2;
        this.y = (Math.random() - 0.5) * window.innerHeight * 2;
        this.z = window.innerWidth;
        this.size = 0.5 + Math.random() * 1.5;
      }

      public update() {
        this.z -= 2;
        if (this.z <= 0) {
          this.reset();
        }
      }

      public draw(
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number
      ) {
        const sx = (this.x / this.z) * width + width / 2;
        const sy = (this.y / this.z) * height + height / 2;
        const r = (1 - this.z / width) * this.size * 5;

        if (sx < 0 || sx > width || sy < 0 || sy > height) return;

        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${1 - this.z / width})`;
        ctx.fill();
      }
    }

    const clearCanvasWithBg = () => {
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // helper to initialize stars and resize canvas
    const init = () => {
      // Adjust canvas size to window
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Fill bg
      clearCanvasWithBg();
      // Recreate stars
      const stars: IStar[] = [];
      for (let i = 0; i < 400; i++) {
        stars.push(new Star());
      }
      starsRef.current = stars;
    };

    const animate = () => {
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const stars = starsRef.current;
      stars.forEach((star) => {
        star.update();
        star.draw(ctx, canvas.width, canvas.height);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      // Stop animation during resize to avoid referencing old canvas sizes
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      init();
      animate();
    };

    // Initial setup
    init();
    animate();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 flex flex-col items-start h-full px-4 text-center overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default GalaxyBackground;
