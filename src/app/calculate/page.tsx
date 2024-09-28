'use client';

import useBmiCalculateForm from '@/modules/bmi/hooks/use-bmi-calculate-form';
import { format } from 'date-fns';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  MdCalculate,
  MdFitnessCenter,
  MdHeight,
  MdHome,
  MdLocalFireDepartment,
  MdPercent,
  MdScale,
  MdWaterDrop,
} from 'react-icons/md';

export default function Calculate() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const [userInfo, setUserInfo] = useState({ gender: '', birthDate: '' });

  useEffect(() => {
    const gender = searchParams.get('gender');
    const birthDate = searchParams.get('birthDate');
    setUserInfo({
      gender: gender || '',
      birthDate: birthDate || '',
    });
  }, [searchParams]);

  const {
    methods: {
      register,
      formState: { errors },
    },
    onSubmit,
  } = useBmiCalculateForm({
    onSuccess: data => {
      const params = new URLSearchParams({
        gender: userInfo.gender,
        birthDate: userInfo.birthDate,
        weight: data.weight.toString(),
        height: data.height.toString(),
      });

      if (data.bodyFat) params.append('bodyFat', data.bodyFat.toString());
      if (data.muscleMass) params.append('muscleMass', data.muscleMass.toString());
      if (data.visceralFat) params.append('visceralFat', data.visceralFat.toString());
      if (data.basalMetabolism) params.append('basalMetabolism', data.basalMetabolism.toString());

      router.push(`/profile?${params.toString()}`);
    },
  });

  return (
    <>
      <div className="w-full p-4 rounded-md border">
        <p>
          <strong>Gender:</strong> {userInfo.gender}
        </p>
        <p>
          <strong>Birth Date:</strong> {userInfo.birthDate ? format(userInfo.birthDate, 'PPP') : ''}
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-2">
          <label htmlFor="weight" className="text-sm font-[family-name:var(--font-geist-mono)]">
            Berat Badan (Kg):
          </label>
          <div className="relative">
            <MdScale className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="weight"
              type="number"
              step="0.1"
              {...register('weight')}
              className={`bg-black/[.05] dark:bg-white/[.06] px-3 py-2 pl-10 rounded w-full ${
                errors.weight ? 'border-2 border-red-500' : ''
              }`}
            />
          </div>
          {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="height" className="text-sm font-[family-name:var(--font-geist-mono)]">
            Tinggi Badan (Cm):
          </label>
          <div className="relative">
            <MdHeight className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="height"
              type="number"
              step="0.1"
              {...register('height')}
              className={`bg-black/[.05] dark:bg-white/[.06] px-3 py-2 pl-10 rounded w-full ${
                errors.height ? 'border-2 border-red-500' : ''
              }`}
            />
          </div>
          {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="bodyFat" className="text-sm font-[family-name:var(--font-geist-mono)]">
            Body Fat (%):
          </label>
          <div className="relative">
            <MdPercent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="bodyFat"
              type="number"
              step="0.1"
              {...register('bodyFat')}
              className={`bg-black/[.05] dark:bg-white/[.06] px-3 py-2 pl-10 rounded w-full ${
                errors.bodyFat ? 'border-2 border-red-500' : ''
              }`}
            />
          </div>
          {errors.bodyFat && <p className="text-red-500 text-sm mt-1">{errors.bodyFat.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="muscleMass" className="text-sm font-[family-name:var(--font-geist-mono)]">
            Muscle Mass (Kg):
          </label>
          <div className="relative">
            <MdFitnessCenter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="muscleMass"
              type="number"
              step="0.1"
              {...register('muscleMass')}
              className={`bg-black/[.05] dark:bg-white/[.06] px-3 py-2 pl-10 rounded w-full ${
                errors.muscleMass ? 'border-2 border-red-500' : ''
              }`}
            />
          </div>
          {errors.muscleMass && (
            <p className="text-red-500 text-sm mt-1">{errors.muscleMass.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="visceralFat"
            className="text-sm font-[family-name:var(--font-geist-mono)]"
          >
            Visceral Fat:
          </label>
          <div className="relative">
            <MdWaterDrop className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="visceralFat"
              type="number"
              {...register('visceralFat')}
              className={`bg-black/[.05] dark:bg-white/[.06] px-3 py-2 pl-10 rounded w-full ${
                errors.visceralFat ? 'border-2 border-red-500' : ''
              }`}
            />
          </div>
          {errors.visceralFat && (
            <p className="text-red-500 text-sm mt-1">{errors.visceralFat.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="basalMetabolism"
            className="text-sm font-[family-name:var(--font-geist-mono)]"
          >
            Basal Metabolism (Kcal):
          </label>
          <div className="relative">
            <MdLocalFireDepartment className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="basalMetabolism"
              type="number"
              {...register('basalMetabolism')}
              className={`bg-black/[.05] dark:bg-white/[.06] px-3 py-2 pl-10 rounded w-full ${
                errors.basalMetabolism ? 'border-2 border-red-500' : ''
              }`}
            />
          </div>
          {errors.basalMetabolism && (
            <p className="text-red-500 text-sm mt-1">{errors.basalMetabolism.message}</p>
          )}
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
          <button
            type="submit"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
          >
            <MdCalculate className="text-lg" />
            Calculate
          </button>
          <Link
            href="/"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto sm:min-w-[120px] cursor-pointer"
          >
            <MdHome className="mr-2 text-lg" />
            Back to Home
          </Link>
        </div>
      </form>
    </>
  );
}
