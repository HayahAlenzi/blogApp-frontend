import React ,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'


export default function TimeLine() {
const [postsofFollowing, setPostsofFollowing] = useState([])

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
