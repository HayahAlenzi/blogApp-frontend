import axios from 'axios'
import React ,{useEffect ,useState}from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import "./OnePost.css"
import ScrollToBottom from "react-scroll-to-bottom";



export default function OnePost() {
  const [objPost, setObjPost] = useState({})
  const [commet, setCommet] = useState("")
  const [getcommet, setgetcommet] = useState([])
    const {id}=useParams()
    // console.log(id);
    const token = useSelector((state) => state.tokenX.token);
    const userName = useSelector((state) => state.tokenX.userName);
console.log(userName);

    useEffect(async() => {
        const res1= await axios.get(`http://localhost:5000/onepost/${id}`)
        console.log(res1.data);
        setObjPost(res1.data)


        const res2 = await axios.get(`http://localhost:5000/commet/${id}`)
        setgetcommet(res2.data.Comment)
        console.log(res2.data.Comment);
    }, [])

    const commentVal=(e)=>{
      setCommet(e.target.value)

    }

    const sandCommet=async(id)=>{
      console.log(token);
      const response = await axios.post(`http://localhost:5000/commet/${id}`, { 
        commet: commet,
        userName:userName
      
      },
      {
        headers: { authorization: `Bearer ${token}` },
      });
      console.log(response.data.Comment);
      setgetcommet(response.data.Comment)
    }
 

    return (
        <div>
            <div class="container text-center">
 
</div>


<div class="shell">
  
  <div class="containerxx">
    {/* <div class="row"> */}
      <div class="col-md-3">
        <div class="wsk-cp-product">

          <div class="wsk-cp-img">
            <img src={objPost.img} alt="img" class="immg" />
          </div>
       
          {/* <div class="wsk-cp-text">
            <div class="category">
              <span>Tayp of blog</span>
            </div>
            <div class="title-product">
              <h3>My face not my heart</h3>
            </div>
            <div class="description-prod">
              <p>hi</p>
            </div>
            <div class="card-footer">
              <div class="wcf-left"><span class="price">Rp500.000</span></div> 
             <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
            </div>
          </div>
         </div> */}
          {/* </div> */}
     
         </div></div>




           <div class="wsk-cp-text">
            <div class="category">
              <span>{objPost.type}</span>
              
            </div>
            <div class="title-product">
              
              <h2 style={{margin:"50px"}}><b>{objPost.title}</b></h2>
            </div>
            <div class="description-prod">
              <p><b>{objPost.des}</b></p>
            </div>
<ScrollToBottom>
            <div className='commint'>
            {getcommet.map((elem,index)=>{
            return(
                <div  key={index}>

       <h2>{elem.userName}:</h2><p>{elem.commet}</p>
</div>
            )
        })}
            </div>
            </ScrollToBottom>


            <div >
            <div className='inptBut'>
            <input placeholder='Add a comment... 'onChange={(e) =>{ commentVal(e); }} className='css-input'/>
            <button className='css-but'  onClick={()=>{sandCommet(objPost._id)}}>Sand</button></div>
            </div>


            <div class="card-footer">
              <div><span>{objPost.date}</span></div> 
             <div class="wcf-right"><a href="#" class="buy-btn"><i class="ss">Top</i></a></div>
            </div>

           
            
            
            </div></div>
        
        </div>
        
        </div>
       

    )
}
