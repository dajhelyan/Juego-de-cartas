import { newData, clickCarta } from "../lib/home-controller.js";

let cartasEnLaMesa;

export const mesaDeJuego = () => {
  const secElement = document.createElement("section");
  secElement.classList.add("game-table");
  secElement.innerHTML = `
    <header>
      <h3>Toques:<span class="touch"></span></h3>
      <h3>Puntos:<span class="point"></span></h3>
    </header>
    <seccion id="card-table" class="h-100"></seccion>
    `;

  const container = secElement.querySelector("#card-table");

  cartasEnLaMesa = cartasShow(newData());
  container.appendChild(cartasEnLaMesa);
  /* console.log(cartasShow(newData()), 'kkk') */

  const reverso = secElement.querySelectorAll(".fondo-reverso img");
  reverso.forEach((ele) => {
    ele.addEventListener("click", clickCarta);
  });

  return secElement;
};

export const cartasShow = (cartasALaMesa) => {
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("card-grid");

  cartasALaMesa.forEach((ele) => {
    let cartaDiv = document.createElement("div");
    cartaDiv.classList.add("card-style", "carta", "ocultada");
    cartaDiv.innerHTML = `
      <figure class="fondo-inverso card-style">
          <img class="card-style" id="carta-${ele}" src="././assets/animales (${ele}).jpg">
      </figure>
      <figure class="fondo-reverso card-style">
          <img class="card-style" id="reverso-${ele}" src="././assets/fondo-carta.jpg">
      </figure>
    `
    ;
    cartaDiv.setAttribute("valor-carta", ele);
    cardContainer.appendChild(cartaDiv);
  });
  return cardContainer;
};
