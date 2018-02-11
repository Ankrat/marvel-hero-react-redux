import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/fontawesome-free-solid";

import SerieList from "./serieList_component";

const HeroSingle = ({ heroData }) => {
    if (heroData) {
        const imgURL = `${heroData.thumbnail.path}/portrait_incredible.${
            heroData.thumbnail.extension
        }`;
        return (
            <div>
                <div className="grid-wrapper grid-wrapper--single">
                    <header className="singleHero--header">
                        <img src={imgURL} alt={heroData.name} />
                        <h1>{heroData.name}</h1>
                        <p>{heroData.description}</p>
                    </header>

                    <div className="serieList-component series">
                        <SerieList heroData={heroData.series} />
                    </div>
                    <div className="serieList-component comics">
                        <SerieList heroData={heroData.comics} />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <p className="loader">
                Is Loading ...
                <FontAwesomeIcon icon={faSpinner} />
            </p>
        );
    }
};

export default HeroSingle;
