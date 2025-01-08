import React from 'react';
import {Link} from "gatsby";
import {useLocation} from "@reach/router";

export default function SmoothScrollLink({path, targetId, children}) {

    const location = useLocation()

    if (path === undefined) {
        path = location.pathname
    }

    const handleScroll = (e) => {
        e.preventDefault();
        document.getElementById(targetId).scrollIntoView({behavior: 'smooth'});
    };

    return (
        (path === location.pathname) ? <Link to={`#${targetId}`} onClick={handleScroll}>{children}</Link> :
            <Link to={`${path}#${targetId}`}>{children}</Link>
    )
};