import React, { PropsWithChildren, useEffect, useRef } from "react";

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

const GalaxyBackground = ({ children }: PropsWithChildren) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Star[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

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
        // គណនាទីតាំងផ្កាយផ្អែកលើ Depth (3D Projection)
        const sx = (this.x / this.z) * width + width / 2;
        const sy = (this.y / this.z) * height + height / 2;

        // បង្កើតចលនារីកធំនៅពេលផ្កាយហោះមកជិត
        const r = (1 - this.z / width) * this.size * 5;

        if (sx < 0 || sx > width || sy < 0 || sy > height) return;

        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${1 - this.z / width})`;
        ctx.fill();
      }
    }

    const init = () => {
      stars = [];
      for (let i = 0; i < 400; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      ctx.fillStyle = "#7B542F";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.draw(ctx, canvas.width, canvas.height);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      {/* Nebula Layers */}
      {/* <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div> */}

      <div className="relative z-10 flex flex-col items-start h-full px-4 text-center overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default GalaxyBackground;
