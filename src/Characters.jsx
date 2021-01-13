import React from 'react'

export default function Characters({name , image, house}) {
    return (
        <div className ="card">
        <h2>{name}</h2>
        <img src={image} alt="" srcset=""/>
        <p><span style={{fontWeight :"bold"}}> House</span> : {house}</p>
       
    </div>
    )
}
