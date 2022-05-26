import React,{useState} from 'react'
import './Login.css'
import {Link, Navigate} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  //const history = useNavigate();
  const auth=getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = event => {
    //event.preventDefault(); // Prevent Page Refresh
    signInWithEmailAndPassword(auth,email,password)
      .then((auth)=>{
        //Redirect to Home page after login
         //const user = userCredential.user;
         <Navigate to="/" replace={true}/>
      })
      .catch((e)=>{ 
      //const errorCode = e.code;
      const errorMessage = e.message;
      alert(errorMessage)});
  };

  const register = event => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
      .then((auth)=>{
        //created a user and log in
        // const user = userCredential.user;
        <Navigate to="/" replace={true}/>
      })
      .catch((e)=>alert(e.message));
  };

  return (
    <div className='login'>
      {/* <h1>hidffdfgffd</h1> */}
      <Link to="/"> 
      <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="" />
      </Link>

      <div className="login__container">
        <h2>Sign In</h2>
        <div className='login__form' action="">
          <h5 className='login__el'>E-mail</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} className='login__el' type="email" />
          <h5 className='login__el'>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} className='login__el' type="password" />
           
          <button onClick={login} className='login__btn'>Login</button>
          
        </div>
        <p className='login__terms'>By Signing in, You agree to Amazon's Terms and Conditions</p>
        <button onClick={register} className='login__btn2'>Create Your Amazon Account</button>
      </div>

      </div>
  )
}

export default Login