import {RefObject } from "react";

export const showLoadingForm = (buttonRef: RefObject<HTMLButtonElement>) => {
   if ( buttonRef.current ) {
      buttonRef.current.setAttribute('data-kt-indicator', 'on');
      buttonRef.current.disabled = true;
   }
}

export const hideLoadingForm = (buttonRef: RefObject<HTMLButtonElement>) => {
   if ( buttonRef.current ) {
      buttonRef.current.removeAttribute('data-kt-indicator');
      buttonRef.current.disabled = false;
   }
}