import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import firebase from '../../controller/firebase'
import Login from '../Login'
import Register from '../Register'
<<<<<<< HEAD
import Home from '../Home';
import Purchase from '../Purchase'
=======
import Home from '../Products';
//import Purchase from '../Purchase'
>>>>>>> 84cbb5e74cab1a2f9a25f1f0e82fa31a98510db0

const App = () => {
  
  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  })


  return firebaseInitialized !== false ? (
    <Switch>
      <Route exact path="/" component={Login} />
      {/* <Route exact path="/login" component={Login} /> */}
      <Route exact path="/register" component={Register} />
      <Route exact path="/home" component={Home} />
    </Switch>

  ) : <div id="loader">Loading</div>
}

export default App;