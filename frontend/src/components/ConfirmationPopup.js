import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmationPopup(props) {
    function handleSubmit(e) {
        e.preventDefault();
        props.onCardDelete(props.card);
    }

    return (
        <PopupWithForm
            title="Вы уверены?"
            name="confirm"
            buttonText={props.buttonText}
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            isDisabled={false}
        ></PopupWithForm>
    );
}

export default ConfirmationPopup;
