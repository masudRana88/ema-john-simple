import userEvent from '@testing-library/user-event';
import React, { useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const { loginWithGoogle, user, setUser, loginWithEmail} = useAuth();
    const location = useLocation()
    const history = useHistory()
    console.log(location.state?.from)
    const handleLoginWithPassword = (e) => {
        loginWithEmail(e)
        .then((userCredential) => {
            setUser(userCredential.user)
            history.push(location.state?.from ||  '/')
  })
    }
    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(result => {
            setUser(result.user)
             history.push(location.state?.from ||  '/')
        })
    }
    return (
        <div className="login-form">
            <div className="mt-4">
                <h2>Please Log in</h2>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <input type="submit" value="Login" className="btn-reguler w-100" onClick={handleLoginWithPassword}/>
                </form>
                <p>New to ema-johnn ? <Link to="/regester">Create Your Accounnt</Link></p>
                <p className="text-center">--------or--------</p>
                <button className="btn btn-secondary w-100" onClick={handleGoogleLogin}>Sing in with google</button>
            </div>
        </div>
    );
};

export default Login;