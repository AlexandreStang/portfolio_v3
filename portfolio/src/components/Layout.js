import * as React from "react"
import * as styles from '../css/styles.css'
import Header from "./Header";
import "@fortawesome/fontawesome-free/css/all.css" // import "@fortawesome/fontawesome-free/css/all.css"

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Header></Header>
            { children }
        </div>
    )
}