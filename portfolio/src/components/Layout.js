import React, {useEffect} from "react"
import * as styles from '../css/styles.css'
import "@fortawesome/fontawesome-free/css/all.css" // import "@fortawesome/fontawesome-free/css/all.css"
import Header from "./Header";
import AOS from "aos";

export default function Layout({ children }) {
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
        <div className="layout">
            <Header></Header>
            { children }
        </div>
    )
}