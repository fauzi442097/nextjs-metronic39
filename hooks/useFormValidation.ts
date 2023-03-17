import { useEffect, useState, forwardRef } from "react";

export const useFormValidation = (form : any, rules: any) => {
    const [fv, setFv] = useState<any>();
    useEffect(() => {
        // @ts-ignore
        setFv(FormValidation.formValidation(
            form.current,
            {
                fields: rules,
                plugins: {
                     // @ts-ignore
                    trigger: new FormValidation.plugins.Trigger(),
                     // @ts-ignore
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
                    })
                }
            }
        ));
    }, []);

    return fv;
};