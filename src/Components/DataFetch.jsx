import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Items from './Items';
function DataFetch() {
    const [post,setpost]=useState([]);
    useEffect(()=>{

         const fetchdata=async()=>{
            const res=await axios.get('https://rickandmortyapi.com/api/character');
            setpost(res.data.results);

         }
         fetchdata();

    },[])
    console.log(post);
  return (
    <>
     <h1>This is my data</h1>
     <Items post={post}></Items>
   
    </>
  )
}

export default DataFetch
