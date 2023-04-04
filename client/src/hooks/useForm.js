import { useState } from "react"


export const useForm = (initialState, onSubmitHandler) => {

    const [formValues, setFormValues] = useState(initialState);

    const onChangeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(formValues)

        setFormValues(initialState)
    }

    const changeFormValues = (newValues) => {

        // To do validation if newvalues are same initial values
        setFormValues(newValues)
    }



    return {
        formValues,
        onChangeHandler,
        onSubmit,
        changeFormValues
    }

}