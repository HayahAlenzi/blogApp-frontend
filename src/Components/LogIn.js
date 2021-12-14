import React ,{useEffect, useState}from 'react'
import { useHistory , Link} from "react-router-dom";
import { useDispatch } from 'react-redux';

import { giveToken } from '../Reducers/actions';

import axios from 'axios';



export default function LogIn() {
    console.log("hhhhhhhhhhhhhhhhhhhhi");
    const [emailF, setEmail] = useState("")
    const [passF, setPass] = useState("")
    const [errMsg, setErrMsg] = useState("")

    const dispatch = useDispatch()
   
    
    const changeEmail    = (e) => {setEmail(e.target.value);};
    const changePassword = (e) => { setPass(e.target.value);};
    const history=useHistory() 
    
    
    
    const addUser = async()=> {

        if(!emailF || !passF){
      alert("Oops! Please Enter Yuor data!")
      return
    }
        try { 
            const res = await axios.post("http://localhost:5000/login", {
                email: emailF,
                 password : passF
           
           })
           if(res.status==200){
      
       console.log(res.data,"res.data");
       dispatch(giveToken(res.data.token  , res.data.payload.userId  , res.data.payload.userName))
           // come from App as props setTokenP(res.data.token)with out redux 
           // setT(res.data.token)
         
        setErrMsg("")

           localStorage.setItem("User Token", JSON.stringify(res.data.token))
           localStorage.setItem("User Name", JSON.stringify(res.data.payload.userName))
        history.push("/Explor")}
           
             else{
               setErrMsg(res.data)
               console.log(res.data);
           }

        } catch (error) {
            console.log(error.response.data);

            setErrMsg(error.response.data)
        }
   
}



    return (
        <>
        <h1 style={{color:"red", textAlign:"center",marginTop:"20px"}}> {errMsg}</h1>
             <div >
 
            <div style={{ height:"450px ", borderRadius:"15px "}} >
                <h4 >Email</h4>
                <input placeholder="enterEmail" onChange={(e)=>{changeEmail(e)}} />
                <h4> Password </h4>
                <input type="password" placeholder="enterPassWord" onChange={(e)=>{changePassword (e)}} />
                <button  onClick={()=>{addUser()}}> log in </button>
               
              <Link to="/SignUp">  <p  style={{color:"white",cursor: "pointer"}}> Don't have an account? Create account</p></Link>  
        </div >
        </div>
        </>
    )
}
