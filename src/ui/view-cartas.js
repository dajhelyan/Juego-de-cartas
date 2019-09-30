/* import { changeHash } from '../lib/home-controller.js';
 */
import { cartasParaMostrar } from '../lib/home-controller.js'


export const mesaDeJuego = () => {
    const mesaTmpl = `
    <img class="fondo-mesa" src="././assets/fondo-selva.jpg">
    <div id="container" class="container">
  <div class="row">
    
    <header class="col-md-12 text-center">
      <p>Toques: </p>
      <p>Puntos: </p>
    </header>
    ${cartasParaMostrar().join("")}
  </div>
</div>
    
    `

    const divElement = document.createElement('main');
    divElement.innerHTML = mesaTmpl;

  

    return divElement;
}

