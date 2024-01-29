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
});

export default mongoose.model("Product", productSchema);