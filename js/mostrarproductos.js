import { main } from "./main.js";
import { eliminarProducto } from "./borrarProducto.js";

const lista = document.querySelector("[data-product]");
export default function crearcard(titulo, precio, imagen,id){
    const producto = document.createElement("li");
    producto.className = "producto_item";
    producto.innerHTML=` <div class="boton-container">
    <button class="boton_eliminar" data-id="${id}"> X </button>
</div>
    <div class="descripcion-producto">
    <div class="img-container">
    <img src="${imagen}" class="producto-imagen">
</div>
<h3 class="producto-titulo">${titulo}</h3>
<p class="producto-precio">Precio: $${precio}</p>
</div>
`;
const boton_delete = producto.querySelector("[data-id]");
boton_delete.addEventListener('click', (event) =>{
    event.preventDefault();
    eliminarProducto(id); 
})
return producto;
}

async function mostrarproductos(){
    try{
        const listaAPI = await main.mostrarproductos()
        listaAPI.forEach(producto => lista.appendChild(crearcard(producto.title, producto.price, producto.imageUrl, producto.id)))
    }catch{
        lista.innerHTML=`<h2 class="mensaje_titulo">Ha ocurrido un problema con la conexion</h2>`
    }
    
}
mostrarproductos()

