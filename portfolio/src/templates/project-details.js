import React from "react"
import Layout from "../components/Layout";
import {graphql} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

export default function ProjectDetails({data}) {

    console.log(data)
    const html = data.project.html
    const title = data.project.frontmatter.title
    const tools = data.project.frontmatter.tools
    const workType = data.project.frontmatter.workType
    const fullDate = data.project.frontmatter.fullDate
    const link = data.project.frontmatter.link
    const linkText = data.project.frontmatter.linkText
    const featuredImg = data.project.frontmatter.featuredImg

    return (
        <Layout>
            <div className="project" id="project">
                <div className="content">
                    <div className="project-introduction">
                        <div className="column">
                            <h2 data-aos="content-text">{title}</h2>
                            <div data-aos="content-text" dangerouslySetInnerHTML={{__html: html}}></div>
                        </div>
                        <div className="column sidebar">
                            <div className="infobox" data-aos="content-sidebar">
                                <h4>outils</h4>
                                <span>{tools}</span>
                            </div>
                            <div className="infobox" data-aos="content-sidebar">
                                <h4>travail</h4>
                                <span>{workType}</span>
                            </div>
                            <div className="infobox" data-aos="content-sidebar">
                                <h4>date</h4>
                                <span>{fullDate}</span>
                            </div>
                            <div className="infobox" data-aos="content-sidebar">
                                {link === "" ? (
                                    ""
                                ) : (
                                    <>
                                        <span className="inline-icon">
                                            <i className="fas fa-link"></i>
                                        </span>
                                        <a href={link} className="text-link">
                                            {linkText}
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="project-details">
                        {featuredImg.map(image =>
                            <div className="img-container" data-aos="fade-in">
                                <GatsbyImage image={getImage(image)} alt={"dfa"} imgStyle={{ width: "auto", height: "auto", objectFit: "none" }}></GatsbyImage>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query ProjectDetails($slug: String) {
  project: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
      tools
      workType
      fullDate
      link
      linkText
      featuredImg {
        childImageSharp {
            gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP]
                quality: 100
        )
          }
      }
    }
  }
}
`