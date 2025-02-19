import React from "react";
import Button from "./components/button/Button";
import "./App.css"
import getProductList from "./components/product/ProductCard.jsx";
import Tile from "./components/Tile.jsx"
import {tilesData} from "./constants/productData.js";

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
                        <span>{['Best Seller', 'Best Seller', 'New Collection', 'New Collection'][id]}</span>
                        <img src={product.image} alt={product.name}/>
                        <p>{product.name}</p>
                        <h4>{product.price},-</h4>
                    </article>
                ))}
            </main>
            <footer>
                <Tile
                    title="The Brand"
                    paragraphs={tilesData[0].paragraphs}
                />
                <Tile
                    image={tilesData[2].image}
                    imageDescription="Brand logo"
                />
                <Tile
                    image={tilesData[3].image}
                    imageDescription="Designers"
                />
                <Tile
                    title="Our Story"
                    paragraphs={tilesData[1].paragraphs}
                />
            </footer>
        </>
    );
}

export default App;
