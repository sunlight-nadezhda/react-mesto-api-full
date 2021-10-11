import React from "react";

function PopupWithForm(props) {

    const submitButtonClassName = `popup__save-button ${
        props.isDisabled ? "popup__save-button_inactive" : ""
    }`;

    function onCloseByOverlay(event) {
        if (event.target === event.currentTarget) {
            props.onClose();
        }
    }

    return (
        <div
            className={`overlay popup popup_type_${props.name}${
                props.isOpen ? " popup_opened" : ""
            }`}
            onMouseDown={onCloseByOverlay}
        >
            <div className={`popup__container popup__container_type_${props.name}`}>
                <h2 className="popup__title">{props.title}</h2>
                <button
                    type="button"
                    aria-label="Закрыть"
                    className="button popup__close-button"
                    onClick={props.onClose}
                ></button>
                <form
                    className={`popup__form popup__form_type_${props.name}`}
                    name={props.name}
                    onSubmit={props.onSubmit}
                >
                    {props.children}
                    <button
                        type="submit"
                        className={submitButtonClassName}
                        disabled={props.isDisabled}
                    >
                        {props.buttonText}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;
