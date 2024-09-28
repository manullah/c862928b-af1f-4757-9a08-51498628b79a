import { InferType, number, object } from 'yup';

export const BmiCalculateSchema = object().shape({
  weight: number()
    .positive('Weight must be positive')
    .max(999.9, 'Maximum weight is 999.9 kg')
    .required()
    .typeError('Weight is required'),
  height: number()
    .positive('Height must be positive')
    .max(299.9, 'Maximum height is 299.9 cm')
    .required()
    .typeError('Height is required'),
  bodyFat: number()
    .transform(val => val || undefined)
    .positive('Body fat must be positive')
    .max(99.9, 'Maximum body fat is 99.9%')
    .nullable(),
  muscleMass: number()
    .transform(val => val || undefined)
    .positive('Muscle mass must be positive')
    .max(99.9, 'Maximum muscle mass is 99.9 kg')
    .nullable(),
  visceralFat: number()
    .transform(val => val || undefined)
    .integer('Visceral fat must be a whole number')
    .min(1, 'Minimum visceral fat is 1')
    .max(12, 'Maximum visceral fat is 12')
    .nullable(),
  basalMetabolism: number()
    .transform(val => val || undefined)
    .positive('Basal metabolism must be positive')
    .max(9999, 'Maximum basal metabolism is 9999 kcal')
    .nullable(),
});

export type IBmiCalculateSchema = InferType<typeof BmiCalculateSchema>;
