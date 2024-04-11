import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
          alt=""
        />
        <p>POKEMON</p>
      </div>
      <div className="links">
        <a href="https://pokeapi.co/">Pokemon Api</a>
        <a href="#">Pokemon Offical</a>
        <a href="#">About Author</a>
      </div>
    </div>
  );
}
