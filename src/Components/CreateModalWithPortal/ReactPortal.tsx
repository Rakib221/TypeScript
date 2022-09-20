import React, { ReactNode, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ReactPortal = ({children, wrapperId="react-portal-wrapper"}:{children:ReactNode, wrapperId:string}) => { 
    // const ReactPortal = ({children, wrapperId="react-portal-wrapper"}:{children:ReactNode, wrapperId:string}):HTMLElement | null => {

    const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

    const createWrapperAndAppendToBody = (wrapperId:string):HTMLDivElement => {
        const wrapperElement = document.createElement('div');
        wrapperElement.setAttribute('id',wrapperId);
        document.body.appendChild(wrapperElement);
        return wrapperElement;
    }

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;

        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);
        return () => {
            if (systemCreated && element?.parentNode) {
                element.parentNode?.removeChild(element);
            }
        }
    },[wrapperId])

    if (wrapperElement === null) {
        return null;
    }

    // return createPortal(children, wrapperElement);
};

export default ReactPortal;