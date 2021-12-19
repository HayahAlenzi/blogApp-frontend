import React,{useState} from 'react'
import { useSelector } from 'react-redux';

import axios from 'axios'

export default function AddPost() {
    const [inputTitel, setInputTitel] = useState("")
    const [inputDes, setInputDes] = useState("")
    const [inputImg, setInputImg] = useState("")

    const token = useSelector((state) => state.tokenX.token)

// const changeEmail    = (e) => {setEmail(e.target.value);};
const titelVal  =(e)=> {setInputTitel(e.target.value)}

    const desVal=(e)=>{
setInputDes(e.target.value)
    }
    
    const imgVal=(e)=>{
setInputImg(e.target.value)
    }
const sendData=async()=>{
const res =await axios.post("http://localhost:5000/dataPosts",{
    title:inputTitel,
    des:inputDes,
    img:inputImg,
 
  },
  {
    headers: { authorization: `Bearer ${token}` },
  }
);
}
    return (
        <div>
{token}
            <input onChange={(e)=>{titelVal(e)}} placeholder='Write titele' type="text"/>
            <input onChange={(e)=>{desVal(e)}} placeholder='Write a caption...' type="text" />
            <input onChange={(e)=>{imgVal(e)}}placeholder='add img' type="url" /> 
            <button onClick={()=>{sendData()}}> Shere</button>
        
            ومكان ادخال البيانات
        </div>
    )
}
