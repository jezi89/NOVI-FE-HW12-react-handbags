// src/components/Tile.jsx
function Tile({type, title, paragraphs, image}) {
    return (
        <>
            {type === 'text' ? (
                <>
                    <h2>{title}</h2>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </>
            ) : (
                <img src={image} alt="Brand or designer"/>
            )}
        </>
    );
}

export default Tile;
