import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsContextProvider } from "./Context/ProductsContextProvider";
import { CartContextProvider } from "./Context/CartContextProvider";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
    <BrowserRouter>
        <ProductsContextProvider>
            <CartContextProvider>
                <App />
            </CartContextProvider>
        </ProductsContextProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
