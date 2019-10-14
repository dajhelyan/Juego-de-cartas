/* import { changeHash } from '../lib/home-controller.js';
 */
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


/* let numeroDeToques = 0;

export const incrementarToques = () => {
  numeroDeToques++;
  document.getElementById('toques').innerHTML = numeroDeToques;
}

let numeroDePuntos = 0;

export const incrementarPuntos = () => {
  numeroDePuntos++;
  document.getElementById('puntos').innerHTML = numeroDePuntos;
}



 */