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

      return () => {
        locoScroll.destroy();
        // @ts-ignore
        //   ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
      };
    }
  }, []);

  return { scrollRef, locomotiveScroll };
};

export default useLocomotiveScroll;
