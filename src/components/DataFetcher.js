import React, { useState, useEffect } from "react";
import axios from "axios";
export default function DataFetcher() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respose = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(respose.data);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <div>
    <h1> Fetched Data using async function  </h1>
    <ul>
        {data.map(item => (
            <li key={item.id}>
                <p> {item.id}</p>
                {item.title}
                <p>  {item.body} </p>
                  
            </li>
        ))}
    </ul>
  </div>;
}
