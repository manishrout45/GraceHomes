import { useEffect } from "react";
import "../index.css";

export default function GlobalCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor-circle");
    document.body.appendChild(cursor);

    let mouseX = 0,
      mouseY = 0;
    let currentX = 0,
      currentY = 0;
    const speed = 0.2;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const scale = Math.min(1, Math.max(0.5, distance / 120));
      const opacity = Math.min(0.9, Math.max(0.3, 1 - distance / 400));

      cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%) scale(${scale})`;
      cursor.style.opacity = opacity;

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", moveCursor);
    animate();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      cursor.remove();
    };
  }, []);

  return null;
}
