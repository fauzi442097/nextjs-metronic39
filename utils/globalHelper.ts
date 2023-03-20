import {RefObject } from "react";

export const showLoadingForm = (idButton: string) => {
   $("#" + idButton).attr({
      'data-kt-indicator': 'on',
      'disabled': true
   });
}

export const hideLoadingForm = (idButton: string) => {
   $("#" + idButton).removeAttr('data-kt-indicator disabled')
}