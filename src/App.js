import React from "react";
import { Routes, Route, json } from 'react-router-dom'
import AddToFav from "./components/AddToFav";
import Home from "./components/Home";
import './Custom.css'

function App() {

   return (
      <div className="App">
         
         <Routes>
            <Route path="" element={<Home />}/>
            <Route path="searchfav" element={<AddToFav />}/>
            <Route path="editfav" element={<AddToFav/>}/>
         </Routes>
      </div>
   );
}

export default App;
