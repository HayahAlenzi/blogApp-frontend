import axios from 'axios'
import React ,{useEffect ,useState}from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "./Profile.css"



export default function Profile() {

    const [userProfile, setUserProfile] = useState([])
    const [toggle, setToggle] = useState(false)
    const {id}=useParams()

    
    const token = useSelector((state) => state.tokenX.token)

    useEffect(async() => {
     
        const res= await axios.get(`http://localhost:5000/userPosts/${id}`)
        console.log(res.data);
        setUserProfile(res.data)
      
    },[])


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

    return (
        <div>
            {}
        <h1> profile: {userProfile[0] && userProfile[0].userId.name}</h1>
        <h2>{  userProfile[0]&&userProfile[0].userId._id}</h2>
       {toggle?( <button onClick={()=>{unFollow(userProfile[0]&&userProfile[0].userId._id)}}>UnFollow</button>):
        
        (<button onClick={()=>{testFollow(userProfile[0]&&userProfile[0].userId._id)}}>Follow</button>)}



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