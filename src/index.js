import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsContextProvider } from "./Context/ProductsContextProvider";
import { CartContextProvider } from "./Context/CartContextProvider";
ReactDOM.render(
    <ProductsContextProvider>
        <CartContextProvider>
            <App />
        </CartContextProvider>
    </ProductsContextProvider>,
    document.getElementById("root")
);
