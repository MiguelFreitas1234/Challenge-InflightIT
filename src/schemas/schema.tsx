import * as yup from 'yup';

const nameRules = /^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9]+(?:\s[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9]+)?$/;
const emailRules = /.+@.+\..+/;

export const formSchema = yup.object().shape({
    name: yup.string().matches(nameRules, 'Please enter a valid name').max(40).required("Required"),
    dob: yup.date().max(new Date(), 'Date of birth cannot be in the future').typeError('Please enter a valid date').required('Required'), 
    email: yup.string().email('Please enter a valid email').matches(emailRules, 'Please enter a valid email').required('Required'),
    hobbies: yup.array().of(yup.string()).min(1, 'Please select at least one hobby'),
});