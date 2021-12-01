import React from "react";
import "./contact.css";
import SocialContact from "../../common/social-contact/index";
import Separator from "../../common/separator/index";

function Contact(){
    return(
        <div className="contact">
            <label className="section-title">Contacto</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>¿Quéres ponerte en contacto? podes contactarme en alguna de las siguientes plataformas</p>
                    <SocialContact />
                </div>
                <div className="download">
                    <a download href={requestAnimationFrame("../../../assets/resume.pdf").default}>
                        <i class="fi-rr-cloud-download download-icon"></i>
                        Descarga mi CV
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;