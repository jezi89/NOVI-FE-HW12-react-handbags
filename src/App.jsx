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
                <section>
                    <Tile
                        type={tilesData[0].type}
                        title={tilesData[0].title}
                        paragraphs={tilesData[0].paragraphs}
                        image={tilesData[0].image}
                    />
                </section>
                <section>
                    <Tile
                        type={tilesData[1].type}
                        title={tilesData[1].title}
                        paragraphs={tilesData[1].paragraphs}
                        image={tilesData[1].image}
                    />
                </section>
                <section>
                    <Tile
                        type={tilesData[2].type}
                        title={tilesData[2].title}
                        paragraphs={tilesData[2].paragraphs}
                        image={tilesData[2].image}
                    />
                </section>
                <section>
                    <Tile
                        type={tilesData[3].type}
                        title={tilesData[3].title}
                        paragraphs={tilesData[3].paragraphs}
                        image={tilesData[3].image}
                    />
                </section>
            </footer>
        </>
    );
}

export default App;
