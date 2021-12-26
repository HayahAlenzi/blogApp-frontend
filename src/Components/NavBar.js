import React from 'react'
import { NavLink , Link} from "react-router-dom";
import { useSelector ,useDispatch } from 'react-redux';
import { giveToken } from '../Reducers/actions';
import { FiPlusCircle ,FiUser} from "react-icons/fi";
import { FaUserAlt ,FaSearch} from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { IoIosAddCircle } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

import "./NavBar.css"

// import "bootstrap/dist/css/bootstrap.min.css";

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

           
            <li className="navbar-item" style={{color:"#7C9473"}}><img style={{height:"50px",weight:"50px"}} src=""/></li>
            <NavLink to="/Explor" className="navbar-link"> <li className="navbar-item">Explor </li></NavLink>
            {token? ( <NavLink  to="/AddPost" className="navbar-link" >  <li className="navbar-item"><IoIosAddCircle/></li></NavLink>): ("")}


            <NavLink to="/Search" className="navbar-link"> <li className="navbar-item"><FaSearch/> Search</li></NavLink>

         

{token? (<NavLink to="/TimeLine" className="navbar-link"><li  className="navbar-item"><ImHome/>Time Line</li></NavLink>):
          ("")}
{token? (<NavLink to="/myProfile" className="navbar-link"><li  className="navbar-item"><FaUserAlt/>MyProfile</li></NavLink>):
          ("")}
           {token? (<NavLink to="/out" className="navbar-link" onClick={()=>{logOut()}}> <li className="navbar-item"> <IoLogOut/>Log Out</li></NavLink>):
          (            <Link to="/login" className="navbar-link"><li  className="navbar-item">Log in</li></Link>
          )}


</ul>
        </div>
    )
}
