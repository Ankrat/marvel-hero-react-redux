import React from "react";

const SerieList = ({ heroData }) => {
    return (
        <div>
            <h2>
                Comics <span className="u-small">({heroData.available})</span>
            </h2>
            <ul>
                {heroData.items.map((comic, index) => (
                    <li key={index}>
                        <span>{comic.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SerieList;
