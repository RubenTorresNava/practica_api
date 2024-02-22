import { useForm } from "react-hook-form";

function Registerpage() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={handleSubmit((values) => console.log(values))}>
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
        <input
          type="phone"
          {...register("phone", { required: true })}
          className="bg-zinc-700 text-white px-4 py-2 rounded-md w-full my-2"
          placeholder="Número de teléfono"
        />
        <input
          type="text"
          {...register("firstname", { required: true })}
          className="bg-zinc-700 text-white px-4 py-2 rounded-md w-full my-2"
          placeholder="Nombre"
        />
        <input
          type="text"
          {...register("lastname", { required: true })}
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
          {...register("age", { required: true })}
          className="bg-zinc-700 text-white px-4 py-2 rounded-md w-full my-2"
          placeholder="Edad"
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registerpage;
