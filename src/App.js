import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
//components
import Navbar from "./components/Navbar/Navbar";
import Store from "./components/Shop/Store";
import Cart from "./components/Cart/Cart";
function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Store />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
}

export default App;
