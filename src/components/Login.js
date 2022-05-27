import React,{useState} from 'react'
import './Login.css'
import {Link, Navigate, useLocation, useNavigate} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth=getAuth();
  const[{user}]=useStateValue();
  //const user=auth.currentUser;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = event => {
    
    event.preventDefault(); // Prevent Page Refresh
    signInWithEmailAndPassword(auth,email,password)
      .then((auth)=>{
        //Redirect to Home page after login
         //const user = userCredential.user;
        //  <Navigate to="/" replace state={{from: location}}/>
        //  if (location.state?.from){
        //    navigate(location.state.from);
        //  }
        
        navigate("/");
        alert("Congrats You Signed In !!!")
      })
      .catch((e)=>
      alert("User Not Exists"));
  };

  const register = event => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
      .then((auth)=>{
        //created a user and log in
        // const user = userCredential.user;
        navigate("/");
        alert("You Registered Successfully")
      })
      .catch((e)=>alert(e.message));
  };

  const signout=()=> {
    // navigate(-1)
    // //alert("Signing Out");
    // signOut(auth).then(() => {
    //   // Sign-out successful.
    //   //navigate("/")
    // }).catch((error) => {
    //   // An error happened.
    //   alert(error.message);
    // });

    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
  } else {
      navigate('/', { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
  }

    //navigate("/")

 };

  return (
    <div className='login'>
      {/* <h1>hidffdfgffd</h1> */}
      <Link to={signout} > 
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