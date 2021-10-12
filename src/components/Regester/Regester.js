import React, { useEffect } from 'react';
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Regester = () => { 
    const { loginWithGoogle, singupWithEmail, getEmail, getName, getPassword, setUser, updateUserProfile } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const handleSingUp = (e) => {
        singupWithEmail(e)
        .then(userCredential => {
                setUser(userCredential)
                updateUserProfile()
                history.push(location.state?.from ||  '/login')
            })
    }
    return (
        <div className="login-form">
            <div className="mt-4">
                <h2>Create account</h2>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" onBlur={ getName}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onBlur={getEmail}/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" onBlur={getPassword}/>
                    </div>
                    <input type="submit" value="Sing up" className="btn-reguler w-100" onClick={handleSingUp}/>
                </form>
                <p>Aalreedy have an account ? <Link to="/login">Log in</Link></p>
                <p className="text-center">--------or--------</p>
                <button className="btn btn-secondary w-100" onClick={loginWithGoogle}>Sing in with google</button>
            </div>
        </div>
    );
};

export default Regester;