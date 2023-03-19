import { NotificationType } from "../types/globalTypes";

export interface IToastContent {
   message: string,
   title? : string,
   context? : NotificationType,
   onClose?: () => void
}

export interface IToastMessage {
   id: string;
   title?: string,
   message: string;
   context: NotificationType;
}

export interface IToasterStore {
   messages: IToastMessage[];
   addMessage: (message: IToastMessage) => void;
   removeMessage: (id: string) => void;
   clearMessages: () => void;
}
