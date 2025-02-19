import React from 'react';

const renderParagraphs = (paragraphs) => {
    return paragraphs?.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));
};

const Tile = React.memo(({image, imageDescription, title, paragraphs, children}) => {
    return (
        <section>
            {image ? (
                <img src={image} alt={imageDescription}/>
            ) : (
                <>
                    <h2>{title}</h2>
                    {children || renderParagraphs(paragraphs)}
                </>
            )}
        </section>
    );
});

Tile.displayName = 'Tile';


export default Tile;
