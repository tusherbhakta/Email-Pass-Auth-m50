import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    const emailRef = useRef();
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        // reset status 
        setSuccess(false);
        setErrorMessage('');

        // login user 
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
                if (!result.user.emailVerified) {
                    setErrorMessage('please go to your email and verify your email')
                }
                else {
                    setSuccess(true);
                }
            })
            .catch((error) => {
                console.log('Error', error.message)
                setErrorMessage(error.message);
            })
    }
    const handleForgetPass = () =>{
        console.log('get the email address', emailRef.current.value);
        const email = emailRef.current.value;
        if(!email){
            setErrorMessage('enter a vaild email address.');
        }
        else{
            sendPasswordResetEmail(auth, email)
            .then(()=>{
                setErrorMessage('please check your email and reset your password')
            })
        }
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" ref={emailRef} name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label onClick={handleForgetPass} className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {
                            success && <p className='text-2xl text-green-400'>User Login successfully.</p>
                        }
                        {
                            errorMessage && <p className='text-2xl text-red-500'>{errorMessage}</p>
                        }
                        <p className='mt-2'>new to this website? <Link to='/register'>Register</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;