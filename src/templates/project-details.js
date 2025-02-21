import React, {useEffect} from "react"
import Layout from "../components/Layout";
import {graphql} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Seo from "../components/Seo";

export default function ProjectDetails({data}) {

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
            <ScrollToTop>
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
                                    <span>{(tools.map(tool =>
                                        tool
                                    )).join(", ")}</span>
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
                                    {link === null ? (
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
                            <div className="img-container" data-aos="fade-in">
                                {featuredImg.map((image, index) =>
                                    <GatsbyImage image={getImage(image)} alt={"Image du project"} key={index} imgStyle={{
                                        width: "100%",
                                        objectFit: "contain"
                                    }}></GatsbyImage>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollToTop>
        </Layout>
    )
}

export const Head = ({data}) => (
    <Seo />
)

const ScrollToTop = ({ children }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return children;
};


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
                layout: FULL_WIDTH
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