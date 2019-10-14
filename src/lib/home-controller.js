/* import { incrementarToques, incrementarPuntos } from '../ui/view-cartas.js'
 */
export const changeHash = (hash) => { window.location.hash = hash };

export const arrCartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
export let cardSelect = [];

// retorna un numero aleatorio entre inicio y fin
const numeroAleatorio = (inicio, fin) => {
    return Math.floor(Math.random() * (fin - inicio + 1)) + inicio;
}
// posiciones 
const chocolateate = (lista) => {
    // maximo indice de la lista
    const maxIndex = lista.length - 1
    // copia de la lista
    const nuevaLista = lista.slice();
    for (let i = 0; i < lista.length; i++) {
        let indiceAleatorio = numeroAleatorio(0, maxIndex);
        // let x = nuevaLista[i];
        // let y = nuevaLista[indiceAleatorio];
        // [x,y] = [y,x];
        // intercambiar items en las posiciones 'i' e 'indiceAleatorio'
        //Destructuring assignent
        [nuevaLista[i], nuevaLista[indiceAleatorio]] = [nuevaLista[indiceAleatorio], nuevaLista[i]]
    }
    return nuevaLista;
}

export const newData = () => {
    const newCartas = chocolateate(arrCartas);
    let fourCartas = newCartas.slice(0, 4);
    const baraja = [...fourCartas, ...fourCartas];
    const cartasALaMesa = chocolateate(baraja);
    return cartasALaMesa;
}

export const cartasShow = (cartasALaMesa) => {
    let divParent = document.createElement("div");
    let header = document.createElement('header');
    header.classList.add('col-md-12', 'text-center');
    divParent.classList.add('row');

    header.innerHTML = `
    <p>Toques: </p>
    <p>Puntos: </p>
    `
    divParent.appendChild(header)

    cartasALaMesa.forEach(ele => {
        let cartaDiv = document.createElement("div")
        cartaDiv.classList.add('col-md-3', 'col-sm-6', 'col-xs-12', 'carta', 'ocultada');
        cartaDiv.innerHTML = `
            <figure class="fondo-inverso ">
                <img class="img-fluid" id="carta-${ele}" src="././assets/animales (${ele}).jpg">
            </figure>
            <figure class="fondo-reverso ">
                <img class="img-fluid" id="reverso-${ele}" src="././assets/fondo-carta.jpg">
            </figure>
        `
        cartaDiv.setAttribute('valor-carta', ele)
        divParent.appendChild(cartaDiv);
    });
    return divParent;
}

// buscar carta
const searchCard = (e) => {
    return e.target.parentElement.parentElement
}

// cambiando estado a mostrada
const toggleCarta = (carta) => {
    carta.classList.toggle('ocultada')
    carta.classList.toggle('mostrada')
}

// agregando al array carta(ele) select
const addCardSelect = (carta) => {
    cardSelect.push(carta);
    console.log(cardSelect, 'pooo');
}

// comparando elementos del array
const repeatCards = () => {
    const valLastCard = cardSelect[0].getAttribute('valor-carta');
    const valCurrentCard = cardSelect[1].getAttribute('valor-carta');
    return valLastCard == valCurrentCard;
}

// desapareciendo par de cartas
const disappearCouple = (arr) => {
    arr.forEach((carta) => {
        carta.classList.remove('mostrada');
        carta.classList.add('en-blanco');
      });
    
}

const hideAgain = (arr) => {
    arr.forEach((carta) => 
    toggleCarta(carta));
} 

/* let numeroDeToques = 0;

const incrementarToques = () => {
  numeroDeToques++;
  document.getElementById('toques').innerHTML = numeroDeToques;
}

let numeroDePuntos = 0;

const incrementarPuntos = () => {
  numeroDePuntos++;
  document.getElementById('puntos').innerHTML = numeroDePuntos;
} */

export const clickCarta = (e) => {
    
    // identificar la carta
    let carta = searchCard(e);

    // voltear carta
    toggleCarta(carta)

    //agregando    
    addCardSelect(carta)

    incrementarToques()

    if (cardSelect.length === 2) {
        const cartasIguales = repeatCards();
        if (cartasIguales) {
            setTimeout(() => {
                incrementarPuntos()
                disappearCouple(cardSelect);
                cardSelect = [];
                // console.log(cardSelect, 'ooo');
            }, 1000);
        }else {
            setTimeout(() => {
                hideAgain(cardSelect);
                cardSelect = [];
                // console.log(cardSelect, 'ooiii');

            }, 1000);
            
        }
    }

}













































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