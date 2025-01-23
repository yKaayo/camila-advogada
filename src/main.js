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

// Testimonial
const people = document.querySelectorAll(".testimonial__people");

const names = [
  "Nick Jonas",
  "Camila Ferreira",
  "Lucas Monteiro",
  "Sofia Oliveira",
  "Isabela Rocha",
];

people.forEach((person) => {
  person.addEventListener("click", () => {
    document
      .querySelectorAll(".testimonial__people")
      .forEach((item) => item.classList.remove("active"));

    person.classList.add("active");

    for (let i = 0; i < people.length; i++) {
      person == people[i]
        ? (document.querySelector("#namePerson").textContent = names[i])
        : null;
    }
  });
});

// Newsletter Form
document.querySelector("#formNewsletter").addEventListener("submit", (e) => {
  e.preventDefault();

  const form = new FormData(e.target);

  document.querySelector("#submitMessage").outerHTML = `
    <div
      id="submitMessage"
      class="flex justify-start items-center w-fit px-3 py-2 text-white dark:bg-white rounded-lg shadow dark:text-black bg-black relative"
      role="alert"
    >
      <p class="ms-3 text-sm" role="alert" aria-live="polite">
        ${form.get("email")} was subscribed!
      </p>
      <button
        type="button"
        class="ms-2 -mx-1.5 -my-1.5 p-1.5 flex items-center justify-center h-8 w-8 hover:scale-125 duration-300"
        data-dismiss-target="#submitMessage"
        aria-label="Close"
      >
        <i class="bi bi-x-lg text-white dark:text-black"></i>
      </button>
    </div>`;

  setTimeout(() => {
    document.querySelector("#submitMessage").classList.add("hidden");
  }, 3000);

  e.target.reset();
});
