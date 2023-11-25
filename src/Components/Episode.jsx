import axios from 'axios';
import React, { useState,useEffect } from 'react'

function Episode({id}) {
    
    const [episodeName , SetepicodeName]=useState([]);
    
   
    useEffect(()=>{
        const fetchepisode = async () => {
            
            const user=await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
            const userepisode=user.data.episode;
            let userArray=[];
            for(let i=0;i<userepisode.length;i++){
                const userinfo=await axios.get(userepisode[i]);
                userArray.push(userinfo.data.name);

            }
            SetepicodeName(userArray);
        }
        fetchepisode();
        },[]);

    console.log("this is name" ,episodeName);
    return (
        <>
            {
                episodeName.map((item) => (
                    <li>{item}</li>

                ))
            }
        </>
    )
}

export default Episode
