import React, { Component } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import { useState } from "react";

//LAYOUT
import Header from "./components/layout/Header";

//PAGES
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NFTHeader from "./components/layout/NFTHeader";
import Shopping from "./components/pages/Shopping";

import ImageBoard from "./components/pages/nfts/ImageBoard";

function App() {
  const [param, setParam] = useState("underwater-club");

  return (
    <div className="App">
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/nfts/*" element={<NFTHeader/>}/>
                <Route exact path="/nfts/:collectionName" element={<><NFTHeader/><ImageBoard/></>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/shopping" element={<Shopping/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
