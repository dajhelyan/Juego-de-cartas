import {
  createElement,
  addChildren,
} from "../lib/customModal.js";

import { changeHash } from "../lib/home-controller.js";

export const modal = (objScore) => {
  const scoreGame = `
    <div>
      <h1>
        <span><img class="w-30" src="./assets/bear-foot.png"></span>
        ¡Ganaste!
        <span><img class="w-30" src="./assets/bear-foot.png"></span>
      </h1>
      <button class="btn-go-home" type="button"><img class="w-30" src="./assets/home.png"></button>
    </div>
    <div>
      <h2>Tu record</h2>
      <h3>Toques: ${objScore.touchs}</h3>
      <h3>Puntos: ${objScore.points}</h3>
    </div>
    <div>
        <button type="button"  id="reload" class="btn-play-again">volver a jugar</button>
    </div>
    `;

  const modalContent = createElement(
    "div",
    {
      class: "modal-content",
    },
    [scoreGame]
  );

  const modalContainer = createElement(
    "div",
    {
      class: "modal-container",
    },
    [modalContent]
  );

  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
      document.location.reload();
    }
  });

  const reloadGameTable = modalContainer.querySelector('#reload');
  reloadGameTable.addEventListener('click', () => {
    document.location.reload();
  })

  const goPageHome = modalContainer.querySelector('.btn-go-home');
  goPageHome.addEventListener('click', () => {
    changeHash('#/home')
  })

  return addChildren(modalContainer);
};
