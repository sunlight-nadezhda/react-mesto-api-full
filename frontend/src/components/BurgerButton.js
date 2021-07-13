function BurgerButton({ isOpen, onClick }) {
    return (
        <button
            type="button"
            aria-label={isOpen ? "Закрыть" : "Меню открыть"}
            className={`button header__button-menu ${
                isOpen ? "header__button-menu_opened" : ""
            }`}
            onClick={onClick}
        ></button>
    );
}

export default BurgerButton;
