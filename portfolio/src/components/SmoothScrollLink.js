import React from 'react';
import {Link} from "gatsby";
import {useLocation} from "@reach/router";

const SmoothScrollLink = ({path, targetId, children}) => {

    const location = useLocation()

    const handleScroll = (e) => {
        e.preventDefault();
        document.getElementById(targetId).scrollIntoView({behavior: 'smooth'});
    };

    return (
        (path === location.pathname) ? <Link to={`#${targetId}`} onClick={handleScroll}>{children}</Link> :
            <Link to={`${path}#${targetId}`}>{children}</Link>
    )
};

export default SmoothScrollLink;