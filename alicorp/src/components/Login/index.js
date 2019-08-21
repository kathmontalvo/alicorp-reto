import React, { useState } from "react";
import firebase from '../../controller/firebase';
import auth from '../Routes/auth';

function Login(props) {
  const [login, setlogin] = useState({
    email: "",
    password: ""
  });
  const [err, setErr] = useState('')


  const handleChange = (e) => {
    setlogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const sendForm = (e) => {
    e.preventDefault();
    firebase.login(login.email, login.password)
    .then(res => {
      auth.login(() => { props.history.push("/home") })
    })
    .catch(e => setErr(e.message))
  }
  return (
    <section className="fill-available d-flex align-items-center justify-content-center">
      <div className="containterLogin">
        <h2><img className="logoInicio" src="https://i.postimg.cc/Mp6PrXKv/logo.jpg" alt=""></img></h2>
        <form onSubmit={sendForm}>
          <div className="form-group">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" name="email" placeholder="Email" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" name="password" placeholder="password" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group ">
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
          </div>
          {err && (
            <div className="form-group">
              <p className="col-sm-10 offset-sm-2"> {err}</p>
            </div>)}
        </form>
        <div>
          <p>¿Aún no tienes una cuenta? <a href="#/register">Regístrate aquí</a></p>
        </div>
      </div>

    </section>
  );
}

export default Login;
