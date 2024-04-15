import React from 'react'

const imageBaseUrl = "https://img.pokemondb.net/artwork";

export default function Box(props) {
  return (
      <div className="box" key={props.name}>
      <img src={`${imageBaseUrl}/${props.name}.jpg`} alt={props.name} />
      <p className="name">{props.name}</p>
      <p className="types">[Types]</p>
      <ul className="types-list">
        {props.types.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>
    </div>
  )
}
