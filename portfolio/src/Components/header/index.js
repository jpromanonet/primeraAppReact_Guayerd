import React, {useState} from "react";
import "./header.css";

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
                
            </div>
        </div>
    );
}