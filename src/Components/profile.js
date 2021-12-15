import axios from 'axios'
import React ,{useEffect ,useState}from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Profile() {

    const [userProfile, setUserProfile] = useState([])

    const {id}=useParams()
    const token = useSelector((state) => state.tokenX.token)
    console.log(userProfile);

    useEffect(async() => {
       const res= await axios.get(`http://localhost:5000/userPosts/${id}`,{
        headers: { authorization: `Bearer ${token}` },
      })
      console.log(res.data);
      setUserProfile(res.data)
    },[])


    const testFollow=async(id)=>{
        const res= await axios.post(`http://localhost:5000/addFollow/${id}`)
    }

    return (
        <div>
            {}
        <h1> profile: {userProfile[1] && userProfile[1].userId.name}</h1>
        <h2>{  userProfile[1]&&userProfile[1].userId._id}</h2>
        <button onClick={()=>{testFollow(userProfile[1]&&userProfile[1].userId._id)}}>Follow</button>


        {userProfile.map((elem, index) => {
              // console.log(elem);
                  return (
                    <div key={index}>
                                
                        <h3>{elem.title}</h3>
                        <p>{elem.des}</p>
                        <h6>data{elem.date}</h6>
                        <img src={elem.img} alt="img" />
{/* <button onClick={()=>{testFollow(elem._id)}}>Testn Follow</button> */}


                    </div>
                            
                            );
                            })}
        </div>
    )
}
