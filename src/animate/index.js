import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// NAVBAR ANIMATION
export function showMenu(elem, list) {
  const tl = gsap.timeline({ defautls: { duration: 1 } });
  tl.from(elem, { y: "-100%" }).from(list, {
    yPercent: -100,
    stagger: 0.2,
    opacity: 0,
  });
}

export function hideMenu(elem) {
  gsap.to(elem, { yPercent: -100, opacity: 0, duration: 1 });
}

// HEADING ANIMATION
export function animateHeading(title, subtitle) {
  const tl = gsap.timeline({ defautls: { duration: 2 } });
  tl.from(title, { opacity: 0, y: 100 }).from(subtitle, {
    opacity: 0,
    stagger: 0.25,
  });
}

// GRADIENT LINE ANIMATION
export function animateGradientLine(target, trigger) {
  gsap.set(target, { width: 0, x: "45vw" });
  gsap.to(target, {
    width: "100%",
    x: 0,
    duration: 2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: trigger,
      scrub: true,
      start: "-150px top",
      end: "bottom 50px",
      toggleActions: "play pause reverse reset",
    },
  });
}


// OPEN GIF MODAL
export function animateOpenModal(elem) {
  gsap.from(elem, {
    opacity: 0,
    scale: 0.5,
    duration: 1.5,
    ease: "power4.out",
  });
}

// ADD FAVORITE GIF
export function animateHeartFavorite(elem) {
  gsap.to(elem, {
    scale: 2,
    duration: 0.6,
    opacity: 1,
    repeat: 1,
    yoyo: true,
    ease: "power4.out",
  });
}

// SHOW TOAST NOTIFICATION
export function animateToastAlert(elem) {
  gsap.to(elem, {
    opacity: 1,
    yPercent: -50,
    duration: 1,
    repeat: 1,
    yoyo: true,
    ease: "power4.out",
  });
}

// ANIMATE SEARCH RESULT
export function animateSearchResult(line, title) {
  const tl = gsap.timeline();
  tl.from(line, {
    x: "50vw",
    duration: 1.5,
    ease: "power2",
  }).from(title, { xPercent: 25, duration: 1, opacity: 0 }, "-=1");
}

// ERROR MESSAGE
export function animateShowError(elem) {
  gsap.from(elem, {
    y: 100,
    duration: 3,
    ease: "power4.out",
  });
}
