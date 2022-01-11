import axios from 'axios'
import React ,{useEffect ,useState}from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
// import BasicOfChat from './BasicOfChat';
import "./Profile.css"
import { useHistory } from "react-router-dom";




export default function Profile() {

    const [userProfile, setUserProfile] = useState([])
    const [toggle, setToggle] = useState(false)
    const [toggleLike, setToggleLike] = useState(false)
    const history = useHistory();


    const {id}=useParams()
    // console.log(id);
    const token = useSelector((state) => state.tokenX.token)

    useEffect(async() => {
     
        const res1= await axios.get(`http://localhost:5000/userPosts/${id}`)
        console.log(res1.data);
        setUserProfile(res1.data)

        const res2 =await axios.get("http://localhost:5000/FollowArr",{
         headers: { authorization: `Bearer ${token}` },

        })
        console.log(res2.data.following);



     for (let i = 0; i < res2.data.following.length; i++) {
      if(res2.data.following[i]._id ==id){
        console.log(res2.data.following[i],"that");
        setToggle(true)
      }
       
     }

      //   const findFollowing=res2.data.following.find(ele=>ele._id==id)
      //   console.log(id);
      // console.log(findFollowing,"hh");
      // if(findFollowing){
      //   setToggle(true)
      // }

    },[])

    console.log(toggle);

    const goToChat = (id,name) => {
      history.push(`/chat/${id}/${name}`);
};

    const testFollow=async(id)=>{
      console.log(id);
      console.log(token);
      try {
        const res= await axios.post(`http://localhost:5000/addFollow/${id}`,{},{
          headers: { authorization: `Bearer ${token}` },
        })
        setToggle(!toggle)

        console.log(res);
      } catch (error) {
        console.log(error.response.data);
      }
     
    }


    const unFollow=async(id)=>{
      console.log(id);
      console.log(token);
      try {
        const res= await axios.put(`http://localhost:5000/unFollow/${id}`,{},{
          headers: { authorization: `Bearer ${token}` },
        })
        setToggle(!toggle)

        console.log(res);
      } catch (error) {
        console.log(error.response.data);
      }
     
    }

    const addLike=()=>{

      setToggleLike(!toggleLike)
    }
  
    const disLike=()=>{
  
      setToggleLike(!toggleLike)
    }

    return (
        <div>


<input id="slider" class="customSlider" type="checkbox"/>
<label for="slider"></label>

<div class="wrapper">
	<div class="top-icons">
		<i class="fas fa-long-arrow-alt-left"></i>
		<i class="fas fa-ellipsis-v"></i>
		<i class="far fa-heart"></i>
	</div>
	
	<div class="profile">
		<img src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w" class="thumbnail"/>
		<div class="check"><i class="fas fa-check"></i></div>
		<h3 class="name">Beverly Little</h3>
		<p class="title">Javascript Developer</p>
		<p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!</p>
		<button type="button" class="btn">Hire Me</button>
	</div>
	
	<div class="social-icons">
		<div class="icon">
			<a href="/"><i class="fab fa-dribbble"></i></a>
			<h4>12.8k</h4>
			<p>Followers</p>
		</div>
		
		<div class="icon">
			<a href="#"><i class="fab fa-behance"></i></a>
			<h4>12.8k</h4>
			<p>Followers</p>
		</div>
		
		<div class="icon">
			<a href="#"><i class="fab fa-twitter"></i></a>
			<h4>12.8k</h4>
			<p>Followers</p>
		</div>
	</div>
</div>

<div class="concept">concept by 
	<a href="https://dribbble.com/shots/4346772-Profile-Card" target="_blank">
		<i class="fab fa-dribbble"></i> Vijay Verma
	</a>
</div>

        <h1> profile: {userProfile[0] && userProfile[0].userId.name}</h1>
        <h2>{  userProfile[0]&&userProfile[0].userId._id}</h2>
        
       {toggle?( <button onClick={()=>{unFollow(userProfile[0]&&userProfile[0].userId._id)}}>UnFollow</button>):
        
        (<button onClick={()=>{testFollow(userProfile[0]&&userProfile[0].userId._id)}}>Follow</button>)}
          {/* <BasicOfChat  id ={id}/> */}
<button onClick={()=>{goToChat(userProfile[0]&&userProfile[0].userId._id,userProfile[0] && userProfile[0].userId.name)}}>Chat</button>

        {userProfile.map((elem, index) => {
              // console.log(elem);
                  return (
                    <div className="card" key={index}>
                          <div className="card__header">
                           <img src={elem.img} alt="img" />
                     </div>
                      <div className="card__body">
                            <span className="tag tag-blue">type of blog</span>
                            <h3>{elem.title}</h3>
                            <p>{elem.des}</p>
                      </div>
                      {token?(<div>   {toggleLike?( <h3 onClick={()=>{addLike()}}><FcLike/></h3>):
       ( <h3 onClick={()=>{disLike()}}><FcLikePlaceholder/></h3>)}</div>):("")}
                      <div className="card__footer">
                        <div className="user">
                          <img
                            src="https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png"
                            alt="user__image"
                            className="user__image"
                          />
                        </div>

                      <div className="user__info">

                           <h3> {elem.userId.name}</h3> 
                           <small>data{elem.date}</small>
                      </div>
                    </div>
                  </div>

);
})}

</div>
    )}