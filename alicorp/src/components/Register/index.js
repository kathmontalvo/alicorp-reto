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
    console.log(usersId.docs)
    const userName = usersId.docs.filter(el => el.data().id === userId).map(el => el.data().name);
    console.log(userName)
    userName.length!==0 ? firebase.register(userName[0], email, password).catch(e => setErr(e.message)) : setErr('Es necesario que seas operario de Alicorp para ingresar a nuestra web.')
  }
  return (
    <div>
      <label><h2>Registro</h2></label>
      <form onSubmit={sendForm}>
        <div className="form-group">
          <label className="col-sm-2 col-form-label">ID</label>
          <small>Ingresar aquí el código de trabajador</small>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="textId" placeholder="ID trabajador" value={userId} onChange={(e) => setUserId(e.target.value)} />
          </div>
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
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">Registrarme</button>
          </div>
        </div>
       {err && (<div>
          <p> {err}</p>
        </div>)}
      </form>

    </div>
  );
}

export default Login;
