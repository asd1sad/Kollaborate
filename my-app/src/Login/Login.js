import "./Login.css";

export const Login = () => {
  return (
    <form className="login-form">
      <div className=" Loginorregister">
        Login or register    <img id="logo"src="imgs/logo.svg" />
      </div>
      <label htmlFor="username">username</label>
      <input type="text" id="username" name="username" />
      <div className="next">
        <button>Next</button><p>Forgot my password</p>
      </div>
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" />

      <button class="submitBtnLogin"type="submit">Iniciar sesión</button>
    </form>
  );
};


