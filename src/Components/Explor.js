import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import PostofExplor from "./PostofExplor";
import "./Explor.css";

export default function Activities() {
  const [publicData, setPublicData] = useState([]);
  const [userLikes, setUserLikes] = useState([]);
  const [searchInput, setSearchInput] = useState("")
  const [searchArr, setSearchArr] = useState([]);

  
  const token = useSelector((state) => state.tokenX.token);

 

  useEffect(async () => {
    const resData = await axios.get("http://localhost:5000/dataPosts");
    setPublicData(resData.data);
    console.log(resData.data);//for all posts

    const getUserlikes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/likedPosts", {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(res.data);
        setUserLikes(res.data); //for likes of user make login
    
      } catch (error) {
        console.log(error.response.data);
      }
    };

    getUserlikes();
    
  }, []);

  const searchBtn = ()=>{
      const searching = publicData.filter((elem)=>{
      console.log(elem);
        if(elem.type.includes(searchInput)){
          return elem
        }
      })
      setSearchArr(searching)
  }
// console.log(searchArr);

  return (
    <div id="container">
<div className="div-search">
  <input onChange={(e) => {
    setSearchInput(e.target.value);
    if(e.target.value == ""){
      setSearchArr([]);
    }}
    }className="input-search" type="text"placeholder="Search By Type of Blog"/>
  <button onClick={() => {searchBtn()}} className="button-search" >SEARCH</button>
  </div>
  <div className="container-cards-explor">

      { searchArr.length? searchArr.map((elem,index)=>{
        return <div>
          <PostofExplor elem={elem} index={index} userLikes={userLikes} />
        </div>
      }) 
      
      : 
      
      publicData.map((elem, index) => {
        console.log(elem);
        // console.log(userLikes);
        return (
          <PostofExplor elem={elem} index={index} userLikes={userLikes} />
          
          );
        })}
        </div>
    </div>
  );
}
