import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//context
import { ProductsContextProvider } from "./Context/ProductsContextProvider";
import { CartContextProvider } from "./Context/CartContextProvider";

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
