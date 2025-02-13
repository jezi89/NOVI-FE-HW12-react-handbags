import React from "react";
import Button from "./components/button/Button";
import "./App.css"
import getProductList from "./components/product/ProductCard.jsx";

function App() {
    const products = getProductList();

    return (
        <>
            <h1>Handbags and Purses</h1>
            <nav>
                <Button text="To Collection" disabled={false} isToggleButton={true}/>
                <Button text="Shop All Bags" disabled={false}/>
                <Button text="Pre-orders" disabled={true}/>
            </nav>
            <main>

                {products.map((product, id) => (
                    <article key={id}>
                        <span>{product.label}</span>
                        <img src={product.image} alt={product.name}/>
                        <p>{product.name}</p>
                        <h4>{product.price}</h4>
                    </article>
                ))}
            </main>
        </>
    );
}

export default App;
