import React, {useState} from "react"
import SmoothScrollLink from "./SmoothScrollLink";
import gsap from "gsap"; // npm install gsap

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Open the menu
    const openMenu = () => {
        setIsMenuOpen(true);
        gsap.to("#nav-overlay", {
            opacity: "1", pointerEvents: "auto", duration: 0.25, onComplete: function () {
                gsap.to("#nav-about", {opacity: 1, delay: 0.1, duration: 0.25});
                gsap.to("#nav-portfolio", {opacity: 1, delay: 0.3, duration: 0.25});
                gsap.to("#nav-contact", {opacity: 1, delay: 0.5, duration: 0.25});
            }
        })
    };

    // Close the menu
    const closeMenu = () => {
        setIsMenuOpen(false);
        gsap.to("#nav-overlay", {opacity: "0", pointerEvents: "none", duration: 0.25})
    };

    // Close the menu if the window is resized
    window.addEventListener("resize", function (event) {
        closeMenu();
    });

    return (
        <div>
            <header>
                <div className="wrapper">
                    <div className="logo"><SmoothScrollLink targetId={"hero"}>as.</SmoothScrollLink></div>
                    <nav>
                        <ul className="nav-menu nav-desktop">
                            <li><SmoothScrollLink targetId={"about"}>à propos</SmoothScrollLink></li>
                            <li><SmoothScrollLink targetId={"portfolio"}>portfolio</SmoothScrollLink></li>
                            <li><SmoothScrollLink targetId={"contact"}>contact</SmoothScrollLink></li>
                        </ul>
                        <div className="nav-icon nav-mobile" id="open-menu" onClick={openMenu}>
                            <i className="fas fa-bars"></i>
                        </div>
                    </nav>
                </div>
            </header>

            <div className="nav-overlay" id="nav-overlay">
                <nav>
                    <div className="nav-header">
                        <div className="logo"><SmoothScrollLink targetId={"hero"}>as.</SmoothScrollLink></div>
                        <div className="nav-icon nav-mobile" id="close-menu" onClick={closeMenu}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <ul className="nav-menu">
                        <li id="nav-about" onClick={closeMenu}><SmoothScrollLink targetId={"about"}>à
                            propos</SmoothScrollLink></li>
                        <li id="nav-portfolio" onClick={closeMenu}><SmoothScrollLink
                            targetId={"portfolio"}>portfolio</SmoothScrollLink></li>
                        <li id="nav-contact" onClick={closeMenu}><SmoothScrollLink
                            targetId={"contact"}>contact</SmoothScrollLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

