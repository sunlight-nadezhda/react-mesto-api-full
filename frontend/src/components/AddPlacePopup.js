import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [title, setTitle] = React.useState("");
    const [link, setLink] = React.useState("");
    const [isDisabled, setIsDisabled] = React.useState(true);

    function handleChangeTitle(e) {
        setTitle(e.target.value);
    }

    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddPlace({
            name: title,
            link,
        });

        setTitle("");
        setLink("");
    }

    function handleClose() {
        props.onClose();
        setTitle("");
        setLink("");
    }

    useEffect(() => {
        setTitle("");
        setLink("");
    }, []);

    useEffect(() => {
        if (title === "" || link === "") {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [title, link])

    return (
        <PopupWithForm
            title="Новое место"
            name="add-card"
            buttonText={props.buttonText}
            isOpen={props.isOpen}
            onClose={handleClose}
            onSubmit={handleSubmit}
            isDisabled={isDisabled}
        >
            <label className="popup__form-field">
                <input
                    type="text"
                    value={title}
                    onChange={handleChangeTitle}
                    name="input-name-add-card"
                    placeholder="Название"
                    className="popup__input popup__input_type_name-card"
                    id="input-name-add-card"
                    required
                    minLength="2"
                    maxLength="30"
                />
                <span className="popup__input-error input-name-add-card-error"></span>
            </label>
            <label className="popup__form-field">
                <input
                    type="url"
                    value={link}
                    onChange={handleChangeLink}
                    name="input-link-add-card"
                    placeholder="Ссылка на картинку"
                    className="popup__input popup__input_type_link-card"
                    id="input-link-add-card"
                    required
                />
                <span className="popup__input-error input-link-add-card-error"></span>
            </label>
        </PopupWithForm>
    );
}

export default AddPlacePopup;
