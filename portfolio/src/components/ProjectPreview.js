import React from "react"
import "@fortawesome/fontawesome-free/css/all.css" // import "@fortawesome/fontawesome-free/css/all.css"
import Header from "./Header";
import AOS from "aos";
import {Link} from "gatsby";

export default function projectPreview({ project }) {

    return (
        <Link to="portfolio/festin.html" className="project-slot">
            <img src="img/portfolio/festin.jpg" alt="festin"></img>
            <div className="img-overlay">
                <div className="mid-center">
                    <span className="project-date">2023-2024</span>
                    <span className="project-name">festin</span>
                </div>
            </div>
        </Link>
    )
}