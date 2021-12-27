import React ,{useState,useEffect} from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from 'axios';


export default function PostofExplor({elem,index,userLikes}) {
    const [toggleLike, setToggleLike] = useState(false);
    const token = useSelector((state) => state.tokenX.token);
    const history = useHistory();



useEffect(() => {
  if(userLikes){
    for (let i = 0; i < userLikes.length; i++) {
        if(elem._id==userLikes[i]._id){
            setToggleLike(true)
        }
            
        }
  }
    

}, [userLikes])
  

  const goToProfile = (id) => {
                history.push(`/profile/${id}`);
  };


  const addLike = async (id) => {
                console.log("cliiiiikc");
                try {
                const res = await axios.post(
                    `http://localhost:5000/likedPosts/${id}`,
                    {},
                    {
                    headers: { authorization: `Bearer ${token}` },
                    }
                );
                setToggleLike(!toggleLike);
                console.log(res.data, "likeeed!");
                } catch (error) {
                console.log(error.response.data);
                }
  };

  const disLike = async (id) => {
                try {
                const res = await axios.put(
                    `http://localhost:5000/dislike/${id}`,
                    {},
                    {
                    headers: { authorization: `Bearer ${token}` },
                    }
                );
                setToggleLike(!toggleLike);
                console.log(res.data, "dislike ! :( ");
                } catch (error) {
                console.log(error.response.data);
                }
    };





    return (
        <div>
             <div className="card" key={index}>
            <div>
              <div className="card__header">
                <img src={elem.img} alt="img" />
              </div>
              <div className="card__body">
                <span className="tag tag-blue">type of blog</span>
                <h3>{elem.title}</h3>
                <p>{elem.des}</p>

                {/* {for(let i=0,i<userLikes)}      */}
                {token ? (
                  <div>
                    {" "}
                    {toggleLike ? (
                      <h1
                        onClick={() => {
                          disLike(elem._id);
                        }}
                      >
                        <FcLike />
                      </h1>
                    ) : (
                      <h2
                        onClick={() => {
                          addLike(elem._id);
                        }}
                      >
                        <FcLikePlaceholder />
                      </h2>
                    )}
                  </div>
                ) : (
                  ""
                )}
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
                  <h4
                    onClick={() => {
                      goToProfile(elem.userId._id);
                    }}
                  >
                    {elem.userId.name}
                  </h4>
                  <small>data{elem.date.substr(0, 10)}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
