import { cartasShow, newData, clickCarta } from '../lib/home-controller.js';


let cartasEnLaMesa;

export const mesaDeJuego = () => {
  const divElement = document.createElement('main');
  divElement.innerHTML = `
    <img class="fondo-mesa" src="././assets/fondo-selva.jpg">
    <div id="container" class="container"></div>
    `

  const container = divElement.querySelector('div');

  cartasEnLaMesa = cartasShow(newData());
  container.appendChild(cartasEnLaMesa)
  /* console.log(cartasShow(newData()), 'kkk') */
  
  const reverso = divElement.querySelectorAll('.fondo-reverso img')
  reverso.forEach(ele => {
    ele.addEventListener('click', clickCarta)
  })
  
  return divElement;
}

export const modalFinish = (puntos) => {
  const divModal = document.createElement("div");
  divModal.classList.add('modal')
  const tmpl = `
  <div class="modal-content">
    <h1>¡Ganaste!</h1>
    <h4>Puntos:<span>${puntos}</span></h4>
    <h4>Toques:<span>${puntos}</span></h4>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Volver a jugar</a>
    <a href="#/home" class="modal-close waves-effect waves-green btn-flat">Inicio</a>
  </div> 
  `
  divModal.innerHTML = tmpl;

  return divModal;
}
