import React,{useState,useEffect}from 'react'
import axios from 'axios'
import {useHistory} from "react-router-dom"
// import "./signUp.css"

export default function SingUp() {
       const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPas] = useState("")

    const history= useHistory()
    


const nemeVlue=(e)=>{
setName(e.target.value)
}

const emailValue=(e)=>{
    setEmail(e.target.value)
    }

const passValue=(e)=>{
        setPas(e.target.value)
        }

const addUser=async ()=>{
    console.log("clickkk");
    const response = await axios.post("http://localhost:5000/signUp", { name: name,
        email: email,
        password: password,
      });
      console.log(response.data);
      if (response.status === 201){
          history.push("/LogIn")
      }
    };

    return (
    
 <div >
            <div style={{ height:"450px ", borderRadius:"15px "}} >
                <h4 >Name</h4>
                <input onChange={(e)=>{nemeVlue(e)}} placeholder="Enter name"/>

                <h4 >Email</h4>
                <input placeholder="enterEmail" onChange={(e) =>{ emailValue(e); }}  />

                <h4> Password </h4>
                <input type="password" onChange={(e) =>{ passValue(e); }}placeholder="enter your pass" />
                <button   onClick={()=>{addUser()}}>Submet </button>
        </div> </div>
     )
}