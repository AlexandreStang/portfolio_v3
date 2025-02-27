import Layout from "../components/Layout";
import React from "react";
import {Link} from "gatsby";

export default function page404() {

    return (
        <Layout>
            <div className="landing-page">
                <section className="page404">
                    <div className="content">
                        <div>
                            <h2 data-aos="content-text">Page non trouvée</h2>
                            <div data-aos="content-text">
                                <p>Il semblerait que vous ayez suivi un lien brisé ou saisi un URL qui n’existe pas sur ce site.</p>
                                <Link to={"/"} className="btn">Retour</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </Layout>
    )
}