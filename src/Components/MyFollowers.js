import React from 'react';
import { useHistory } from "react-router-dom";




export default function MyFollowers({myFollowers}) {
    const history = useHistory();


    const goToProfile = (id) => {
        history.push(`/profile/${id}`);
    };
  return(
       <div>
MyFollowers
{myFollowers.map((elem, index) => {
        console.log("myyyy"+elem);
        return (
            <div>
      <h1 style={{cursor: "pointer"}} onClick={() => {goToProfile(elem._id); }}>{elem.name}</h1>
      
            </div>

);
})}
  </div>
  )
}
