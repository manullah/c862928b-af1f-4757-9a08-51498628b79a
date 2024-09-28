'use client';

import useBmiPersonalInformationForm from '@/modules/bmi/hooks/use-bmi-personal-information-form';
import { format } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { MdArrowForward, MdCalendarToday, MdFemale, MdHome, MdMale } from 'react-icons/md';

export default function GenderSelection() {
  const router = useRouter();

  const {
    methods: {
      register,
      formState: { errors },
    },
    onSubmit,

    isFemale,
    isMale,
  } = useBmiPersonalInformationForm({
    onSuccess: data => {
      const params = new URLSearchParams({
        gender: data.gender,
        birthDate: format(data.birthDate, 'yyyy-MM-dd'),
      });

      router.push(`/calculate?${params.toString()}`);
    },
  });

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full max-w-md">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-[family-name:var(--font-geist-mono)]">Gender:</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="Male"
                {...register('gender')}
                className="form-radio text-blue-500 hidden"
              />
              <span
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  errors.gender ? 'border-2 border-red-500' : ''
                } ${isMale ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
              >
                <MdMale className="text-2xl" />
              </span>
              <span>Male</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="Female"
                {...register('gender')}
                className="form-radio text-pink-500 hidden"
              />
              <span
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  errors.gender ? 'border-2 border-red-500' : ''
                } ${isFemale ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-600'}`}
              >
                <MdFemale className="text-2xl" />
              </span>
              <span>Female</span>
            </label>
          </div>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="birthDate" className="text-sm font-[family-name:var(--font-geist-mono)]">
            Date of Birth:
          </label>
          <div className="relative">
            <MdCalendarToday className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="birthDate"
              type="date"
              {...register('birthDate')}
              className={`bg-black/[.05] dark:bg-white/[.06] px-3 py-2 pl-10 rounded w-full ${
                errors.birthDate ? 'border-2 border-red-500' : ''
              }`}
            />
          </div>
          {errors.birthDate && (
            <p className="text-red-500 text-sm mt-1">{errors.birthDate.message}</p>
          )}
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
          <button
            type="submit"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
          >
            <MdArrowForward className="text-lg" />
            Next
          </button>
          <Link
            href="/"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto sm:min-w-[120px]"
          >
            <MdHome className="mr-2 text-lg" />
            Back to Home
          </Link>
        </div>
      </form>
    </>
  );
}
