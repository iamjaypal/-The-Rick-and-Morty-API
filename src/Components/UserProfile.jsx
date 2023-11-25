import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Episode from './Episode'
import '../Styles/Userprofile.css'
import axios from 'axios'
function UserProfile() {
  const {id} = useParams();
  const [User, SetUser] = useState([]);
  const [Userlocations, SetUserlocations]=useState({});
  
  useEffect(()=>{
  const fetchuserdata = async () => {
    const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    SetUser(res.data)
    SetUserlocations(res.data.location);
  }
  fetchuserdata();

  },[id]);
  
  // const OriginObject=User.origin;
 
  
  return (
    <>
      <div className='userprofile'>
      <h1 style={{textAlign : "center"}}>User Profile</h1>
                <div className='upperpart'>

                    <img src={User.image} style={{width : "60%", height : "500px" ,paddingTop : "90px" ,paddingLeft : "20px"}} alt="loading..." />
                    <div style={{ padding : '2px 60px'}}>
                      <h1 >episode</h1>
                      <Episode id={id}></Episode>
                     
                    </div>
                </div>
                <div className='user-Info' style={{ display : 'flex'}}>        
                     <p><span style={{color : 'red'}}>UserName</span> :- <span style={{color : 'green'}}>{User.name}</span></p>
                     <p><span style={{color : 'red'}}>Species</span> :- <span style={{color : 'green'}}>{User.species}</span> </p>
                     <p><span style={{color : 'red'}}>Gender</span> :- <span style={{color : 'green'}}>{User.gender}</span></p>
                     <p><span style={{color : 'red'}}>Status</span> :- <span style={{color : 'green'}}>{User.status}</span></p>
                </div>
                <h2 style={{padding: "4px 20px"}}>We can know <span style={{color : 'blue'}}>{User.name}</span> locations :- </h2>  
                <p><span style={{color : 'red'}}>UserLocation</span> :- <span style={{color : 'green'}}>{Userlocations.name}</span></p>
                <p><span style={{color : 'red'}}>GoToLocation</span> :- <a href={Userlocations.url}>{Userlocations.url}</a>  </p>

            </div>

    </>
  )
}

export default UserProfile
