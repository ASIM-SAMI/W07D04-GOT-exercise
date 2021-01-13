import React from 'react'
import '../index.css';

export const Character = (props) => {
    
    return (
        <div className='card'>
            <h1>{props.name}</h1>
            <img src={props.img} alt=""/>
            <p><b>House: </b>{props.house}</p>
        </div>
    )
}
