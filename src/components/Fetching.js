import axios from 'axios';
import React,{useState,useEffect} from 'react'

export default function Fetching() {

    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    },[]);
  return (
    <div>
        <ol>
            {data.map((item,index)=>(
                <li key={index}>
                    <p>{item.id},{item.title},<b> price={item.price}</b></p>
                    <h6>{item.description}</h6>
                    <p>{item.category}</p>
                    <img src={item.image} alt={item.title} width={"100px"}/>{item.rating.rate}
                </li>
            ))}
        </ol>
    
    </div>
  )
}
