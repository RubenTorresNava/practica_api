import dealer from '../model/dealer.models.js';
export const register = async (req, res) => {
    try {
        const { idDealer, nombre, apellido, telefono, empresa, correo } = req.body;
        const nuevoDealer = new dealer({
            idDealer,
            nombre,
            apellido,
            telefono,
            empresa,
            correo,
        });
        await nuevoDealer.save();
        res.status(201).json({ message: "Dealer registrado con éxito" });
    } catch (error) {
        console.error("Error al registrar el dealer:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}
export const login = (_, res) => res.send("dealer login");