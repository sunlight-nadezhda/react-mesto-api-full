function ImagePopup(props) {
    function onCloseByOverlay(event) {
        if (event.target === event.currentTarget) {
            props.onClose();
        }
    }

    return (
        <div
            className={`overlay popup popup_type_show-image${
                props.card.link && props.card.name ? " popup_opened" : ""
            }`}
            onClick={onCloseByOverlay}
        >
            <div className="popup__container popup__container_type_show-image">
                <button
                    type="button"
                    aria-label="Закрыть"
                    className="button popup__close-button"
                    onClick={props.onClose}
                ></button>
                <figure className="figure">
                    <img
                        src={props.card.link}
                        alt={props.card.name}
                        className="figure__image"
                    />
                    <figcaption className="figure__caption">
                        {props.card.name}
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default ImagePopup;
