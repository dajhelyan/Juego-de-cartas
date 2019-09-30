
export const changeHash = (hash) => { window.location.hash = hash };

export const arrCartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

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
    for(let i = 0; i < lista.length; i++){
      let indiceAleatorio = numeroAleatorio(0, maxIndex);
      // let x = nuevaLista[i];
      // let y = nuevaLista[indiceAleatorio];
      // [x,y] = [y,x];
      // intercambiar items en las posiciones 'i' e 'indiceAleatorio'
      [nuevaLista[i], nuevaLista[indiceAleatorio]] = [nuevaLista[indiceAleatorio], nuevaLista[i]]
    }
    return nuevaLista;
}

export const cartasParaMostrar = () => {

    /* const container = document.querySelector('#container');
    const div = document.querySelector('.col-md-3') */

    const newCartas = chocolateate(arrCartas);
    let fourCartas = newCartas.slice(0,4);
    const baraja = [...fourCartas, ...fourCartas];
    const cartasALaMesa = chocolateate(baraja);
    
    const cartas = cartasALaMesa.map(ele => {
        const tmpl = `
        <div class="col-md-3 col-sm-6 col-xs-12">
            <figure>
                <img src="././assets/animales (${ele}).jpg">
            </figure>
        </div>
        `
        /* let img = document.createElement("img")
        img.setAttribute('src', `././assets/animales (${ele}).jpg`);
        const singleCarta = document.createElement('figure');
        singleCarta.appendChild(img) */
    /*     console.log(tmpl, 'kkkk');
    */    
        /* singleCarta.innerHTML = tmpl; */

    return tmpl;
    })
    
    console.log(cartas, 'jj');
    return cartas;
    /* printProducts(singleCarta, container, div); */
}








//console.log(printImg(cartasParaMostrar(arrCartas), 'kkkkk'))

/* const printProducts = (products, container, productElemnt) => {

    products.forEach(product => {
      container.appendChild(productElemnt(product));
    })
  
  } */






































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