'use client';

import { useForm } from 'react-hook-form';
import {
  BmiPersonalInformationSchema,
  IBmiPersonalInformationSchema,
} from '../schemes/bmi-personal-information-schema';
import { yupResolver } from '@hookform/resolvers/yup';

type Props = {
  onSuccess: (data: IBmiPersonalInformationSchema) => void;
};

export default function useBmiPersonalInformationForm(props: Props) {
  const { onSuccess } = props;

  const methods = useForm<IBmiPersonalInformationSchema>({
    mode: 'all',
    resolver: yupResolver(BmiPersonalInformationSchema),
  });

  const { watch, handleSubmit } = methods;

  const onSubmit = handleSubmit(payload => {
    onSuccess(payload);
  });

  const isFemale = watch().gender === 'Female';
  const isMale = watch().gender === 'Male';

  return {
    methods,
    onSubmit,

    isFemale,
    isMale,
  };
}
