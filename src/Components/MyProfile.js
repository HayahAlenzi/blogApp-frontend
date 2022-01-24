import axios from "axios";
import React, { useEffect, useState } from "react";
import MyPosts from "./MyPosts";
import MyFollow from "./MyFollow";
import Mylikes from "./Mylikes";
import MyMessage from "./MyMessage";
import MyFollowers from "./MyFollowers";

import { useSelector } from "react-redux";
import "./MyProfile.css";

export default function MyProfile() {
  const [myData, setMyData] = useState([]);
  const [userInfo, setuserInfo] = useState({});
  const [toggle, setToggle] = useState(0);
  const [myFollow, setMyFollow] = useState(null);
  const [myFollowing, setMyFollowing] = useState(null)
  const [myFollowers, setMyFollowers] = useState(null)

  const changeToggle = (x) => {
    setToggle(x);
  };

  const token = useSelector((state) => state.tokenX.token);

  useEffect(async () => {

    



    const res0 = await axios.get("http://localhost:5000/getUserinfo", {
      headers: { authorization: `Bearer ${token}` },
    });
    console.log(res0.data,"000000");
    setuserInfo(res0.data)

    const res = await axios.get("http://localhost:5000/getUserDetail", {
      headers: { authorization: `Bearer ${token}` },
    });
    console.log(res.data,"299999");
    setMyData(res.data);

    const res2 = await axios.get("http://localhost:5000/FollowArr", {
      headers: { authorization: `Bearer ${token}` },
    });
    console.log(res2.data, "ressss2"); //give me follow data
    setMyFollow(res2.data);
    setMyFollowing(res2.data.following)
    setMyFollowers(res2.data.followers)
  }, []);

  // console.log("ers",myFollowers);
 console.log(myData,"ddata");

  return (
    <div>
      {/* {myData&&myData[0]} */}
      {myData.map((elem, index) => {
        // console.log(elem);
        return (
          <div className="mainDiv" key={index}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png"
              alt="user__image"
              className="useimage"
            />
            <h3 className="tap-user" > {userInfo.name}</h3>
            {/* <div> */}
  {/* {myFollow?<h4 className="tap-user" style={{cursor: "pointer"}} onClick={() => {changeToggle(2); }}>followers:{myFollow.followers.length}</h4>:""} */}
            {/* <h4 className="tap-user" style={{cursor: "pointer"}} onClick={() => {changeToggle(3); }}> posts:{myData.length}</h4> */}
            <h4 className="tap-user"  style={{cursor: "pointer"}} onClick={() => {changeToggle(4); }}>likes:{userInfo.like.length}</h4>
            <h4 className="tap-user" style={{cursor: "pointer"}} onClick={() => {changeToggle(5); }}>message</h4>

            {/* </div> */}




            <div class="social-icons">
		<div class="icon">
			<a href="/"><i class="fab fa-dribbble"></i></a>
      <h4 className="tap-user" style={{cursor: "pointer" ,color:"black"}} onClick={() => {changeToggle(3); }}> {myData.length}</h4>
			<p>Posts</p>
		</div>

		<div class="icon">
			<a href="#"><i class="fab fa-behance"></i></a>
      <h4 className="tap-user" style={{cursor: "pointer",color:"black"}} onClick={() => {changeToggle(1)  }}>{myFollow && myFollow.following.length}</h4>

			
			<p> Following</p>
		</div>
		
		<div class="icon">
			<a href="#"><i class="fab fa-twitter"></i></a>
      {myFollowers?<h4 className="tap-user" style={{cursor: "pointer" ,color:"black"}} onClick={() => {changeToggle(2); }}>{myFollow&&myFollow.followers.length}</h4>:""}

			<p>Followers</p>
		</div>

	</div>
          </div>
        );
      })}
    
      <div className="toggleDiv">
        {toggle == 1 ? <MyFollow  myFollowing={myFollowing}/> : ""}
        {toggle == 2 ? <MyFollowers myFollowers={myFollowers}/> : ""}

        {toggle == 3 ? <MyPosts /> : ""}
        {toggle == 4 ? <Mylikes /> : ""}
        {toggle == 5 ? <MyMessage /> : ""}
      </div>
    </div>
  );
}
