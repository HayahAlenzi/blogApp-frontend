import React,{useState} from 'react'

import Explor from "./Components/Explor"
import About from "./Components/About"
import LogIn from "./Components/LogIn"
import NavBar from "./Components/NavBar"
import SignUp from "./Components/SignUp"
import { Route} from "react-router-dom";
import Footer from './Components/Footer'

function App() {





  return (
    <div>
      
      <div>
       <NavBar />
      <Route exact path="/Activities"  component={Explor}/>
      <Route exact path="/About" component={About} /> 
      <Route exact path="/LogIn" component={LogIn} /> 
      <Route exact path="/SignUp" component={SignUp} /> 



 
    </div>
    <Footer/>
    </div>
  );
}

export default App;
