import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/user.models.js';

export const register = async (req, res) => {
  try {
    // Obtener los datos del usuario
    const { username, email, password, phone, firstName, lastName, gender, fechaNacimiento, edad } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
    }

    // Hash de la contraseña
    const passwordHash = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario
    const newUser = new User({
      username,
      email,
      password: passwordHash,
      phone,
      firstName,
      lastName,
      gender,
      fechaNacimiento,
      edad,
    });

    // Guardar el usuario en la base de datos
    await newUser.save();

    // Generar el token de autenticación
    jwt.sign(
      { id: newUser._id, phone: newUser.phone, email: newUser.email },
      'utd123',
      { expiresIn: '1d' },
      (error, token) => {
        if (error) {
          console.log(error);
          res.status(500).json({ message: 'Error interno del servidor' });
        } else {
          // Responder con el token
          res.json({ token });
        }
      }
    );
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const login = (req, res) => res.send('Usuario login');