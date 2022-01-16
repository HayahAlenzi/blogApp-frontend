import React, { useState } from "react";
import ProgressBar from './ProgressBar';
import { useSelector } from "react-redux";
import axios from "axios";
import "./addPost.css"

export default function AddPost() {
  const [inputTitel, setInputTitel] = useState("");
  const [inputDes, setInputDes] = useState("");
  const [inputImg, setInputImg] = useState("");
  const [inputType, setInputType] = useState("")
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const token = useSelector((state) => state.tokenX.token);

  // const changeEmail    = (e) => {setEmail(e.target.value);};
  const titelVal = (e) => {
    setInputTitel(e.target.value);
  };

  const desVal = (e) => {
    setInputDes(e.target.value);
  };

  const typeVal = (e) => {
    setInputType(e.target.value);
  };
  console.log(inputType);
  const sendData = async () => {
    const res = await axios.post(
      "http://localhost:5000/dataPosts",
      {
        title: inputTitel,
        des: inputDes,
        img: inputImg,
        type:inputType
      },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    // setInputTitel("")
    // setInputDes("")
    // setInputImg("")

  };

  const changeVal = (e) => {
    let selected = e.target.files[0];
    console.log(selected);
    if (selected) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };
  return (
    <>
    
      {token?<div className="b">
            <input className="inputFiled" onChange={(e)=>{titelVal(e)}} placeholder='Write titele' type="text"/>
            <input className="inputFiled" onChange={(e)=>{desVal(e)}} placeholder='Write a caption...' type="text" />
            <input className="inputFiled" type="file" onChange={changeVal} />

            <select onChange={(e)=>{typeVal(e)}} >
    <option value="Food blogs">Food blogs</option>
    <option value="News blogs">News blogs</option>
    <option value="Travel blogs">Travel blogs</option>

    <option value="Lifestyle blogs">Lifestyle blogs</option>
    <option value="Business blogs"> Business blogs</option>
    <option value="Movie blogs">Movie and Music blogs</option>

    <option value="Fashion and beauty blogs">Fashion and beauty blogs</option>
  </select>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && (
          <ProgressBar
            file={file}
            setFile={setFile}
            setInputImg={setInputImg}
          />
        )}

      </div> 
            <button onClick={()=>{sendData()}}> Shere</button>
        
        </div>:""}</>
    
  );
}
