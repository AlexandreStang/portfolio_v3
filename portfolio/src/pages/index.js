import React, {useEffect} from "react"
import {graphql, Link} from 'gatsby'
import AOS from "aos";
import { TweenMax } from "gsap";
import * as styles from '../css/styles.css'
import SmoothScrollLink from "../components/SmoothScrollLink";
import Header from "../components/Header";
import Layout from "../components/Layout";


export default function Home() {
    document.body.setAttribute('id', 'body');
    document.body.setAttribute('data-aos', 'body');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            AOS.init({
                once: true,
                duration: 1200
            })
        }
    })

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
                    <h3>développeur front-end & designer UI/UX</h3>
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
                                <p>Salut! Je suis Alexandre, un passionné de multimédia et d'art visuel, ancien élève du
                                    programme de technique d'intégration multimédia au Cégep Montpetit et du DEC-BAC en
                                    création
                                    de jeux vidéo à l'UQAT! Je suis présentement aux
                                    études à l'UDEM en programme d'informatique afin d'approfondir mes connaissances en
                                    programmation!</p>
                                <p>Non seulement je m'y connais en design d'interface (Photoshop, Illustrator et Figma),
                                    mais je
                                    peux les transformer en sites web fonctionnels grâce à mes
                                    connaissances en HTML5, CSS3 et
                                    Javascript!</p>
                                <p>Je suis à la fois une personne perfectionniste et travailleuse, toujours déterminée à
                                    m'améliorer et à apprendre de nouvelles choses avec chaque nouveau projet!</p>
                            </div>
                            <div className="social-networks" data-aos="content-text">
                                <ul>
                                    <li><span className="inline-icon"><i className="fas fa-at"></i></span>alexandre.stang.web@gmail.com
                                    </li>
                                    <li><span className="inline-icon"><i className="fab fa-linkedin"></i></span><Link
                                        to="https://www.linkedin.com/in/Linklexandre-stang-163208a7/"
                                        className="text-link">/alexandrestang</Link></li>
                                </ul>
                            </div>

                            <div data-aos="content-text">
                                <Link to="pdf/stang_alexandre_cv.pdf" className="btn" target="_blank">télécharger mon
                                    CV</Link>
                            </div>
                        </div>

                    </div>
                    <div className="profile-picture" data-aos="fade-up">
                        <img src="img/Linkbout/profile.jpg" alt="Profile picture of Alexandre Stang"></img>
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
                                    <li><span className="inline-icon"><i className="fab fa-behance"></i></span><Link
                                        to="https://www.behance.net/Linklexandrestang"
                                        className="text-link">/alexandrestang</Link>
                                    </li>
                                </ul>
                            </div>


                            <div className="project-list mobile" data-aos="fade-up">
                                <Link to="portfolio/festin.html" className="project-slot">
                                    <img src="img/portfolio/festin.jpg" alt="festin"></img>
                                    <div className="img-overlay">
                                        <div className="mid-center">
                                            <span className="project-date">2023-2024</span>
                                            <span className="project-name">festin</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="portfolio/randomovie.html" className="project-slot">
                                    <img src="img/portfolio/randomovie.jpg" alt="random movie"></img>
                                    <div className="img-overlay">
                                        <div className="mid-center">
                                            <span className="project-date">2023</span>
                                            <span className="project-name">randomovie</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="portfolio/doodleWar.html" className="project-slot">
                                    <img src="img/portfolio/doodleWar.jpg" alt="doodle war"></img>
                                    <div className="img-overlay">
                                        <div className="mid-center">
                                            <span className="project-date">2019-2020</span>
                                            <span className="project-name">doodle war</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="portfolio/portfolio2.html" className="project-slot">
                                    <img src="img/portfolio/portfolio2.jpg" alt="portfolio 2019"></img>
                                    <div className="img-overlay">
                                        <div className="mid-center">
                                            <span className="project-date">2019</span>
                                            <span className="project-name">portfolio 2.0</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="portfolio/lebatifol.html" className="project-slot">
                                    <img src="img/portfolio/lebatifol.jpg" alt="le batifol"></img>
                                    <div className="img-overlay">
                                        <div className="mid-center">
                                            <span className="project-date">2018</span>
                                            <span className="project-name">le batifol</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="portfolio/conventionWeb.html" className="project-slot">
                                    <img src="img/portfolio/conventionWeb.jpg" alt="montreal web convention"></img>
                                    <div className="img-overlay">
                                        <div className="mid-center">
                                            <span className="project-date">2018</span>
                                            <span className="project-name">convention web de montréal</span>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="project-list desktop" data-aos="fade-up">
                        <Link to="portfolio/festin.html" className="project-slot">
                            <img src="img/portfolio/festin.jpg" alt="festin"></img>
                            <div className="img-overlay">
                                <div className="mid-center">
                                    <span className="project-date">2023-2024</span>
                                    <span className="project-name">festin</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="portfolio/randomovie.html" className="project-slot">
                            <img src="img/portfolio/randomovie.jpg" alt="random movie"></img>
                            <div className="img-overlay">
                                <div className="mid-center">
                                    <span className="project-date">2023</span>
                                    <span className="project-name">randomovie</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="portfolio/doodleWar.html" className="project-slot">
                            <img src="img/portfolio/doodleWar.jpg" alt="doodle war"></img>
                            <div className="img-overlay">
                                <div className="mid-center">
                                    <span className="project-date">2019-2020</span>
                                    <span className="project-name">doodle war</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="portfolio/portfolio2.html" className="project-slot">
                            <img src="img/portfolio/portfolio2.jpg" alt="portfolio 2019"></img>
                            <div className="img-overlay">
                                <div className="mid-center">
                                    <span className="project-date">2019</span>
                                    <span className="project-name">portfolio 2.0</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="portfolio/lebatifol.html" className="project-slot">
                            <img src="img/portfolio/lebatifol.jpg" alt="le batifol"></img>
                            <div className="img-overlay">
                                <div className="mid-center">
                                    <span className="project-date">2018</span>
                                    <span className="project-name">le batifol</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="portfolio/conventionWeb.html" className="project-slot">
                            <img src="img/portfolio/conventionWeb.jpg" alt="montreal web convention"></img>
                            <div className="img-overlay">
                                <div className="mid-center">
                                    <span className="project-date">2018</span>
                                    <span className="project-name">convention web de montréal</span>
                                </div>
                            </div>
                        </Link>
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

            <div className="background-lines">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </Layout>
    )
}
