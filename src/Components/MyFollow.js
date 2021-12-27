import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function MyFollow({myFollowing}) {
    const [myFollow, setMyFollow] = useState([])
const token = useSelector((state) => state.tokenX.token)

// useEffect(async() => {
//     const res2 =await axios.get("http://localhost:5000/FollowArr",{
//         headers: { authorization: `Bearer ${token}` },
      
//        })
//        console.log(res2.data,"ressss2");//give me follow data
// }, [])

    return (
        <div>
            MyFollowffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

            {myFollowing.map((elem, index) => {
        console.log(elem);
        return (
            <div>
                <h1>are you here!</h1>
                <h1>{elem.userId}</h1>
            </div>

);
})}


        </div>
    )
}
