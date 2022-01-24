import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useHistory } from "react-router-dom";


export default function MyFollow({myFollowing}) {
    const [myFollow, setMyFollow] = useState([])
    const token = useSelector((state) => state.tokenX.token)
    const history = useHistory();
console.log(myFollowing,"bnbnbnbnbnb");

// useEffect(async() => {
//     const res2 =await axios.get("http://localhost:5000/FollowArr",{
//         headers: { authorization: `Bearer ${token}` },
      
//        })
//        console.log(res2.data,"ressss2");//give me follow data
// }, [])

const goToProfile = (id) => {
    history.push(`/profile/${id}`);
};

    return (
        <div>
            MyFollowing

            {myFollowing.map((elem, index) => {
        console.log(elem);
        return (
            <div>
      <h1 style={{cursor: "pointer"}} onClick={() => {goToProfile(elem._id); }}>{elem.name}</h1>
      
            </div>

);
})}


        </div>
    )
}
