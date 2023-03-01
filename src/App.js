import React, { Component } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import { useState } from "react";

//LAYOUT
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer"

//PAGES
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NFTHeader from "./components/layout/NFTHeader";
import Shopping from "./components/pages/Shopping";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";

import ImageBoard from "./components/pages/nfts/ImageBoard";

function App() {
  const [param, setParam] = useState("underwater-club");

  return (
    <div className="App" class="transparent


    white-text">
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/nfts/*" element={<NFTHeader/>}/>
                <Route exact path="/nfts/:collectionName" element={<><ImageBoard/></>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/shopping" element={<Shopping/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
