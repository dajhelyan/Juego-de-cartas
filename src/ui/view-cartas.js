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

    const reverso = divElement.querySelectorAll('.fondo-reverso')
    reverso.forEach(ele => {
      ele.addEventListener('click', (e) => {
        e.target.classList.remove('show')
        e.target.classList.add('hide')
        const parent = e.target.parentElement.parentElement
        const inverso = parent.querySelector('.fondo-inverso img')
        inverso.classList.remove('hide')
        inverso.classList.add('show')
      })
    })
    
    

    console.log(reverso, 'pp')

    return divElement;
}

