import React, { useState } from "react";
import firebase from '../../controller/firebase';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('')
  const [err, setErr] = useState('')

  const [usersId] = firebase.getUserId()

  const sendForm = (e) => {
    e.preventDefault();
    const userName = usersId.docs.filter(el => el.data().id === userId).map(el => el.data().name);
    userName.length !== 0 ?
      firebase.register(userName[0], email, password)
        .then(res => {
          setErr('')
        })
        .catch(e => {
          console.log(e)
          if (e.code === 'auth/email-already-in-use') {
            setErr('Email inválido o ya en uso. Intente nuevamente.')
          } setErr(e.message)
        }) :
      setErr('Es necesario que seas operario de Alicorp para ingresar a nuestra web.')
  }
  return (
    <section className="fill-available d-flex align-items-center justify-content-center">
      <div>
        <label><h2>Registro</h2></label>
        <form onSubmit={sendForm}>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mb-0">ID
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="textId" placeholder="ID trabajador" value={userId} onChange={(e) => setUserId(e.target.value)} />
            </div>
            <small className="col-sm-2">Ingresar aquí el código de trabajador</small>
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary">Registrarme</button>
            </div>
          </div>
          {err && (
            <div className="form-group">
              <p className="col-sm-10"> {err}</p>
            </div>)}
        </form>
        <div>
          <p>¿Ya tienes una cuenta? <a href="#">Inicia sesión</a></p>
        </div>
      </div>

    </section>
  );
}

export default Login;
