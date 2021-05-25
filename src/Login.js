import React from 'react'
import {useState} from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import axios from 'axios'
import {GoogleLogin} from 'react-google-login'
import Icon from './Icon'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const googleSuccess = async (res)=>{
        console.log(res)
    }

    const googleFailure = ()=>{
        console.log("this is not working")
    }

 function login(e){
        e.preventDefault()
        if(email===''){
            alert("you need to enter email")
        }
        if(password===''){
            alert("you need to enter password")
        }
        const data = 
            {
                "userEmail" : `${email}`,
                "password" : `${password}`
            }
        
        axios.post('/login', data).then(user => console.log(user))
        .catch(error => console.log(error))
        setEmail('')
        setPassword('')
    }  
    return (
        <div className="login__form">
            <input className="email__field" type="email" placeholder="Enter your email"
             value={email} onChange={e => setEmail(e.target.value)} /><br></br>
            <input className="password__field" type="password" placeholder="Enter your password" 
            value={password} onChange={e => setPassword(e.target.value)}/><br></br>
            <Button 
            variant="contained" 
            color="primary" type="submit" 
            onClick={login}>Login</Button>
            <br></br>
            <GoogleLogin
            clientId = "752142397141-chbde3gup144snol8tr0toaa2sb65a5f.apps.googleusercontent.com"
            render = {(renderProps)=>(
                <Button
                    className="GoogleButton"
                    variant="contained"
                    color = "primary"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    startIcon={<Icon/>}
                >
                    Sign in With GOOGle
                </Button>)}
                onSuccess = {googleSuccess}
                onFailure = {googleFailure}
            />
        </div>
    )
}

export default Login
