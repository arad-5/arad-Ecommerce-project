import { createContext, useState, useEffect } from "react";

//API
import { GetProductsAPI } from "../services/fetchAPI";

//psocuts context
export const products_context = createContext();

export function ProductsContextProvider({ children }) {
    const [products, setproducts] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async () => {
            setproducts(await GetProductsAPI());
        };
        fetchAPI();
    }, []);

    return <products_context.Provider value={products}>{children}</products_context.Provider>;
}
