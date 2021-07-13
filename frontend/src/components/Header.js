import React, { useState } from "react";
import logo from "./../images/logo-white.svg";
import UserStatus from "./UserStatus";
import BurgerButton from "./BurgerButton";

function Header(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header ${isMenuOpen ? "header_menu-opened" : ""}`}>
            <div className={`header__head ${isMenuOpen ? "header__head_menu-opened" : ""}`}>
                <a href="index.html" target="_self" className="logo">
                    <img
                        src={logo}
                        alt="Логотип проекта Место"
                        className="header__logo"
                    />
                </a>
                <BurgerButton isOpen={isMenuOpen} onClick={onMenuClick} />
            </div>
            <UserStatus
                userData={props.userData}
                linkUrl={props.linkUrl}
                linkName={props.linkName}
                classLink={props.classLink}
                onSignOut={props.onSignOut}
                isMenuOpen={isMenuOpen}
            />
        </header>
    );
}

export default Header;
