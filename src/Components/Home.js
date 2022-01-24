import React from 'react'
// import NavBar from "./Components/NavBar"
// import MyProfile from './Components/MyProfile'
// import Footer from './Components/Footer'
import { useSelector } from 'react-redux'
import "./Home.css"


export default function Home() {
    const token = useSelector((state) => state.tokenX.token)
    return (
        
            
      <div className='home-div'>
          <h1>
              WELCOME
          </h1>
       {/* <NavBar /> */}
       {/* {token?(<MyProfile/>):("")} */}

{/* <Footer/> */}
</div>
            
    
    )
}
