import React from 'react';
import ReactDOM from 'react-dom';

import './styles/Modal.css';

function Modal(props) {
    return ReactDOM.createPortal(
        <div className="Modal">
            {props.children}
        </div>,
        document.getElementById('modal')
    );
}

export default Modal;