import axios from "axios";
import React, { useEffect, useState } from "react";
import MyPosts from "./MyPosts";
import MyFollow from "./MyFollow";
import Mylikes from "./Mylikes";
import MyMessage from "./MyMessage";

import { useSelector } from "react-redux";
import "./MyProfile.css";

export default function MyProfile() {
  const [myData, setMyData] = useState([]);
  const [toggle, setToggle] = useState(0);
  const [myFollow, setMyFollow] = useState(null);
  const [myFollowing, setMyFollowing] = useState(null)
  const [myFollowers, setMyFollowers] = useState(null)

  const changeToggle = (x) => {
    setToggle(x);
  };

  const token = useSelector((state) => state.tokenX.token);

  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/getUserDetail", {
      headers: { authorization: `Bearer ${token}` },
    });
    console.log(res.data);
    setMyData(res.data);

    const res2 = await axios.get("http://localhost:5000/FollowArr", {
      headers: { authorization: `Bearer ${token}` },
    });
    console.log(res2.data, "ressss2"); //give me follow data
    setMyFollow(res2.data);
    setMyFollowing(res2.data.following)
    setMyFollowers(res2.data.followers)
  }, []);

  console.log("ers",myFollowers);
  console.log("ing",myFollowing);
  return (
    <div>
      {/* {myData&&myData[0]} */}
      {myData.map((elem, index) => {
        console.log(elem);
        return (
          <div className="mainDiv" key={index}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png"
              alt="user__image"
              className="user__image"
            />
            <h3>Name: {elem.userId.name}</h3>
            {/* <div> */}
            <h4 onClick={() => {changeToggle(1)  }}>following:{myFollow && myFollow.following.length}</h4>
  {myFollow?<h4 onClick={() => {changeToggle(2); }}>followers:{myFollow.followers.length}</h4>:""}
            <h4 onClick={() => {changeToggle(3); }}> posts:{myData.length}</h4>
            <h4 onClick={() => {changeToggle(4); }}>likes:{elem.userId.like.length}</h4>
            <h4 onClick={() => {changeToggle(5); }}>message</h4>

            {/* </div> */}
          </div>
        );
      })}
    
      <div className="toggleDiv">
        {toggle == 1 ? <MyFollow  myFollowing={myFollowing}/> : ""}
        {toggle == 3 ? <MyPosts /> : ""}
        {toggle == 4 ? <Mylikes /> : ""}
        {toggle == 5 ? <MyMessage /> : ""}
      </div>
    </div>
  );
}
