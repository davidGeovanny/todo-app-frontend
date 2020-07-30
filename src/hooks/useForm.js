import { useState } from "react";

export const useForm = ( initialState = {} ) => {
    const [formValues, setFormValues] = useState( initialState );

    const reset = (newFormState = initialState) => {
        setFormValues( newFormState );
    };

    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [ e.target.name ]: e.target.value
        });
    }

    return [ formValues, handleInputChange, reset ];
}