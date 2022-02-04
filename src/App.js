import React from "react";
import { Route, Routes } from "react-router-dom";

//components
import Navbar from "./components/Navbar/Navbar";
import Store from "./components/Shop/Store";
import Cart from "./components/Cart/Cart";
import Landing from "./components/Landing";
import ProductDetail from "./components/Shop/ProductDetail";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/store" element={<Store />} />
                <Route path="/store/:id" element={<ProductDetail/>} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
}

export default App;
