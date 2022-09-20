import React, { useState } from 'react';
import Modal from './Modal';

const ModalParen = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div>
            <button onClick={() => setIsOpen(true)}>
                Click to Open Modal
            </button>

            <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
                This is Modal Content!
            </Modal>
        </div>
    );
};

export default ModalParen;