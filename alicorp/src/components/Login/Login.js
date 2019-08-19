import React  from "react";

function Login() {
  /*const [login, setlogin] = useState({
    email: "",
    password: ""
  });*/

  return (
    <div>
      <form className="containerLogin">
        <fieldset>
          <legend><h2>Bienvenido!!</h2></legend>
          
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label >Password</label>
            <input           
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
          Iniciar Sesion
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
