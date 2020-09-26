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
    };

    
    useEffect(() => {
        const submitForm = () =>{
            updateSheet();
            callback();
        }

        if (Object.keys(errors).length === 0 && isSubmitting) {
            submitForm()
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