import React, { useState } from "react";
import "../App.css";
import useWebAnimations, { flash } from "@wellyshen/use-web-animations";

import Mobile from "../assests/mobile1.png";
function Header() {
    const [change, setChange] = useState(false);

    const { ref } = useWebAnimations({
        keyframes: {
            transform: "translateX(-220px) rotate(-90deg)",
        },
        timing: { duration: 2000, fill: "forwards" },
    });
    setInterval(() => {
        setChange(true);
    }, 2000);

    return (
        <div>
            <header className={change ? "black" : "white"}>
                <div id="container" className="container">
                    <div ref={ref} className="header-container">
                        <div id="headertext" className="header-text ">
                            <h1>We are creative let's join us</h1>
                            <p>
                                2004. Fantastic background and outstanding
                                expertise
                            </p>

                            <div className="anime-btn">
                                <a href="#">
                                    <p>
                                        <span className="bg"></span>
                                        <span className="base"></span>
                                        <span className="text">Sign up</span>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={ref} className="mobile">
                    <img src={Mobile} alt="" />
                </div>
                <div id="logo">
                    <span>SpeakOn</span>
                </div>

                {change ? (
                    <div className="powered">
                        <p>Powered by </p>
                        <span>Speak On</span>
                    </div>
                ) : null}
            </header>
        </div>
    );
}
export default Header;
