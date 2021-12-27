import React, { useState } from "react";
import ProgressBar from './ProgressBar';

import { useSelector } from "react-redux";

import axios from "axios";
import UploadForm from "./UploadForm";

export default function AddPost() {
  const [inputTitel, setInputTitel] = useState("");
  const [inputDes, setInputDes] = useState("");
  const [inputImg, setInputImg] = useState("");
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

//   const imgVal = (e) => {
//     setInputImg(e.target.value);
//   };
  const sendData = async () => {
    const res = await axios.post(
      "http://localhost:5000/dataPosts",
      {
        title: inputTitel,
        des: inputDes,
        img: inputImg,
      },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
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
    
      {token?<div>
            <input onChange={(e)=>{titelVal(e)}} placeholder='Write titele' type="text"/>
            <input onChange={(e)=>{desVal(e)}} placeholder='Write a caption...' type="text" />
              <label>
        <input type="file" onChange={changeVal} />
      </label>
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
