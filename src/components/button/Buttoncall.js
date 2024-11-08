import React ,{useState} from 'react'
import DataFetcher from '../DataFetcher';
import FetchdatausingNew from '../FetchdatausingNew';
import Fetching from '../Fetching';

export default function Buttoncall() {
    const [current,setCurrent]=useState("A");

    const handleclick =(components)=>{
        setCurrent(components);
    };
  return (
    <div>
      <h1>using button call differnet apli</h1>
      <button onClick={()=> handleclick("A")}> DataFetcher </button>
      <button onClick={()=> handleclick("B")}> Fetchdatausing</button>
      <button onClick={()=> handleclick("C")}> Fetching </button>
    
        {current === "A" && <DataFetcher/>}
        {current === "B" && <FetchdatausingNew/>}
        {current === "C" && <Fetching/>}
    </div>
  )
}
