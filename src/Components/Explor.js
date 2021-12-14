import React ,{useState ,useEffect}from 'react'
import { useSelector ,useDispatch } from 'react-redux';

import axios  from  "axios"
import "./Explor.css"



export default function Activities() {

    const [publicData, setPublicData] = useState([])
    const token = useSelector((state) => state.tokenX.token)

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
<h4>{elem.userId.name}</h4>
</div>
          
          );
        })}



        </div>
    )
}