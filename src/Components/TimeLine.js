import React ,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { FcLike,FcLikePlaceholder } from "react-icons/fc";



export default function TimeLine() {
const [postsofFollowing, setPostsofFollowing] = useState([])
const [toggleLike, setToggleLike] = useState(false)


const token = useSelector((state) => state.tokenX.token)


useEffect(async() => {
    console.log("hi");
    console.log(token,"GHJKL;");

try {
    const res= await axios.get("http://localhost:5000/postsofFollowing",{
        headers: { authorization: `Bearer ${token}` },
      })
 console.log(res.data);
 setPostsofFollowing(res.data)
} catch (error) {
    console.log(error.response.data,"errror");
}  
}, [])

const addLike=()=>{

    setToggleLike(!toggleLike)
  }

  const disLike=()=>{

    setToggleLike(!toggleLike)
  }



    return (
        <div className="container">
        {postsofFollowing.map((elem,index)=>{
            return(
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
            )
        })}  
        </div>
    )
}
