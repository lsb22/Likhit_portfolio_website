import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { gsap } from "gsap";

// gsap.registerPlugin(ScrollTrigger);

const useLocomotiveScroll = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [locomotiveScroll, setLocomotiveScroll] =
    useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const locoScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.08,
        multiplier: 0.8,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
          breakpoint: 1024,
        },
      });

      setLocomotiveScroll(locoScroll);
      // locoScroll.on("scroll", ScrollTrigger.update);

      // ScrollTrigger.scrollerProxy(scrollRef.current, {
      //   scrollTop(value) {
      //     return arguments.length // @ts-ignore
      //       ? locoScroll.scrollTo(value, 0, 0) // @ts-ignore
      //       : locoScroll.scroll.instance.scroll.y;
      //   },
      //   getBoundingClientRect() {
      //     return {
      //       top: 0,
      //       left: 0,
      //       width: window.innerWidth,
      //       height: window.innerHeight,
      //     };
      //   },
      //   pinType: scrollRef.current?.style.transform ? "transform" : "fixed",
      // });

      // // @ts-ignore
      // ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      // ScrollTrigger.refresh();

      const resizeObserver = new ResizeObserver(() => {
        // Small delay to ensure DOM is updated
        setTimeout(() => {
          locoScroll.update();
        }, 100);
      });

      resizeObserver.observe(scrollRef.current);

      setTimeout(() => {
        locoScroll.update();
      }, 500);
      // window.addEventListener("resize", () => {
      //   locoScroll.update();
      // });

      return () => {
        locoScroll.destroy();
        resizeObserver.disconnect();
        // @ts-ignore
        //   ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
      };
    }
  }, []);

  return { scrollRef, locomotiveScroll };
};

export default useLocomotiveScroll;
