import React from "react";
import { Link } from "react-router-dom";

const PageLink = ({ heroLink, fetchClick }) => {
    return (
        <Link
            to={`/${heroLink.name}/${heroLink.id}`}
            onClick={e => {
                fetchClick();
            }}
        >
            {heroLink.name}
        </Link>
    );
};

export default PageLink;
