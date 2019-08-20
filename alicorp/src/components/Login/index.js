import React from "react";

function Login() {
  /*const [login, setlogin] = useState({
    email: "",
    password: ""
  });*/

  return (
    <div>
      <label><h2>Bienvenido!!</h2></label>
      <form>
      <div className="form-group">
    <label  className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <div className="form-group">
    <label className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" placeholder="password"/>
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-10 offset-sm-2">
      <button type="submit" className="btn btn-primary">Sign in</button>
    </div>
  </div>
  
</form>

    </div>
  );
}

export default Login;
