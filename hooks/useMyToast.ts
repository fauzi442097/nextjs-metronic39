import { useToasterStore } from "@/stores/toaster";
import { NotificationType } from "@/utils/types/globalTypes";
import { useCallback, useMemo } from "react";

export function useMyToast() {
    const store = useToasterStore();
    const generateId = useCallback(() => {
        return Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
    }, [])

    const show = useCallback(( 
        message: string, 
        title?: string, 
        context: NotificationType = "default", 
        timeout = 3000
    ) => {

        const id = generateId();
        store.addMessage({ id, title, message, context });

        setTimeout(() => {
            store.removeMessage(id)
        }, timeout);

    }, [store]) ;

    return useMemo(() => ({
        default: (message: string, title?: string, timeout = 3000) => show(message, title, "default", timeout),
        info: (message: string, title?: string, timeout = 3000) => show(message, title, "info", timeout),
        success: (message: string, title?: string, timeout = 3000) => show(message, title, "success", timeout),
        warning: (message: string, title?: string, timeout = 3000) => show(message, title, "warning", timeout),
        error: (message: string, title?: string, timeout = 3000) => show(message, title, "error", timeout),
        clear: () => store.clearMessages()
    }), [show, store]);
}

