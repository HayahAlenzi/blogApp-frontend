import React from 'react'
import { NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
    return (
        <div>
            
        <div>    <div>
  <nav style={{boxShadow:"1px -5px 10px black"}} className="navbar navbar-expand-md navbar-light bg-light ">
    <div className="container">
      <a style={{fontSize:"30px",color:"gry",margin:"0px"}} className="navbar-brand fw-bold  " to="#">Golden Events</a>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
        <li className="nav-item mx-4 active">
            <NavLink className="nav-link"to="/Home">Home<i class="fas fa-play fa-2x  text-info"></i> </NavLink>
          </li>
          <li className="nav-item mx-4 active">
            <NavLink className="nav-link" to="/Activities"> Activities<i className="fa fa-home fa-2x text-info"></i> <span className="visually-hidden">(current)</span></NavLink>
          </li>
          <li className="nav-item mx-4 active">
            <NavLink className="nav-link"  to="/Cart">Cart <i class="fas fa-bell fa-2x text-info"></i></NavLink>
          </li>
       
          <li className="nav-item mx-4 active">
            {/* <NavLink className="nav-link" <i class="fas fa-cog fa-2x text-info"></i> </NavLink> */}
          </li>
        </ul>
        <div  className="d-flex my-2 my-lg-0">
        {/* <input  className="form-control me-sm-2" type="text" placeholder="Search" />
        <button  className="btn btn-outline-success my-2 my-sm-0" >Search</button> */}
        </div>
            <NavLink className="nav-link text-light fs-5 fw-bold  ms-4 text-dark"to="/LogIn"> Log in <i class="fas fa-user-check text-dark"></i> </NavLink>
    </div>
    </div>
</nav>
</div>
    )</div>

{/* 
            
            <Link</li></Link>
            <Link </li></Link>
            <Link </li></Link>
            <Link to=</li></Link>
 
     */}

        </div>
    )
}
