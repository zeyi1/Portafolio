import {useEffect, useState} from 'react';


const useForm = (callback, validate, updateSheet) => {
    const [values, setValues] = useState({formName: "", formEmail: "", formSubject: "", formMessage: ""});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = (event) => {
        const {name, value} = event.target;

        setValues({
            ...values,
            [name]: value
        })
        console.log(event.target.name)
        console.log(event.target.value)

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
        // console.log(setErrors(validate(values)))
        // console.log(isSubmitting)
        // console.log('a')
        // console.log(errors)
        // console.log(Object.keys(errors).length)
        // callback();
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            updateSheet();
            callback();
        }
    }, [errors, isSubmitting])

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    };
};

export default useForm;