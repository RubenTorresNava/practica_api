import mongoose from 'mongoose';
const dealerSchema = new mongoose.Schema({
    idDealer: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    telefono: {
        type: Number,
        required: true,
    },
    empresa: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    fechaCreacion: {
        //las fechas se almacenan en el formato de fecha de JavaScript, que es un
        //formato de fecha y hora ISO 8601. Este formato se ve así: YYYY-MM-DDTHH:MM:SS.SSSZ.
        type: Date,
        default: Date.now,
    },
});
export default mongoose.model('Dealer', dealerSchema);