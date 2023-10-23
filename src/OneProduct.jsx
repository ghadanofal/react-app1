import React from 'react'

export default function OneProduct(props) {
return (
    <div className="col-md-4 text-center">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <p>{props.price}</p>
    </div>
)
}
