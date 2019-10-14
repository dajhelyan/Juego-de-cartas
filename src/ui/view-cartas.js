/* import { changeHash } from '../lib/home-controller.js';
 */
import { cartasShow, newData, arrcartasId, arrImgInverso, ocultarCartasIguales, arrImgReverso, ocultarCartas } from '../lib/home-controller.js';

export const mesaDeJuego = () => {
  const divElement = document.createElement('main');
  divElement.innerHTML = `
    <img class="fondo-mesa" src="././assets/fondo-selva.jpg">
    <div id="container" class="container"></div>
    `

  const container = divElement.querySelector('div');

  container.appendChild(cartasShow(newData()))
  console.log(cartasShow(newData()), 'kkk')
  
  const handleClick = (e) => {

    ele.classList.remove('show')
    ele.classList.add('hide')

    const parent = e.target.parentElement.parentElement
    let inverso = parent.querySelector('.fondo-inverso img')
    /* let reverso = parent.querySelector('.fondo-reverso') */

    console.log(reverso, 'reverso');

    const idCarta = inverso.getAttribute("id")

    // hacer funcion que recibe dos parametros id, elemnt img para añadirle las clases

    // capturando valor de 1ra carta
    if (arrcartasId.length === 0) {
      arrImgReverso.push(reverso)
      arrcartasId.push(idCarta);
      arrImgInverso.push(inverso);
      inverso.classList.remove('hide')
      inverso.classList.add('show')
      console.log(arrcartasId, 'ppooooiii');
      // capturando valor de 2da carta que ingresa
    } else if (arrcartasId.length === 1) {
      arrImgReverso.push(reverso)
      arrcartasId.push(idCarta);
      arrImgInverso.push(inverso);
      console.log(arrImgInverso, 'inverzo');
      inverso.classList.remove('hide')
      inverso.classList.add('show')
      // compara los elementos del array
      if (arrcartasId[0] === arrcartasId[1]) {
        if (arrImgInverso.length === 2) {
          console.log(ele);
          // Ocultando imagenes en menos de un sg
          setTimeout(() => {
            ocultarCartasIguales(arrImgInverso)
          }, 700);
        }

        arrcartasId.length = 0;
        arrImgInverso.length = 0;

      } else { // ocultar img si no son iguales

        setTimeout(() => {
          if (arrImgReverso === 2) {

            ocultarCartas(arrImgReverso)
          }
        }, 700);

        /* arrcartasId = []; */
        arrImgReverso.length = 0;
        console.log(arrImgReverso, 'vacio');

        console.log('no cumpliiiiii');

      }
    }


  }


  const reverso = divElement.querySelectorAll('.fondo-reverso img')
  reverso.forEach(ele => {
    ele.addEventListener('click', handleClick)
    ele.addEventListener('click', (e) => {
      console.log(ele, 'iii');


    })

  })


  return divElement;
}

