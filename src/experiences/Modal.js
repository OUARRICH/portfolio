import React from 'react';

import './Modal.css'

const Modal = ({show, title, onClose, content}) => {
    if(!show) return null;

    return (
        <div className="Modal">
            <section className="Modal__main">
                <header className="Modal__header">
                    <h5>{title}</h5>
                    <button className="Modal__close" onClick={onClose}><i className="fas fa-times"></i></button>
                </header>

            
                <div className="Modal__content" dangerouslySetInnerHTML={{__html: content}}>
                </div>
            </section>
        </div>
    );
}

export default Modal;