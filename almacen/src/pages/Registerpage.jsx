import { useForm } from "react-hook-form";
import { regis } from '/api/Auth';
function Registerpage() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form 
      onSubmit={handleSubmit(async (values) => {
        console.log(values);
        const res=await regis(values);
        console.log(res);
      })}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="bg-zinc-700 text-white px-4 py-2 rounded-md w-full my-2"
          placeholder="Nombre de usuario"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          className="bg-zinc-700 text-white px-4 py-2 rounded-md w-full my-2"
          placeholder="Correo electrónico"
        />
        <input type="password" 
        {...register("password", { required: true })} 
        className="bg-zinc-700 text-white px-4 py-2 rounded-md w-full my-2" 
        placeholder="Contraseña" />
        <input
          type="number"
          {...register("phone", { required: true })}
          className="bg-zinc-700 text-white px-4 py-2 rounded-md w-full my-2"
          placeholder="Número de teléfono"
        />
        <input
          type="text"
          {...register("firstName", { required: true })}
          className="bg-zinc-700 text-white px-4 py-2 rounded-md w-full my-2"
          placeholder="Nombre"
        />
        <input
          type="text"
          {...register("lastName", { required: true })}
          className="bg-zinc-700 text-white px-4 py-2 rounded-md w-full my-2"
          placeholder="Apellido"
        />
        <input
          type="text"
          {...register("gender", { required: true })}
          className="bg-zinc-700 text-white px-4 py-2 rounded-md w-full my-2"
          placeholder="Género"
        />
        <input
          type="text"
          {...register("fechaNacimiento", { required: true })}
          className="bg-zinc-700 text-white px-4 py-2 rounded-md w-full my-2"
          placeholder="Fecha de nacimiento"
        />
        <input
          type="number"
          {...register("edad", { required: true })}
          className="bg-zinc-700 text-white px-4 py-2 rounded-md w-full my-2"
          placeholder="Edad"
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registerpage;
