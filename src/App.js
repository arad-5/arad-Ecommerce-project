import React, { useContext, useState } from "react";
//components
import Navbar from "./components/Navbar/Navbar";
import Store from "./components/Shop/Store";
function App() {
    return (
        <>
            <Navbar />
            <Store />
        </>
    );
}

export default App;
