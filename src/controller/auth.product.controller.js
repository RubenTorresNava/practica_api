import product from "../model/product.models.js";
export const register = async (req, res) => {
    try {
        const { codigo, nombre, descripcion, fechaCreacion, estatus, proveedor } = req.body;
        const nuevoProduct = new product({
            codigo,
            nombre,
            descripcion,
            fechaCreacion,
            estatus,
            proveedor,
        });
        await nuevoProduct.save();
        res.status(201).json({ message: "Producto registrado con éxito" });
    } catch (error) {
        console.error("Error al registrar el producto:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};
export const login = (_, res) => res.send("product login");