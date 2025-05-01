import React, {useState} from "react"
import {graphql} from 'gatsby'
import Layout from "../components/Layout";
import ProjectPreview from "../components/ProjectPreview"
import {StaticImage} from "gatsby-plugin-image";
import resume from "../pdf/alexandre_stang_cv.pdf"
import ContactForm from "../components/ContactForm";
import Tabs from "../components/Tabs";
import Seo from "../components/Seo"

export default function Home({data}) {

    const contact = data.metadata.siteMetadata.contact
    const projects = data.projects.nodes
    const featuredText = "en vedette"

    // State for filtered category
    const [filteredCategory, setFilteredCategory] = useState(featuredText);

    const categories = [
        ...new Set(projects.map((project) => project.frontmatter.category)),
    ];

    const categoryCounts = projects.reduce((acc, project) => {
        const category = project.frontmatter.category;
        acc[category] = (acc[category] || 0) + 1;

        if (project.frontmatter.featured) {
            acc[featuredText] = (acc[featuredText] || 0) + 1;
        }

        return acc;
    }, {});

    // Array of all filtered projects (based on filteredCategory)
    const filteredProjects =
        filteredCategory === featuredText
            ? projects.filter(
                (project) => project.frontmatter.featured === true)
            : projects.filter(
                (project) => project.frontmatter.category === filteredCategory);

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
                    <h3>Développeur front-end</h3>
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
                                <p>Salut! Je suis Alexandre, un passionné de multimédia et d'art visuel diplômé d'un
                                    baccalauréat en informatique et d'un DEC en intégration web!</p>
                                <p>Non seulement je peux transformer des maquettes en sites web fonctionnels grâce à
                                    mes connaissances en <b>React, JavaScript/TypeScript et CSS/SCSS</b>, mais je maîtrise également le design
                                    d'interface utilisateur, que ce soit avec <b>Figma</b> ou les logiciels de la <b>suite Adobe</b>!
                                    Mon expertise s'étend aussi au développement de jeux vidéo avec <b>C# et Unity</b>.</p>
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
                                           className="text-link">/alexandre-stang</a></li>
                                    <li><span className="inline-icon"><i className="fa-brands fa-github"></i></span>
                                        <a href={contact.github}
                                           className="text-link">/AlexandreStang</a></li>
                                </ul>
                            </div>

                            <div data-aos="content-text">
                                <a href={resume} className="btn" target="_blank" rel="noreferrer">télécharger mon CV</a>
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
                                    designer UI/UX, intégrateur web ou développeur! Voici donc un bref aperçu de mes
                                    meilleurs travaux.
                                </p>
                            </div>
                            {/*<div className="social-networks" data-aos="content-text">*/}
                            {/*    <ul>*/}
                            {/*        <li><span className="inline-icon"><i className="fab fa-behance"></i></span><a*/}
                            {/*            href={contact.behance}*/}
                            {/*            className="text-link">/alexandrestang</a>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                            <Tabs
                                categories={[featuredText, ...categories]}
                                onSelectCategory={(category) => setFilteredCategory(category)}
                                defaultCategory={featuredText}
                                categoryCounts={categoryCounts}
                            ></Tabs>

                            <div className="project-list mobile" data-aos="fade-up">
                                {filteredProjects.slice(0, 6).map(project => (
                                    <ProjectPreview project={project} key={project.frontmatter.title}></ProjectPreview>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className="project-list desktop" data-aos="fade-up">
                        {filteredProjects.slice(0, 6).map(project => (
                            <ProjectPreview project={project} key={project.frontmatter.title}></ProjectPreview>
                        ))}
                    </div>
                </section>

                <section className="contact" id="contact">
                    <div className="content">
                        {/*<div className="arrow-top">*/}
                        {/*    <span><i className="fas fa-chevron-up"></i></span>*/}
                        {/*</div>*/}
                        <div>
                            <h2 data-aos="content-text">contact</h2>
                            <ContactForm></ContactForm>
                        </div>

                    </div>
                </section>
            </div>

        </Layout>
    )
}

export const Head = () => (
    <Seo/>
)

export const query = graphql`
query HomeQuery {
  metadata: site {
    siteMetadata {
      contact {
        email
        linkedIn
        github
      }
    }
  }
  projects: allMarkdownRemark(
    filter: {frontmatter: {isActive: {eq: true}}}
    sort: {frontmatter: {endDate: DESC}}
  ) {
    nodes {
      frontmatter {
        startDate
        endDate
        title
        slug
        thumb {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO, WEBP], quality: 100)
          }
        }
        category
        featured
      }
    }
  }
}
`