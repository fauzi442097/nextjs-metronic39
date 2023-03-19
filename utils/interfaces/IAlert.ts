import { AlertConfirmType, dialogType, NotificationType } from "../types/globalTypes";

export interface IAlertConfirmProps {
   type: AlertConfirmType,
   title?: string,
   message: string,
   labelSubmit: string,
   onSubmit: () => void,
   labelCancel?: string,
   onCancel?: () => void
}

export interface IAlertContent {
   message: string,
   dialogType: dialogType,
   title?: string,
   context?: NotificationType,
   labelCancel?: string,
   labelSubmit?: string,
   onClose?: () => void,
   onSubmit?: () => void,
 }

export interface IGlobalAlert {
   id: string,
   dialogType: dialogType,
   title?: string,
   message: string,
   onClose?: () => void
}

export interface IAlert extends IGlobalAlert {
   type: NotificationType
}

export interface IAlertConfirm extends IGlobalAlert {
   type: AlertConfirmType,
   labelSubmit: string,
   onSubmit: () => void,
   labelCancel?: string,
   onCancel?: () => void
}

export interface IAlertStore {
  messages: IAlert[] | IAlertConfirm[];
  createAlert: (message: IAlert) => void;
  removeAlert: (id: string) => void;
  clearAlert: () => void
}