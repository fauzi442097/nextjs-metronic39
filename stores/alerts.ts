import { IAlert, IAlertConfirm, IAlertStore } from '@/utils/interfaces/IAlert';
import create from 'zustand';

export const useAlertStore = create<IAlertStore>((set, get) => ({
   messages: [],
   createAlert: (message: IAlert | IAlertConfirm) => {
        set({ messages: [message, ...get().messages].slice(0, 1) });
   },
   removeAlert: (id: string) => {
        set({ messages: get().messages.filter(message => message.id != id) })
   },
   clearAlert: () => {
        set({ messages: []})
   },
}));

