
function BuscarFetch() {
   var nombre = document.getElementById("Nombre").value;

   fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
   .then((response) => response.json())
   .then((json) => CargarImagen(json.sprites.front_default))   

   document.getElementById("Nombre").value="";
  
}

async function CargarImagen(img){
   const contenedor = document.getElementById("Pokemon");
   
   contenedor.innerHTML = "";

   contenedor.insertAdjacentHTML("beforeend",`<img src=${img} alt=${img} width="300" height="300">`);

  
}