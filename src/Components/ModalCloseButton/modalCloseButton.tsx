import React from 'react';

type ModalCloseButtonProps = {
    onClick: () => void;
};
const ModalCloseButton: React.FunctionComponent<ModalCloseButtonProps> = ({ onClick }) => {
    return (
        <button
            type="button"
            aria-label="Close Modal"
            aria-labelledby="close-modal"
            data-role="ModalCloseButton_modalClose"
            onClick={onClick}>
            <svg data-role="ModalCloseButton_modalCloseIcon" viewBox="0 0 40 40">
                <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
        </button>
    );
};

export default ModalCloseButton;
