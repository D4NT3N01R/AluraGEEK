import { main } from "./main.js";
const formulario = document.querySelector("[data-form]");

async function createproduct(evento) {
    evento.preventDefault();
    const titulo = document.querySelector("[data-titulo]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value
    await main.CrearProducto(titulo, precio, imagen);
}

formulario.addEventListener("submit", evento => createproduct(evento));