import { date, InferType, object, string } from 'yup';

export const BmiPersonalInformationSchema = object().shape({
  gender: string()
    .oneOf(['Female', 'Male'], 'Please select a gender')
    .required('Please select a gender'),
  birthDate: date()
    .max(new Date(), 'Date of birth cannot be in the future')
    .required('Please enter your date of birth')
    .typeError('Please enter a valid date'),
});

export type IBmiPersonalInformationSchema = InferType<typeof BmiPersonalInformationSchema>;
