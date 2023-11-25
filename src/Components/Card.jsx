import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Card.css'
function Card({item}) {
    const userprofile=`/userprofile/${item.id}`;
    return (
        <>
            <div className='Card'>
                <div>
                    <img src={item.image} alt="loading..." style={{width: '100%', height: '300px',objectFit:'cover' ,borderRadius:"19px"}} />
                </div>
                <div className='Card-Info' style={{textAlign : 'center'}}>
                    <Link to={userprofile}><h2>{item.name}</h2></Link>
                    <div style={{display : 'flex', justifyContent : 'center' , alignItems : 'center'}}>
                    <span>{item.species}-</span>
                    <span>{item.status}</span>

                    </div>
                    <h2>{item.gender}</h2>
                    <a href={item.location.url} style={{textDecoration : 'none'}}><span>Location</span></a>

                </div>
            </div>
        </>
    )
}

export default Card
