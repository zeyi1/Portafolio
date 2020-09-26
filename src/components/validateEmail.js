export default function validateEmail(values) {
    let errors = {};
    
    if (!/\S+@\S+\.\S+/.test(values.formEmail)) {
        errors.formEmail = "Email address is invalid.";
    }

    return errors;
}