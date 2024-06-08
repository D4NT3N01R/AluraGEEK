async function mostrarproductos(){
    const conexion = await fetch("http://localhost:4001/products");
    const convertedCon = conexion.json();
    return convertedCon;
}
async function CrearProducto(title, price, imageUrl) {
    try {
        const conexion = await fetch("http://localhost:4001/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                price: price,
                imageUrl: imageUrl
            })
        });
        if (!conexion.ok) {
            throw new Error("Failed to create product");
        }
        const convertedCon = await conexion.json();
        return convertedCon;
    } catch (error) {
        console.error("Error creating product:", error);
        throw error; // Propagate the error to the caller
    }
}

async function eliminarProducto(id) {
    try {
        await fetch(`http://localhost:4001/products/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error('Error al eliminar el producto del servidor:', error);
    }
}

export const main ={
    mostrarproductos,
    CrearProducto,
    eliminarProducto
}