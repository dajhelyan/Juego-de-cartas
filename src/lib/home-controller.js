
export const changeHash = (hash) => { window.location.hash = hash };

export const arrCartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
/* export let cartasSelect = []
 */

export let arrcartasId = [];
export let arrImgInverso = [];
export let arrImgReverso = [];

// refactorizar
export const ocultarCartasIguales = (arrImg) => {
    arrImg[0].classList.remove('show')
    arrImg[0].classList.add('img-hide')
    arrImg[1].classList.remove('show')
    arrImg[1].classList.add('img-hide')
}

export const ocultarCartas = (arrImg) => {
    arrImg[0].classList.remove('hide')
    arrImg[0].classList.add('show')
    arrImg[1].classList.remove('hide')
    arrImg[1].classList.add('show')
}

export const voltearCartas = (imgReverso, imgInverso, idCartas) => {
    if (arrcartasId.length === 0) {
        arrImgReverso.push(imgReverso)
        arrcartasId.push(idCartas);
        arrImgInverso.push(imgReverso);

        imgInverso.classList.remove('hide')
        imgInverso.classList.add('show')
        console.log(arrcartasId, 'ppooooiii');
        // capturando valor de 2da carta que ingresa
    } else if (arrcartasId.length === 1) {
        arrImgReverso.push(imgReverso)
        arrcartasId.push(idCartas);
        arrImgInverso.push(imgInverso);
        
        console.log(imgInverso, 'inverzo');
        imgInverso.classList.remove('hide')
        imgInverso.classList.add('show')
        // compara los elementos del array
        if (arrcartasId[0] === arrcartasId[1]) {
            if (arrImgInverso.length === 2) {
                console.log(ele);
                // Ocultando imagenes en menos de un sg
                setTimeout(() => {
                    ocultarCartasIguales(imgInverso)
                }, 700);
            }

            arrcartasId = 0;
            arrImgInverso = 0;

        } else { // ocultar img si no son iguales


            if (arrImgReverso.length === 2) {
                setTimeout(() => {
                    console.log('no son iguales');
                    
                }, 700);
            }


            console.log('no cumpliiiiii');

        }
    }
}

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

export const cartasParaMostrar = () => {
    //retorna una lista de string

    const newCartas = chocolateate(arrCartas);
    let fourCartas = newCartas.slice(0, 4);
    const baraja = [...fourCartas, ...fourCartas];
    const cartasALaMesa = chocolateate(baraja);

    const cartas = cartasALaMesa.map(ele => {
        const tmpl = `
        <div class="col-md-3 col-sm-6 col-xs-12 carta">
            <figure class="fondo-inverso ">
                <img class="hide"  src="././assets/animales (${ele}).jpg">
            </figure>
            <figure class="fondo-reverso ">
                <img class="show" src="././assets/fondo-carta.jpg">
            </figure>
        </div>
        `
        // Creando el elemento
        /* let img = document.createElement("img")
        img.setAttribute('src', `././assets/animales (${ele}).jpg`);
        const singleCarta = document.createElement('figure');
        singleCarta.appendChild(img) */
        /*     console.log(tmpl, 'kkkk');
        */
        /* singleCarta.innerHTML = tmpl; */

        return tmpl;
    })

/*     console.log(cartas, 'jj');
 */    return cartas;
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