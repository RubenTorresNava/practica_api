import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    codigo:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    nombre:{
        type: String,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
    },
    fechaCreacion:{
        type: String,
        required: true,
    },
    estatus:{
        type: String,
        required: true,
    },
    proveedor:{
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

export default mongoose.model("Product", productSchema);