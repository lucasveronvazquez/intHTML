const bebidas = [

  {
    nombre: "PEPSI",
    tipo: "GASEOSA",
    precio: "$299"
  },
  {
    nombre: "FANTA",
    tipo: "GASEOSA",
    precio: "$250"
  },
  {
    nombre: "COCA-COLA",
    tipo: "GASEOSA",
    precio: "$320"
  },
  {
    nombre: "PATAGONIA",
    tipo: "CERVEZA",
    precio: "$499"
  },
  {
    nombre: "ANDES",
    tipo: "CERVEZA",
    precio: "$370"
  },
  {
    nombre: "QUILMES",
    tipo: "CERVEZA",
    precio: "$350"
  },
  {
    nombre: "ELEMENTO",
    tipo: "VINO",
    precio: "$400"
  },
  {
    nombre: "RUTINI",
    tipo: "VINO",
    precio: "$799"
  },
  {
    nombre: "JACK DANIELS",
    tipo: "WHISKY",
    precio: "$1200"
  },
  {
    nombre: "HAVANA",
    tipo: "RON",
    precio: "$899"
  },
  {
    nombre: "ABSOLUT",
    tipo: "VODKA",
    precio: "$999"
  },
  {
    nombre: "BAGGIO",
    tipo: "JUGO",
    precio: "$250"
  }
]





let cartas = document.getElementById("cartas");
for (const bebida of bebidas) {
  let carta = document.createElement("div");
  carta.className = "card col-md-3 bg-light";
  carta.innerHTML = `
        <div class="card-body">
           <h5 class="card-title">${bebida.nombre}</h5>
            <p class="card-text">${bebida.tipo}</p>
            <p class="card-text">${bebida.precio}</p>
            <a href="#" class="btn btn-primary">COMPRAR</a>
        </div> 
    `;
  cartas.append(carta);

}


let nav = document.getElementById("navbar")
let navbar = document.createElement("div")
navbar.className = "navbar navbar-expand-lg bg-light"
navbar.innerHTML = `
<div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
        <button id=mode type="button" class="btn btn-light">Dark Mode</button>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
`;
nav.append(navbar)

let modo = "light"
let principal = document.getElementById("principal");
let boton = document.getElementById("mode")
localStorage.setItem("modo", modo)


boton.onclick = () => {

  if (modo == "light") {
    document.body.className = "dark"
    boton.innerText = "Light Mode";
    navbar.className = "navbar navbar-expand-lg text-bg-light bg-dark";
    cartas.className = "card col-md-3 bg-light"
    //*yo creo que para que funcione, tendria que llamar a "carta" en vez de "cartas", pero si lo hago no la reconoce por que esta declarada adentro de un for y no pude encontrar la solucion, trate de muchas formas distintas pero se me rompe todo 
  }
}