import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursorDot: HTMLDivElement =
      document.querySelector("[data-cursor-dot]")!;
    const cursorOutline: HTMLDivElement = document.querySelector(
      "[data-cursor-outline]"
    )!;

    window.addEventListener("mousemove", (event) => {
      const x = event.clientX;
      const y = event.clientY;

      cursorDot.style.left = `${x}px`;
      cursorDot.style.top = `${y}px`;

      cursorOutline.animate(
        {
          left: `${x}px`,
          top: `${y}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    });
  });
  return (
    <>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
    </>
  );
};

export default CustomCursor;
