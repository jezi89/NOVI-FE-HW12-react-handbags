const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', {eager: true});


export const productData = {
    label: ["Best seller", "Limited Edition", "New Arrival", "Exclusive"],
    image: Object.values(images).slice(0, 4).map((img) => img.default),
    name: ["The Handy Bag", "The Elegant Tote", "The Trendy Clutch", "The Luxury Purse"],
    price: ["{currency}400", "{currency}350", "{currency}300", "{currency}450"]
};


export const tilesData = [
    {
        type: 'text',
        title: 'The Brand',
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Odio labore placerat nonummy mazim nulla, illum mollit cillum esse doming obcaecat cupiditat accumsan illum te nam dolore facilisi congue voluptate pariatur facilisi esse dolore laborum enim soluta sunt quod sunt."
        ]
    },
    {
        type: 'text',
        title: 'Our Story',
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Odio labore placerat nonummy mazim nulla, illum mollit cillum esse doming obcaecat cupiditat accumsan illum te nam dolore facilisi congue voluptate pariatur facilisi esse dolore laborum enim soluta sunt quod sunt. "
        ]

    },
    {
        type: 'image',
        image: Object.values(images)[4].default
    },
    {
        type: 'image',
        image: Object.values(images)[5].default
    }
];


export default productData;
