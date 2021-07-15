function InfoTooltip(props) {
    function onCloseByOverlay(event) {
        if (event.target === event.currentTarget) {
            props.onClose();
        }
    }

    return (
        <div
            className={`overlay popup popup_type_info-tooltip${
                props.statusData ? " popup_opened" : ""
            }`}
            onClick={onCloseByOverlay}
        >
            <div className="popup__container popup__container_type_info-tooltip">
                <button
                    type="button"
                    aria-label="Закрыть"
                    className="button popup__close-button"
                    onClick={props.onClose}
                ></button>
                    <img
                        src={props.statusData && props.statusData.link}
                        alt={props.statusData && props.statusData.text}
                        className="popup__image popup__image_type_status"
                    />
                    <h2 className="popup__title popup__title_type_status">{props.statusData && props.statusData.text}</h2>
            </div>
        </div>
    );
}

export default InfoTooltip;
