import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [isDisabled, setIsDisabled] = React.useState(true);

    const currentUser = React.useContext(CurrentUserContext);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUser({
            name,
            about: description,
        });

        setName(currentUser.name);
        setDescription(currentUser.about);
    }

    useEffect(() => {
        setName(currentUser ? currentUser.name : "");
        setDescription(currentUser ? currentUser.about : "");
    }, [currentUser, props.isOpen]);

    useEffect(() => {
        if (name === "" || description === "") {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [name, description])

    return (
        <PopupWithForm
            title="Редактировать профиль"
            name="profile"
            buttonText={props.buttonText}
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            isDisabled={isDisabled}
        >
            <label className="popup__form-field">
                <input
                    type="text"
                    value={name}
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
                    value={description}
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
