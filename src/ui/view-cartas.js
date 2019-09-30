/* import { changeHash } from '../lib/home-controller.js';
 */
export const mesaDeJuego = () => {
    const mesaTmpl = `
    <img class="fondo-mesa" src="././assets/fondo-selva.jpg">
    <div class="container">
  <div class="row">
    
    <header class="col-md-12 text-center">
      <p>Toques: </p>
      <p>Puntos: </p>
    </header>
    
    <div class="col-md-3 col-sm-6 col-xs-12">
        <figure>
            <img src="././assets/animales (1).jpg">
        </figure>
    </div>
    
    <div class="col-md-3 col-sm-6 col-xs-12">
      <h3>Title</h3>
      <p>set ut perceotiroj unde iste natus error sit volumptum accsion dolorequem laudatin..<p>
      <button>gurdar</button>
    </div>
    
    <div class="col-md-3 col-sm-6 col-xs-12">
      <h3>Title</h3>
      <p>set ut perceotiroj unde iste natus error sit volumptum accsion dolorequem laudatin..<p>
      <button>gurdar</button>
    </div>
    
    <div class="col-md-3 col-sm-6 col-xs-12">
      <h3>Title</h3>
      <p>set ut perceotiroj unde iste natus error sit volumptum accsion dolorequem laudatin..<p>
      <button>gurdar</button>
    </div>
    
    <div class="col-md-3 col-sm-6 col-xs-12">
      <h3>Title</h3>
      <p>set ut perceotiroj unde iste natus error sit volumptum accsion dolorequem laudatin..<p>
      <button>gurdar</button>
    </div>
    
    <div class="col-md-3 col-sm-6 col-xs-12">
      <h3>Title</h3>
      <p>set ut perceotiroj unde iste natus error sit volumptum accsion dolorequem laudatin..<p>
      <button>gurdar</button>
    </div>
    
    <div class="col-md-3 col-sm-6 col-xs-12">
      <h3>Title</h3>
      <p>set ut perceotiroj unde iste natus error sit volumptum accsion dolorequem laudatin..<p>
      <button>gurdar</button>
    </div>
    
    <div class="col-md-3 col-sm-6 col-xs-12">
      <h3>Title</h3>
      <p>set ut perceotiroj unde iste natus error sit volumptum accsion dolorequem laudatin..<p>
      <button>gurdar</button>
    </div>
  </div>
</div>
    
    `

    const divElement = document.createElement('main');
    divElement.innerHTML = mesaTmpl;

    return divElement;
}

