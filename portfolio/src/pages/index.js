import React, {useEffect} from "react"
import {graphql, Link} from 'gatsby'
import Layout from "../components/Layout";
import ProjectPreview from "../components/ProjectPreview"
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image";
import resume from "../pdf/stang_alexandre_cv.pdf"

export default function Home({data}) {

    const contact = data.metadata.siteMetadata.contact
    const projects = data.projects.nodes

    return (
        <Layout>
            <div className="landing-page">
                <section className="hero" id="hero">
                    <div className="banner" data-aos="banner" data-aos-delay="250">
                <span className="first-name" data-aos="content-text" data-aos-delay="500">
                    <h1>alexandre</h1>
                </span>
                        <span className="last-name" data-aos="content-text" data-aos-delay="750">
                    <h1>stang</h1>
                </span>
                        <span className="roles" data-aos="content-text" data-aos-delay="1000">
                    <h3>concepteur technique UI/UX</h3>
                </span>
                    </div>
                    <div className="content">

                    </div>
                </section>

                <section className="about" id="about">
                    <div className="content">
                        {/*<div className="arrow-top">*/}
                        {/*    <span><i className="fas fa-chevron-up"></i></span>*/}
                        {/*</div>*/}
                        <div>
                            <h2 data-aos="content-text">à propos</h2>
                            <div className="about-description" data-aos="content-text">
                                <p>Salut! Je suis Alexandre, un passionné de multimédia et d'art visuel diplomé du
                                    programme de technique d'intégration multimédia au Cégep Montpetit, du DEC-BAC en
                                    création de jeux vidéo à l'UQAT et du programme d'informatique à l'UDEM!</p>
                                <p>Non seulement je m'y connais en design d'interface (Photoshop, Illustrator et Figma),
                                    mais je peux les transformer en sites web fonctionnels grâce à mes
                                    connaissances en HTML5, CSS3 et
                                    Javascript!</p>
                                <p>Je suis à la fois une personne perfectionniste et travailleuse, toujours déterminée à
                                    m'améliorer et à apprendre de nouvelles choses avec chaque nouveau projet!</p>
                            </div>
                            <div className="social-networks" data-aos="content-text">
                                <ul>
                                    <li><span className="inline-icon"><i
                                        className="fas fa-at"></i></span>{contact.email}
                                    </li>
                                    <li><span className="inline-icon"><i className="fab fa-linkedin"></i></span>
                                        <a href={contact.linkedIn}
                                           className="text-link">/alexandrestang</a></li>
                                </ul>
                            </div>

                            <div data-aos="content-text">
                                <a href={resume} className="btn" target="_blank">télécharger mon CV</a>
                            </div>
                        </div>

                    </div>
                    <div className="profile-picture" data-aos="fade-up">
                        {/*<GatsbyImage image={profile_img} alt="Profile picture of Alexandre Stang"/>*/}
                        <StaticImage src="../img/about/profile.jpg" alt="Profile picture of Alexandre Stang"
                                     placeholder="blurred" quality={100}></StaticImage>
                    </div>
                </section>

                <section className="portfolio" id="portfolio">
                    <div className="content">
                        {/*<div className="arrow-top">*/}
                        {/*    <span><i className="fas fa-chevron-up"></i></span>*/}
                        {/*</div>*/}
                        <div>
                            <h2 data-aos="content-text">portfolio</h2>
                            <div className="portfolio-description" data-aos="content-text">
                                <p data-aos="content-text">Au fil des années, j'ai réalisé de nombreux projets sous
                                    différents
                                    rôles, que ce soit en tant que
                                    designer UI, intégrateur web ou même programmeur! Voici donc un bref aperçu de mes
                                    meilleurs travaux.
                                </p>
                                <p data-aos="content-text">D'autres projets, spécifiquement ceux reliés au design, sont
                                    aussi
                                    disponibles sur mon compte Behance.</p>
                            </div>
                            <div className="social-networks" data-aos="content-text">
                                <ul>
                                    <li><span className="inline-icon"><i className="fab fa-behance"></i></span><a
                                        href={contact.behance}
                                        className="text-link">/alexandrestang</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="project-list mobile" data-aos="fade-up">
                                {projects.slice(0, 6).map(project => (
                                    <ProjectPreview project={project}></ProjectPreview>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className="project-list desktop" data-aos="fade-up">
                        {projects.slice(0, 6).map(project => (
                            <ProjectPreview project={project}></ProjectPreview>
                        ))}
                    </div>
                </section>

                <section className="contact" id="contact">
                    <div className="content">
                        {/*<div className="arrow-top">*/}
                        {/*    <span><i className="fas fa-chevron-up"></i></span>*/}
                        {/*</div>*/}
                        <form action="" method="post" id="contact-form">
                            <h2 data-aos="content-text">contact</h2>
                            <div className="input-div"><input type="text" name="visitor_name" placeholder="Votre nom..."
                                                              data-aos="content-text" required></input></div>
                            <div className="input-div"><input type="email" name="visitor_email"
                                                              placeholder="Votre adresse courriel..."
                                                              data-aos="content-text" required></input>
                            </div>
                            <div className="input-div"><textarea rows="9" name="visitor_message"
                                                                 placeholder="Votre message..."
                                                                 data-aos="content-text" required></textarea></div>
                            <div data-aos="content-text">
                                <button type="submit" name="submit" value="envoyer">envoyer</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>

        </Layout>
    )
}

export const query = graphql`
query HomeQuery {
  metadata: site {
    siteMetadata {
      contact {
        behance
        email
        linkedIn
      }
    }
  }
  projects: allMarkdownRemark(
    filter: {frontmatter: {isActive: {eq: true}}}
    sort: {frontmatter: {startDate: DESC}}
  ) {
    nodes {
      frontmatter {
        startDate
        endDate
        title
        slug
        thumb {
          childImageSharp {
            gatsbyImageData(
                width: 400
                placeholder: BLURRED
                formats: [AUTO, WEBP]
        )
          }
        }
      }
    }
  }
}
`