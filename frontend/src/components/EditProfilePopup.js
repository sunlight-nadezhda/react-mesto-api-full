import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
    const {currentUser} = React.useContext(CurrentUserContext);
    const {name: userName = '', about: userDescription = ''} = currentUser || {};

    const [name, setName] = React.useState(null);
    const [description, setDescription] = React.useState(null);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    const displayName = name !== null ? name : userName;
    const displayDescription = description !== null ? description : userDescription;


    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name: displayName,
            about: displayDescription,
        });
    }

    function handleClose() {
        setName(null);
        setDescription(null);
        props.onClose.apply(this, arguments);
    }

    const isDisabled = (name === "" || description === "");


    return (
        <PopupWithForm
            title="Редактировать профиль"
            name="profile"
            buttonText={props.buttonText}
            isOpen={props.isOpen}
            onClose={handleClose}
            onSubmit={handleSubmit}
            isDisabled={isDisabled}
        >
            <label className="popup__form-field">
                <input
                    type="text"
                    value={displayName}
                    onChange={handleChangeName}
                    name="input-name-profile"
                    placeholder="Название"
                    className="popup__input popup__input_type_name-profile"
                    id="input-name-profile"
                    required
                    minLength="2"
                    maxLength="40"
                />
                <span className="popup__input-error input-name-profile-error"></span>
            </label>
            <label className="popup__form-field">
                <input
                    type="text"
                    value={displayDescription}
                    onChange={handleChangeDescription}
                    name="input-metier-profile"
                    placeholder="Ссылка на картинку"
                    className="popup__input popup__input_type_metier-profile"
                    id="input-metier-profile"
                    required
                    minLength="2"
                    maxLength="200"
                />
                <span className="popup__input-error input-metier-profile-error"></span>
            </label>
        </PopupWithForm>
    );
}

export default EditProfilePopup;
