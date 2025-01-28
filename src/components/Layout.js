import React from "react"
import * as styles from '../css/styles.css'
import "@fortawesome/fontawesome-free/css/all.css" // import "@fortawesome/fontawesome-free/css/all.css"
import Header from "./Header";


export default function Layout({ children }) {

    return (
        <div className="layout">
            <Header></Header>
            {children}
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
        </div>
    )
}