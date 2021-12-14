import React,{useState,useEffect}from 'react'
import axios from 'axios'
import {useHistory} from "react-router-dom"
import "./signUp.css"

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
    
 <div className="vh-100 d-flex text-light justify-content-center align-items-center ">
            <div style={{ height:"450px ", borderRadius:"15px "}} className=" p-2 col-md-3 bg-dark text-center pt-3  ">
                <h4 >Name</h4>
                <input onChange={(e)=>{nemeVlue(e)}} placeholder="Enter name" className="form-control mb-5 w-75 m-auto" />

                <h4 >Email</h4>
                <input placeholder="enterEmail" onChange={(e) =>{ emailValue(e); }} className="form-control mb-5 w-75 m-auto" />

                <h4> Password </h4>
                <input type="password" onChange={(e) =>{ passValue(e); }}placeholder="enter your pass"className=" m-auto mb-5 form-control w-75 m-3" />
                <button className=" btn btn-info px-5 fw-bold py-1"   onClick={()=>{addUser()}}>Submet </button>
        </div> </div>
     )
}