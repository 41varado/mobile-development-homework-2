

export const getProduct = async (id?: number) => {
    if (id) {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
            throw new Error("Error al obtener el producto");
        }
        return await response.json();
    } else {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error("Error al obtener los productos");
        }
        return await response.json();
    }
};