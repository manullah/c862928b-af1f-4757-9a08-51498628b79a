'use client';

import { useForm } from 'react-hook-form';
import { BmiCalculateSchema, IBmiCalculateSchema } from '../schemes/bmi-calculate-schema';
import { yupResolver } from '@hookform/resolvers/yup';

type Props = {
  onSuccess: (data: IBmiCalculateSchema) => void;
};

export default function useBmiCalculateForm(props: Props) {
  const { onSuccess } = props;

  const methods = useForm<IBmiCalculateSchema>({
    mode: 'all',
    resolver: yupResolver(BmiCalculateSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(payload => {
    onSuccess(payload);
  });

  return {
    methods,
    onSubmit,
  };
}
