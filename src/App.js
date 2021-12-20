import React,{useState} from 'react'
import Explor from "./Components/Explor"
import About from "./Components/About"
import LogIn from "./Components/LogIn"
import NavBar from "./Components/NavBar"
import SignUp from "./Components/SignUp"
import Search from "./Components/Search"
import { Route, Switch} from "react-router-dom";
import Footer from './Components/Footer'
import AddPost from './Components/AddPost'
import Profile from './Components/Profile'
import TimeLine from './Components/TimeLine'
import MyProfile from './Components/MyProfile'
import NotFoundPage from './NotFoundPage'
import { useSelector } from 'react-redux'
import "./App.css"


function App() {
  const token = useSelector((state) => state.tokenX.token)





  return (
    <div>
      
      <div className='appDiv ms-auto'>
       <NavBar />
       <Switch>
      <Route exact path="/Explor"  component={Explor}/>
      <Route exact path="/About" component={About} />
      <Route exact path="/Search" component={Search} />
      <Route exact path="/login" component={LogIn} /> 
      <Route exact path="/SignUp" component={SignUp} /> 
      <Route exact path="/AddPost" component={AddPost} /> 
      <Route exact path="/profile/:id" component={Profile}/>
      <Route exact path="/TimeLine" component={TimeLine}/>
      <Route exact path="/myProfile" component={MyProfile}/>
      <Route path="*" component={NotFoundPage}/>
      </Switch>
    </div>
    {token?(<MyProfile/>):("")}
   
    {/* <Footer/> */}
    </div>
  );
}

export default App;
