import { IToasterStore, IToastMessage } from '@/utils/interfaces/IToast';
import create from 'zustand';

const MAX_TOASTS = 5;

export const useToasterStore = create<IToasterStore>((set, get) => ({
    messages: [],
    addMessage: (message: IToastMessage) => {
        set({ messages: [message, ...get().messages].slice(0, MAX_TOASTS) });
    },
    removeMessage: (id: string) => {
        set({ messages: get().messages.filter(message => message.id != id) })
    },
    clearMessages: () => {
        set({ messages: []})
    }
}));

