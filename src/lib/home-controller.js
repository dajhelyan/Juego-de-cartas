export const changeHash = (hash) => { window.location.hash = hash };

// retorna un numero aleatorio entre inicio y fin
const numeroAleatorio = (inicio, fin) => {
    return Math.floor(Math.random() * (fin - inicio + 1)) + inicio;
}
  
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