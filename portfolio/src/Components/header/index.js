import React, {useState} from "react";
import "./header.css";
import Web from "./web/index";

function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const handleLogoClick = () => {
        window.scrollTo(0, 0);
    };
    window.onscroll = function(){
        setIsOpen(false);
    };
    return(
        <div className="header">
            <div onClick={handleLogoClick} className="logo">
                Alexis Zarate
            </div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>

                <div className="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <i class="fi-rr-apps menu-icon"></i>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Header;