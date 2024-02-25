import {useForm} from 'react-hook-form';

function Loginpage() {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="email" {...register('email')} />
                <input type="password" placeholder="password" {...register('password')} />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}
export default Loginpage;