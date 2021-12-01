import React from "react";
import SocialContact from "../../common/social-contact/index";
import "./about.css";

function About() {
    return(
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hola, Soy Alexis 👋 y bienvenide!
                    <br />
                    <br />
                    Soy desarrollador front-end.
                </div>
                <div className="about-photo">
                    <img 
                        src={requestAnimationFrame("../../../assets/image/coding.png").default}
                        className="picture"
                    />
                </div>
                <SocialContact />
            </div>
        </div>
    );
}

export default About;