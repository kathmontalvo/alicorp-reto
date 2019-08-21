import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import firebase from '../../controller/firebase'
import Login from '../Login'
import Register from '../Register'
import Home from '../Home';
import Catalogue from '../Catalogue'
import Aceites from '../Catalogue/Aceites'
import Pastas from '../Catalogue/Pastas'
import Conservas from '../Catalogue/Conservas'
import Jabones from '../Catalogue/Jabones'
import Detergentes from '../Catalogue/Detergentes'



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
      {<Route exact path="/login" component={Login} />}
      <Route exact path="/register" component={Register} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/catalogue" component={Catalogue} />
      <Route exact path="/aceites" component={Aceites} />
      <Route exact path="/detergentes" component={Detergentes} />
      <Route exact path="/conservas" component={Conservas} />
      <Route exact path="/pastas" component={Pastas} />
      <Route exact path="/jabones" component={Jabones} />


    </Switch>

  ) : <div id="loader">Loading</div>
}

export default App;