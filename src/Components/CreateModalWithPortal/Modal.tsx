import React, { ReactNode, useEffect } from 'react';
interface IProps{
    children: ReactNode;
    isOpen: boolean;
    handleClose:()=>void;
}

const Modal = ({ children, isOpen, handleClose }:IProps) => {
    useEffect(() => {
        const closeOnEscapeKey = (e:any) => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
          document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
      }, [handleClose]);
    
      if (!isOpen) return null;
    return (
        <div className="modal">
            <button onClick={handleClose} className="close-btn">
                Close
            </button>
            <div className="modal-content">{children}</div>
        </div>
    );
};

export default Modal;