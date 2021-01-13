import React from 'react'
import '../index.css';

export const House = (props) => {
    // console.log(props.logo)
    return (
        <div className='card'>
            <img src={props.logo} alt=""/>
            <p><b>Seat: </b>{props.seat}</p>
        </div>
    )
}
