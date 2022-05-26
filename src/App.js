import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './components/Checkout';
import Home from './components/Home';
import Login from './components/Login';
//import Header from './components/Header';
import { useStateValue } from './components/StateProvider';
import React,{ useEffect } from 'react';
import { auth } from './components/Firebase';
import { onAuthStateChanged } from "firebase/auth";
//import {initialState, reducer} from './components/reducer';
 
function App() {
  const[ dispatch] = useStateValue();

  //Code which runs on given condition
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (authUser)=>{
      if(authUser){
        //The user is logged in
          dispatch({
            type:"SET_USER",
            user: authUser,
          });
      }
      else{
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return()=>{
      //Any Cleanup
      unsubscribe();
    };

  }, []);

  //console.log("User is >>",user);

  return (
    <Router>
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
