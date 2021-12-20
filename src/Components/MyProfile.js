import axios from 'axios'
import React ,{useEffect,useState}from 'react'
import { useSelector } from 'react-redux'
import "./MyProfile.css"


export default function MyProfile() {
const [myData, setMyData] = useState([])

const token = useSelector((state) => state.tokenX.token)


useEffect(async() => {
  const res = await axios.get("http://localhost:5000/getUserDetail",{
  headers: { authorization: `Bearer ${token}` },
})
console.log(res.data);
setMyData(res.data)


const res2 =await axios.get("http://localhost:5000/FollowArr",{
  headers: { authorization: `Bearer ${token}` },

 })
 console.log(res2.data);

}, [])


    return (
        <div>
          {/* {myData&&myData[0]} */}
        {myData.map((elem,index)=>{
          return(
            <div className='mainDiv' key={index}>
  <img
                            src="https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png"
                            alt="user__image"
                            className="user__image"
                          />
                           <h3>Name: {elem.userId.name}</h3> 
  {/* <div> */}
  <h4>|following|</h4><h4>|followers|</h4> 
  <h4>posts: 125</h4> 
  <h4>likes: 12K{elem.userId.like}</h4> 
  <h4>message</h4> 




  {/* </div> */}


            </div>

          ) })}
            
        </div>
    )
}
