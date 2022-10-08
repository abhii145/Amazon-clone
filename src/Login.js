import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import "./Login.css"


export default function Login() {

    const history = useHistory();

    const signIn = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
                
             
        })
    }

    const signUp = (e) => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }

            }).catch(error => alert(error.message))

    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
      <div className='login'>
          <Link to ="/">
      <img className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt =" " />
     </Link>
          <div className="login__container">
            <h1>Sign In</h1>
              <form>
                  <h5>Email</h5>
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                <h5>Password</h5>
                  <input value={password} onChange= {e=> setPassword(e.target.value)} type="password" />
<button type="submit" onClick={signIn} className='login__signInButton'>Sign In</button>
              </form>
              <button onClick={signUp} type="submit" className='login__registerButton' >Create Amazon Account </button>
     </div>
     
      </div>
      
  )
}
