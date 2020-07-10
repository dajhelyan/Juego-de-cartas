import { arrCartas, score } from '../util.js';
import { modal } from '../ui/modal.js';

export const changeHash = (hash) => {
  window.location.hash = hash;
};

// retorna un numero aleatorio entre inicio y fin
const numeroAleatorio = (inicio, fin) => {
  return Math.floor(Math.random() * (fin - inicio + 1)) + inicio;
};
// posiciones
const chocolateate = (lista) => {
  // maximo indice de la lista
  const maxIndex = lista.length - 1;
  // copia de la lista
  const nuevaLista = lista.slice();
  for (let i = 0; i < lista.length; i++) {
    let indiceAleatorio = numeroAleatorio(0, maxIndex);
    // let x = nuevaLista[i];
    // let y = nuevaLista[indiceAleatorio];
    // [x,y] = [y,x];
    // intercambiar items en las posiciones 'i' e 'indiceAleatorio'
    //Destructuring assignent
    [nuevaLista[i], nuevaLista[indiceAleatorio]] = [
      nuevaLista[indiceAleatorio],
      nuevaLista[i],
    ];
  }
  return nuevaLista;
};

export const newData = () => {
  const newCartas = chocolateate(arrCartas);
  let fourCartas = newCartas.slice(0, 4);
  const baraja = [...fourCartas, ...fourCartas];
  const cartasALaMesa = chocolateate(baraja);
  return cartasALaMesa;
};

// buscar carta
const searchCard = (e) => {
  return e.target.parentElement.parentElement;
};

// cambiando estado a mostrada
const toggleCarta = (carta) => {
  carta.classList.toggle("ocultada");
  carta.classList.toggle("mostrada");
};

// agregando al array carta(ele) select
const addCardSelect = (carta) => {
  cardSelect.push(carta);
  console.log(cardSelect, "pooo");
};

// comparando elementos del array
const repeatCards = () => {
  const valLastCard = cardSelect[0].getAttribute("valor-carta");
  const valCurrentCard = cardSelect[1].getAttribute("valor-carta");
  return valLastCard == valCurrentCard;
};

// desapareciendo par de cartas
const disappearCouple = (arr) => {
  arr.forEach((carta) => {
    carta.classList.remove("mostrada");
    carta.classList.add("en-blanco");
  });
};

const hideAgain = (arr) => {
  arr.forEach((carta) => toggleCarta(carta));
};


const printScore = (accum, spanEle) => {
  return (spanEle.innerHTML = ` ${accum}`);
};

let cardSelect = [];


const openModal = (objScore) => {
  if (objScore.points === 4 ) {
    modal(objScore);
  }
} 

export const clickCarta = (e) => {
  const spanPoint = document.querySelector(".point");
  const spanTouch = document.querySelector(".touch");

  // identificar la carta
  let carta = searchCard(e);

  // voltear carta
  toggleCarta(carta);

  //agregando
  addCardSelect(carta);

  if (cardSelect.length === 2) {
    const cartasIguales = repeatCards();
    if (cartasIguales) {
      setTimeout(() => {
        disappearCouple(cardSelect);
        score.points = score.points + 1;
        cardSelect = [];
        printScore(score.points, spanPoint)
        openModal(score)
      }, 1000);
    } else {
      setTimeout(() => {
        hideAgain(cardSelect);
        cardSelect = [];
        score.touchs = score.touchs + 1;
        printScore(score.touchs, spanTouch);
      }, 1000);
    }
  }
};

/* const obteniendo4de12 = (arr) => {
    // chocolatear arrCartas
    const newCartas = chocolateate(arr);
    return newCartas.slice(0,4);

    //despues de chocolatear retornar 4 primeras cartas
}
 */
/* const agregandoPares = (cartas) => {
    const baraja = [...cartas, ...cartas]
    return baraja;
} */

/* const cartasALaMesa = chocolateate(agregandoPares(obteniendo4de12(arrCartas, 'ooo')))
console.log(cartasALaMesa, 'jsjj')

console.log(agregandoPares(obteniendo4de12(arrCartas, 'ooo')));

console.log(obteniendo4de12(arrCartas, 'ooo')) */

/* for (let i = 0; i < cartasALaMesa.length; i++) {
    const element = cartasALaMesa[i];
    console.log(`animales (${element}).jpg`)
} */
