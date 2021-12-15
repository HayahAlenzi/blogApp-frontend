import React ,{useState ,useEffect}from 'react'
import { useSelector ,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import axios  from  "axios"
import "./Explor.css"



export default function Activities() {

    const [publicData, setPublicData] = useState([])
    const token = useSelector((state) => state.tokenX.token)
    
    const history=useHistory()

    const goToProfile=(id)=>{

history.push(`/profile/${id}`)
    }
    useEffect(async () => {
       const resData= await axios.get("http://localhost:5000/dataPosts")
       setPublicData(resData.data)
       console.log(resData.data);
    }, [])

    return (
        <div className='div-container'>

{publicData.map((elem, index) => {
          // console.log(elem);
          return (
            <div key={index}>
        
<h3>{elem.title}</h3>
<p>{elem.des}</p>
<h6>data{elem.date}</h6>
<img src={elem.img} alt="img" />
<h4><Link onClick={()=>{goToProfile(elem.userId._id)}} >{elem.userId.name}</Link></h4>
</div>
          
          );
        })}



        </div>
    )
}