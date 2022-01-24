import React ,{useEffect,useState}from 'react'
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';


export default function Likes() {
    const [likes, setLikes] = useState([])

  const token = useSelector((state) => state.tokenX.token);


    useEffect(async () => {
        const res = await axios.get(" http://localhost:5000/likedPosts", {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(res.data);
        setLikes(res.data);

  }, []);

   
    return (
        <div>
        <div className="container-posts-profile">
   {likes.map((elem, index) => {
     // console.log(elem);
     return (
       <div className="card"key={index}>
         <div>
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
               {/* <img
                 src="https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png"
                 alt="user__image"
                 className="user__image"
               /> */}
             </div>

             <div className="user__info">
               
                 {/* <h4
                 >
                   {elem.userId.name}
               </h4> */}
               <small>data{elem.date.substr(0,10)}</small>
               {/* <h3 onClick={()=>{deletePost(elem._id)}}><TiDeleteOutline/></h3> */}
             </div>
           </div>
         </div>
       </div>
     );
   })}
 </div>

     </div>
    )
}
