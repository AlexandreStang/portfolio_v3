import React from "react"
import {Link} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image";

export default function projectPreview({ project }) {

    const title = project.frontmatter.title
    const slug = project.frontmatter.slug
    const startDate = project.frontmatter.startDate
    const endDate = project.frontmatter.endDate
    const thumb = getImage(project.frontmatter.thumb)
    console.log(startDate)
    console.log(endDate)

    return (
        <Link to={"/projects/" + slug} className="project-slot">
            <GatsbyImage image={thumb} alt={title}></GatsbyImage>
            <div className="img-overlay">
                <div className="mid-center">
                    <span className="project-date">{startDate !== endDate ? startDate + " - " + endDate : startDate}</span>
                    <span className="project-name">{title}</span>
                </div>
            </div>
        </Link>
    )
}