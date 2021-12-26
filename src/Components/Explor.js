import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import axios from "axios";
import "./Explor.css";

export default function Activities() {
  const [publicData, setPublicData] = useState([]);
  const history = useHistory();
  const token = useSelector((state) => state.tokenX.token);


  const goToProfile = (id) => {
    history.push(`/profile/${id}`);
  };
  useEffect(async () => {
    const resData = await axios.get("http://localhost:5000/dataPosts");
    setPublicData(resData.data);
    // console.log(resData.data);
  }, []);

  return (
    <div className="container">
      {publicData.map((elem, index) => {
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
                <h3><FcLike/><FcLikePlaceholder/></h3>
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
                  <small>data{elem.date.substr(0,10)}</small>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
