import { useEffect } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import { auth } from './firebase';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {
  const [{ }, dispatch] = useStateValue();

useEffect(() => {
  auth.onAuthStateChanged(authUser => {
    if (authUser) {
      dispatch({
        type: 'SET_USER',
        user : authUser
      })
    } else {
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  })
}, [])


  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/login">
          <Login/>
          </Route>

          <Route exact path="/">
          <Header /> 
            <Home />
          </Route>

           <Route exact path="/checkout">
            <Header /> 
            <Checkout />
          </Route>
</Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
