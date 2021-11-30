import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen}) {
    return(
        <div className="mobile">
            <div onClick={() => setIsOpen(!isOpen)} className="close-icon">
                <i class="fi-rr-cross-circle"></i>
            </div>
            <div className="mobile-options">
                <div className="mobile-option">
                    <a href="#skills">
                        <i class="fi-rr-laptop option-icon"></i>Skills
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#work">
                        <i class="fi-rr-briefcase option-icon"></i>Experiencia
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#work">
                        <i class="fi-rr-pencil option-icon"></i>Proyectos
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#work">
                        <i class="fi-rr-user option-icon"></i>Contacto
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Mobile;