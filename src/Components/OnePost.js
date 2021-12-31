import axios from 'axios'
import React ,{useEffect ,useState}from 'react'
import { useParams } from 'react-router-dom'
import "./OnePost.css"


export default function OnePost() {
  const [objPost, setObjPost] = useState({})
    const {id}=useParams()

    useEffect(async() => {
        const res1= await axios.get(`http://localhost:5000/onepost/${id}`)
        console.log(res1.data);
        setObjPost(res1.data)
    }, [])

    return (
        <div>
            <div class="container text-center">
            <h1>{objPost.title}</h1>
 
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
              <span>Tayp of blog</span>
            </div>
            <div class="title-product">
              <h2><b>{objPost.title}</b></h2>
            </div>
            <div class="description-prod">
              <p><b>{objPost.des}</b></p>
            </div>

            <div className='commint'>

            </div>


            <div >
            <div className='inptBut'>
            <input placeholder='Add a comment... ' className='css-input'/>
            <button className='css-but'>Sand</button></div>
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
