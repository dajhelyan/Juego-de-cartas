
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
        let div = document.createElement("div")
        div.classList.add('col-md-3', 'col-sm-6', 'col-xs-12', 'carta');
        div.innerHTML = `
            <figure class="fondo-inverso ">
                <img class="hide img-fluid" id="carta-${ele}" src="././assets/animales (${ele}).jpg">
            </figure>
            <figure class="fondo-reverso ">
                <img class="show  img-fluid" id="reverso-${ele}" src="././assets/fondo-carta.jpg">
            </figure>
        `

        divParent.appendChild(div);
    });
    return divParent;
}

// buscar carta
const searchCard = (e) => {
    console.log(searchCard);
    return e.target.parentElement.parentElement
}



export const clickCarta = (e) => {
     // identificar la carta
    let carta = searchCard(e);

    console.log(carta, 'jjjjj');
    
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