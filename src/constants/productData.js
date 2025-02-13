// src/constants/productData.js
const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', {eager: true});

const productData = {
    label: ["Best seller", "Limited Edition", "New Arrival", "Exclusive"],
    image: Object.values(images).map((img) => img.default),
    name: ["The Handy Bag", "The Elegant Tote", "The Trendy Clutch", "The Luxury Purse"],
    price: ["{currency}400", "{currency}350", "{currency}300", "{currency}450"]
};

export default productData;
