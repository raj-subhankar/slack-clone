import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

function Login() {
    const singIn = (e) =>{
        auth.signInWithPopup(provider)
        .then(result => {

        })
        .catch(error => {
            alert(error.message)
        })
    }
    return(
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"/>
                <h1>Sign in</h1>
                <p>slack.com</p>
                <Button>Sign In with Google</Button>
            </div>
           
        </div>
    )
}

export default Login