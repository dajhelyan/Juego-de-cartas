import { changeHash } from '../lib/home-controller.js';

export const homeView = () => {
    const homeTmpl = `
    <img class="img-fondo" src="././assets/img-3.jpg">
    <div>
        <h1>Memorama Salvaje</h1>
    </div>
    <button type="button" id="table-start" class="btn-start">¡A jugar!</button>
    `

    const divElement = document.createElement('div');
    divElement.innerHTML = homeTmpl;

    const tableStart = divElement.querySelector('#table-start');
    tableStart.addEventListener('click', () => {
        changeHash('#/table');
        
    })

    return divElement;
}

