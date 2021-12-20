import React from 'react'
import { NavLink , Link} from "react-router-dom";
import { useSelector ,useDispatch } from 'react-redux';
import { giveToken } from '../Reducers/actions';
import { FiPlusCircle } from "react-icons/fi";
import "./NavBar.css"

import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  const token = useSelector((state) => state.tokenX.token)

const dispatch = useDispatch()

const logOut=()=>{

  dispatch(giveToken("" , ""  , "")) 
         localStorage.setItem("User Token", JSON.stringify(" "))
         localStorage.setItem("User Name", JSON.stringify(" "))
}

    return (
<div className='navbar-container'>
<ul className="navbar-list">

            
            <NavLink to="/About"  className="navbar-link"> <li className="navbar-item">About</li></NavLink>
            <NavLink to="/Explor" className="navbar-link"> <li className="navbar-item">Explor </li></NavLink>
            {token? ( <NavLink  to="/AddPost" className="navbar-link" >   <FiPlusCircle className="navbar-item"/> </NavLink>): ("")}


            <NavLink to="/Search" className="navbar-link"> <li className="navbar-item"> Search</li></NavLink>

          {token? (<NavLink to="/out" className="navbar-link" onClick={()=>{logOut()}}> <li className="navbar-item">Log Out</li></NavLink>):
          (            <Link to="/login" className="navbar-link"><li  className="navbar-item">Log in</li></Link>
          )}

{token? (<NavLink to="/TimeLine" className="navbar-link"lassName="navbar-item"><li>Time Line</li></NavLink>):
          ("")}
{token? (<NavLink to="/myProfile" className="navbar-link"lassName="navbar-item"><li>MyProfile</li></NavLink>):
          ("")}


</ul>
        </div>
    )
}
