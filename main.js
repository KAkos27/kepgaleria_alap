import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

htmlOsszeAllit(KEPEK);

const nagyKep = document.querySelector(".nagykep img");

const kisKepek = document.querySelectorAll(".kep img");

for (let index = 0; index < kisKepek.length; index++) {
  kisKepek[index].addEventListener("click", (event) => {
    nagyKep.src = event.target.src;
  });
}

const jobbGomb = document.querySelector(".jobb");
const balGomb = document.querySelector(".bal");

let aktIndex = 1;

jobbGomb.addEventListener("click", () => {
  aktIndex++;
  if (aktIndex === KEPEK.length + 1) {
    aktIndex = 1;
  }
  nagyKep.src = kisKepek[aktIndex].src;
});

balGomb.addEventListener("click", () => {
  aktIndex--;
  if (aktIndex === 0) {
    aktIndex = 7;
  }
  nagyKep.src = kisKepek[aktIndex].src;
});
