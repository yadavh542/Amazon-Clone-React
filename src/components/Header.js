import React from 'react'
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useStateValue} from "./StateProvider";
import { auth } from './Firebase';
import { getAuth, signOut } from "firebase/auth";

function Header() {
    const[{basket, user}]=useStateValue();
    const uauth = getAuth();
    console.log(basket);

    const login=()=>{
        
        signOut(uauth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
          alert(error.message);
        });
    };


  return (
       
         
    <nav className='header'>
         {/* Left Logo */}
         <Link to="/"> 
        <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>

        {/* Search Bar */}
        <div className='header__search'>
        <input type="text" className="header__searchInput" />
        <SearchIcon className='header__searchIcon'/>

        </div>

        {/* 4 Links */}
        <div className="header__nav">
            {/* 1st Link  */}
            <Link to={!user && "/login"} className="header__link">
            <div onClick={login} className="header__option">
                <span className='header__optionLineOne'>Hello {user?.email}</span>
                <span className='header__optionLineTwo'>{user? 'Sign Out' : 'Sign In'}</span>
            </div>
            </Link>

            {/* 2nd Link */}

            <Link to="/" className="header__link">
            <div className="header__option">
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>
            </Link>

            {/* 3rd Link  */}

            <Link to="/" className="header__link">
            <div className="header__option">
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>
            </Link>


            {/* 4th Link  */}

            <Link to="/checkout" className="header__link">
            <div className="header__optionBasket"></div>
            <ShoppingBasketIcon/>
            <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
            </Link>

        </div>
        
    </nav>
     
   
  )
}

export default Header