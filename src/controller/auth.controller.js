import User from "../model/user.models.js";

export const register = async (req, res) => {
  try {
    // Extraer los datos del cuerpo de la solicitud
    const { username, phone, firstName, lastName, gender, fechaNacimiento, edad } = req.body;

    // Crear un nuevo usuario usando el modelo User
    const nuevoUsuario = new User({
      username,
      phone,
      firstName,
      lastName,
      gender,
      fechaNacimiento,
      edad,
    });

    // Guardar el usuario en la base de datos
    await nuevoUsuario.save();

    // Enviar una respuesta al cliente
    res.status(201).json({ message: "Usuario registrado con éxito" });
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const login = (req, res) => res.send("usuario login");

