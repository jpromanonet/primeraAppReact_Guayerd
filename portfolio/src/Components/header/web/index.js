import React from "react";
import "./web.css";

function Web(){
    return(
        <div className="web">
            <div className="web-option">
                <a href="#skills">
                    <i class="fi-rr-laptop option-icon"></i>Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                    <i class="fi-rr-briefcase option-icon"></i>Experiencia
                </a>
            </div>
            <div className="web-option">
                <a href="#projects">
                    <i class="fi-rr-pencil option-icon"></i>Proyectos
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                    <i class="fi-rr-user option-icon"></i>Contacto
                </a>
            </div>
        </div>
    );
}

export default Web;