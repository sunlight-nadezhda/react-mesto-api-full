import React, { useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
    const currentUserContext = useContext(CurrentUserContext);
    const currentUser = currentUserContext.currentUser;
    useEffect(() => {
        currentUserContext.fetchUserInfo();
        // currentUserContext.checkToken();
    }, []);

    if (!currentUser) return null;

    const isOwn =  !!props.card.owner && (props.card.owner._id === currentUser._id);
    const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

    const cardLikeButtonClassName = `button card__like-button${isLiked ? " card__like-button_active" : ""}`;

    const cardDeleteButtonClassName = `button card__delete-button ${
        isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"
    }`;

    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    function handleDeleteClick() {
        props.onConfirm(props.card);
    }

    return (
        <li className="card">
            <img
                className="card__image"
                src={props.card.link}
                alt={props.card.name}
                onClick={handleClick}
            />
            <button
                type="button"
                aria-label="Удалить"
                className={cardDeleteButtonClassName}
                onClick={handleDeleteClick}
            ></button>
            <div className="card__info">
                <h2 className="card__title">{props.card.name}</h2>
                <div className="card__likes">
                    <button
                        type="button"
                        aria-label="Лайкнуть"
                        className={cardLikeButtonClassName}
                        onClick={handleLikeClick}
                    ></button>
                    <span
                        className="card__like-counter"
                        aria-label="Количество лайков"
                    >
                        {props.card.likes.length}
                    </span>
                </div>
            </div>
        </li>
    );
}

export default Card;
