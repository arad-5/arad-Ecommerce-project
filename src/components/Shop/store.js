import React, { useContext } from "react";

//products context
import { products_context } from "../../Context/ProductsContextProvider";

//components
import Card from "./Card";

export default function Store() {
    const products = useContext(products_context);
    return (
        <main>
            {products.map((product) => (
                <Card key={product.id} productData={product}/>
            ))}
        </main>
    );
}
