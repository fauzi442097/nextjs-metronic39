import { useAlertStore } from "@/stores/alerts";
import { IAlert, IAlertConfirm, IAlertConfirmProps } from "@/utils/interfaces/IAlert";
import { useCallback, useMemo } from "react";

export function useMyAlert() {
    const store = useAlertStore();

    const generateId = useCallback(() => {
         return Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
   }, [])

    const id = generateId();
    
    const show = useCallback(( 
        alertProps: IAlert | IAlertConfirm
    ) => {
        store.createAlert(alertProps);
    }, [store]) ;

    return useMemo(() => ({
        default: (message: string, title?: string, onClose?: () => void) => show({dialogType: "info", id, message, title, type: "default", onClose}),
        info: (message: string, title?: string, onClose?: () => void) => show({dialogType: "info", id, message, title, type: "info", onClose}),
        success: (message: string, title?: string, onClose?: () => void) => show({dialogType: "info", id, message, title, type: "success", onClose}),
        warning: (message: string, title?: string, onClose?: () => void) => show({dialogType: "info", id, message, title, type: "warning", onClose}),
        error: (message: string, title?: string, onClose?: () => void) => show({dialogType: "info", id, message, title, type: "error", onClose}),
        clear: () => store.clearAlert(),
        confirm: (params: IAlertConfirmProps) => show({dialogType: "confirm", id, ...params})
    }), [show, store]);
}


