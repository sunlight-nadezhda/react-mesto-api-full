import React from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <div className="page__content">
            <Header
                userData={props.userData}
                linkUrl="signin"
                linkName="Выйти"
                classLink="header__link_type_logout"
                onSignOut={props.onSignOut}
                onShowMenu={props.onShowMenu}
                isMenuOpen={props.isMenuOpen}
                onClose={props.onClose}
            />
            <main>
                <section className="profile">
                    <div
                        className="profile__avatar-edit"
                        onClick={props.onEditAvatar}
                        style={{
                            backgroundImage: `url(${
                                currentUser ? currentUser.avatar : ""
                            })`,
                        }}
                    ></div>
                    <div className="profile__about">
                        <h1 className="profile__name">
                            {currentUser ? currentUser.name : ""}
                        </h1>
                        <p className="profile__metier">
                            {currentUser ? currentUser.about : ""}
                        </p>
                        <button
                            type="button"
                            aria-label="Редактировать"
                            className="button profile__edit-button"
                            onClick={props.onEditProfile}
                        ></button>
                    </div>
                    <button
                        type="button"
                        aria-label="Добавить"
                        className="button profile__add-button"
                        onClick={props.onAddPlace}
                    ></button>
                </section>

                <section aria-label="Карточки с местами">
                    <ul className="cards">
                        {props.cards.map((cardInfo) => (
                            <Card
                                card={cardInfo}
                                key={cardInfo._id}
                                onCardClick={props.onShowImage}
                                onCardLike={props.onCardLike}
                                onConfirm={props.onConfirm}
                            />
                        ))}
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Main;
