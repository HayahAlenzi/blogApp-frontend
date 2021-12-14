import React,{useState} from 'react'
import axios from 'axios'

export default function AddPost() {
    const [inputTitel, setInputTitel] = useState("")
    const [inputDes, setInputDes] = useState("")
    const [inputImg, setInputImg] = useState("")

    const titelVal=()=>{

    }

    const desVal=()=>{

    }
    
    const imgVal=()=>{

    }

    return (
        <div>

            <input onChange={()=>{titelVal()}} placeholder='Write titele' type="text"/>
            <input onChange={()=>{desVal()}} placeholder='Write a caption...' type="text" />
            <input onChange={()=>{imgVal()}}placeholder='add img' type="url" /> 
            <button> </button>
        
            ومكان ادخال البيانات
        </div>
    )
}
