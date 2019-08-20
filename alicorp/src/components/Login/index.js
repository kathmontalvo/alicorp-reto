import React, {useState}from "react";
import firebase from '../../controller/firebase'

function Login() {
  const [login, setlogin] = useState({
    email: "",
    password: ""
  });

  const handleChange=(e)=>{

    setlogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

const sendForm=(e)=>{
  e.preventDefault();
  firebase.login(login.email,login.password).then(a=>console.log(a))
  
}


  return (
    <div>
      <label><h2>Bienvenido!!</h2></label>
      <form onSubmit={sendForm}>
      <div className="form-group">
    <label  className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" name="email" className="form-control" id="inputEmail3" placeholder="Email" onChange={handleChange}/>
    </div>
  </div>
  <div className="form-group">
    <label className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" name="password" className="form-control" placeholder="password" onChange={handleChange}/>
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
