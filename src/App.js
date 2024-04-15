import "./App.css";
import Navbar from "./Navbar";
import Pokemon from "./Pokemon";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
      <Pokemon></Pokemon>
      <Footer></Footer>
    </div>
  );
}

export default App;
