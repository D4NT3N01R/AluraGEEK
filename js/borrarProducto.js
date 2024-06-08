import { main } from "./main.js";

 export async function eliminarProducto(id) {
    try {

        // Eliminar producto del archivo db.json
        await main.eliminarProducto(id);


        // Eliminar producto visualmente
        const productoAEliminar = document.querySelector(`[data-id="${id}"]`);
        if (productoAEliminar) {
            productoAEliminar.remove();
        }
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
    }
}