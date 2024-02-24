import {Link} from 'react-router-dom';
function LoginPage() {
  return (
    <div>
        <Link className="regresar" to="/">Inicio</Link>
      <h1>Login</h1>
      <form className="login">
        <input
          type="email"
          placeholder="Email"
        />
        <input
          type="password"
          placeholder="Password"
          />
        <button type="submit">Login</button>
      </form>
      
      </div>
  );
}
export default LoginPage;