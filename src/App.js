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
import OnePost from './Components/OnePost'
import TimeLine from './Components/TimeLine'
import MyProfile from './Components/MyProfile'
import NotFoundPage from './NotFoundPage'
import { useSelector } from 'react-redux'
import MyPosts from "./Components/MyPosts"
import MyFollow from "./Components/MyFollow"
import Mylikes from "./Components/Mylikes"
import MyMessage from "./Components/MyMessage"
import G from "./Components/g"
import BasicOfChat from './Components/BasicOfChat'

import "./App.css"


function App() {
  const token = useSelector((state) => state.tokenX.token)





  return (
    <div>
      
      <div className='appDiv ms-auto'>
       <NavBar />
       <div className='divApp'>
       <Switch>
      <Route exact path="/Explor"  component={Explor}/>
      <Route exact path="/About" component={About} />
      <Route exact path="/Search" component={Search} />
      <Route exact path="/login" component={LogIn} /> 
      <Route exact path="/SignUp" component={SignUp} /> 
      <Route exact path="/AddPost" component={AddPost} /> 
      <Route exact path="/profile/:id" component={Profile}/>
      <Route exact path="/p/:id" component={OnePost}/>
      <Route exact path="/TimeLine" component={TimeLine}/>
      <Route exact path="/myProfile" component={MyProfile}/>
      <Route exact path="/MyPosts" component={MyPosts}/>
      <Route exact path="/MyFollow" component={MyFollow}/>
      <Route exact path="/Mylikes" component={Mylikes}/>
      <Route exact path="/MyMessage" component={MyMessage}/>
      <Route exact path="/g" component={G}/>
      <Route exact path="/BasicOfChat" component={BasicOfChat}/>




      <Route path="*" component={NotFoundPage}/>
      </Switch>
      </div>
    </div>
    {/* {token?(<MyProfile/>):("")} */}
   
    {/* <Footer/> */}
    </div>
  );
}

export default App;
