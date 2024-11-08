import axios from 'axios';
import React,{useEffect, useState} from 'react'

export default function FetchdatausingNew() {
    const [data,setData]=useState([]);


    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },[]);
  return (
    <div>
      <h1> Data fetch using axios in use  effect method </h1>
      <ol>
        {data.map((item,index) => (
          <li key={index}>
            {item.body}
          </li>
        ))}
      </ol>

    </div>
  )
}
