// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth < 768) {
  gsap.utils.toArray(".top-to-bottom").forEach((box) => {
    gsap.to(box, {
      y: -200,
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: box,
        start: "top 95%",
        end: "50% 90%",
        scrub: true,
        markers: false,
      },
    });
  });
}

if (window.innerWidth >= 768) {
  gsap.utils.toArray(".right-to-left").forEach((box) => {
    gsap.to(box, {
      x: -200,
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: box,
        start: "top 90%",
        end: "50% 50%",
        scrub: true,
        markers: false,
      },
    });
  });

  gsap.utils.toArray(".left-to-right").forEach((box) => {
    gsap.to(box, {
      x: 200,
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: ".left-to-right",
        start: "top 90%",
        end: "50% 50%",
        scrub: true,
        markers: false,
      },
    });
  });
}

// Theme Mode
const changeThemeButton = document.querySelector("#themeBtn");

changeThemeButton.addEventListener("click", () => {
  document.querySelector("html").classList.toggle("dark");

  changeThemeButton.querySelector(".bi").classList.toggle("bi-sun");
  changeThemeButton.querySelector(".bi").classList.toggle("bi-moon");

  changeThemeButton.setAttribute(
    "aria-checked",
    (!(changeThemeButton.getAttribute("aria-checked") === "true")).toString()
  );
});

// Toggle Menu Icon
const menuButton = document.querySelector("#menuButton");

menuButton.addEventListener("click", () => {
  menuButton.querySelector(".bi").classList.toggle("bi-justify-right");
  menuButton.querySelector(".bi").classList.toggle("bi-x-lg");
});
