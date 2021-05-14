import React from 'react';
import ReactDOM from 'react-dom'

const Modal = ({onDismiss,title,description,actions}) => {
  //creating portal to avoid unexpected problems with layout
  //stop propagination to avoid of bubbling event
    return ReactDOM.createPortal(
        <div onClick={onDismiss} className="ui dimmer modals visible active">
            <div onClick={e=>e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{title}</div>
                <div className="content">{description}</div>
                <div className="actions">
                  {actions}     
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
}
export default Modal;