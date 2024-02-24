import { useForm } from "react-hook-form";
import { regis } from '/api/Auth';
import { Link } from "react-router-dom";
function Registerpage() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="formulario">
      <h1>Registrarse</h1>
      <form 
      onSubmit={handleSubmit(async (values) => {
        console.log(values);
        const res=await regis(values);
        console.log(res);
      })}>
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Nombre de usuario"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Correo electrónico"
        />
        <input type="password" 
        {...register("password", { required: true })} 
        placeholder="Contraseña" />
        <input
          type="number"
          {...register("phone", { required: true })}
          placeholder="Número de teléfono"
        />
        <input
          type="text"
          {...register("firstName", { required: true })}
          placeholder="Nombre"
        />
        <input
          type="text"
          {...register("lastName", { required: true })}
          placeholder="Apellido"
        />
        <input
          type="text"
          {...register("gender", { required: true })}
          placeholder="Género"
        />
        <input
          type="text"
          {...register("fechaNacimiento", { required: true })}
          placeholder="Fecha de nacimiento"
        />
        <input
          type="number"
          {...register("edad", { required: true })}
          placeholder="Edad"
        />
        <button type="submit">Registrarse</button>
      </form>
      <Link className="regresar" to="/">Inicio</Link>
    </div>
  );
}

export default Registerpage;
