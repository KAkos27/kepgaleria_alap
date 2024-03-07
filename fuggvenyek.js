export function htmlOsszeAllit(lista) {
  const nagykep = document.querySelector(".nagykep");
  nagykep.innerHTML = `
          <button class="bal">bal</button>
          <div class="kep"><img src=${lista[0].kep} alt=""></div>
          <button class="jobb">jobb</button>`;
  for (let i = 0; i < lista.length; i++) {
    const galeria = document.querySelector(".galeria");
    galeria.innerHTML += `<div class="kep"><img src=${lista[i].kep} alt=""></div>`;
  }
}
