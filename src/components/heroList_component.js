import React from "react";
import PageLink from "./PageLink";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faWindowRestore } from "@fortawesome/fontawesome-free-regular";
import { faSpinner } from "@fortawesome/fontawesome-free-solid";

const HerosListComponent = ({ herosList, onHeroClick }) => {
    // If hero list is not empty, display list
    if (herosList.length) {
        return (
            <ul className="grid-wrapper">
                {/* loop through each hero and build a li item*/}
                {herosList.map((item, index) => (
                    <li
                        key={index}
                        className="hero-list-item flex-align--bottom"
                    >
                        <img
                            src={`${item.thumbnail.path}/standard_fantastic.${
                                item.thumbnail.extension
                            }`}
                            alt={item.name}
                            className="thumbnail"
                        />
                        <div className="hero-content-block">
                            <PageLink
                                heroLink={item}
                                fetchClick={() => {
                                    onHeroClick(item.id);
                                }}
                                heroId={item.id}
                            />
                            <div className="external-links">
                                <ul>
                                    {/* there are a few links associated,
                                    looping through them to build our list */}
                                    {item.urls.map((elem, index) => (
                                        <li key={index}>
                                            <a
                                                href={elem.url}
                                                target="_blank"
                                                className="u-small"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faWindowRestore}
                                                />
                                                {elem.type}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        );
    } else {
        // If hero list is empty, display loader
        return (
            <p className="loader">
                Is Loading ...
                <FontAwesomeIcon icon={faSpinner} />
            </p>
        );
    }
};

export default HerosListComponent;
