import React from 'react'

export default function Houses({name , image , seat}) {
    return (
        <div className ="card">
            <h2>{name}</h2>
            <img src={image} alt="" srcset=""/>
            <p><span style={{fontWeight :"bold"}}> seat</span> : {seat}</p>
        </div>
    )
}
