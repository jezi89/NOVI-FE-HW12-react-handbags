import React from "react";
import productData from "../../constants/productData.js"

function getProductList() {
    return productData.label.map((label, id) => ({
        label,
        image:
            productData.image[id],
        name:
            productData.name[id],
        price:
            productData.price[id].replace("{currency}", "€")
    }))
}

export default getProductList;
