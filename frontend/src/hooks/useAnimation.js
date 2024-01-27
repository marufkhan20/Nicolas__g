import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";

const useAnimation = () => {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  useEffect(() => {
    const fadeIn = (element) => {
      gsap.to(element, 1, {
        opacity: 1,
        y: "0",
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      });
    };

    const fadeOut = (element) => {
      gsap.to(element, 1, {
        opacity: 0,
        y: 100,
        ease: "power4.out",
      });
    };

    intersection && intersection?.intersectionRatio < 0.2
      ? fadeOut(sectionRef.current)
      : fadeIn(sectionRef.current);
  }, [intersection]);

  return sectionRef;
};

export default useAnimation;
