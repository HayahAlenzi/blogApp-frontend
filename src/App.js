import React,{useState} from 'react'

import Explor from "./Components/Explor"
import About from "./Components/About"
import LogIn from "./Components/LogIn"
import NavBar from "./Components/NavBar"
import SignUp from "./Components/SignUp"
import Search from "./Components/Search"
import { Route} from "react-router-dom";
import Footer from './Components/Footer'
import AddPost from './Components/AddPost'
import Profile from './Components/Profile'

function App() {





  return (
    <div>
      
      <div>
       <NavBar />
      <Route exact path="/Explor"  component={Explor}/>
      <Route exact path="/About" component={About} />
      <Route exact path="/Search" component={Search} />
      <Route exact path="/login" component={LogIn} /> 
      <Route exact path="/SignUp" component={SignUp} /> 
      <Route exact path="/AddPost" component={AddPost} /> 
      <Route exact path="/profile/:id" component={Profile}/>



 
    </div>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
