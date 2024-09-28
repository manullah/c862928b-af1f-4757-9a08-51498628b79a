'use client';

import { calculateBMI, drawBMIGraph, getBMICategory } from '@/modules/bmi/utils/helpers';
import { format } from 'date-fns';
import Link from 'next/link';
import { redirect, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { MdHome } from 'react-icons/md';

type UserData = {
  gender: string;
  birthDate: string;
  weight: number;
  height: number;
  bodyFat?: number;
  muscleMass?: number;
  visceralFat?: number;
  basalMetabolism?: number;
};

export default function Profile() {
  const searchParams = useSearchParams();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [bmi, setBMI] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const data: UserData = {
      gender: searchParams.get('gender') || '',
      birthDate: searchParams.get('birthDate') || '',
      weight: Number(searchParams.get('weight')) || 0,
      height: Number(searchParams.get('height')) || 0,
      bodyFat: searchParams.get('bodyFat') ? Number(searchParams.get('bodyFat')) : undefined,
      muscleMass: searchParams.get('muscleMass')
        ? Number(searchParams.get('muscleMass'))
        : undefined,
      visceralFat: searchParams.get('visceralFat')
        ? Number(searchParams.get('visceralFat'))
        : undefined,
      basalMetabolism: searchParams.get('basalMetabolism')
        ? Number(searchParams.get('basalMetabolism'))
        : undefined,
    };

    if (!data.gender || !data.birthDate || !data.weight || !data.height) {
      return redirect('/');
    }

    setUserData(data);

    const calculatedBMI = calculateBMI(data.weight, data.height);
    setBMI(calculatedBMI);
  }, [searchParams]);

  useEffect(() => {
    if (canvasRef.current && bmi !== null) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        drawBMIGraph(ctx, bmi);
      }
    }
  }, [bmi, canvasRef]);

  if (!userData || bmi === null) return <div>Loading...</div>;

  return (
    <>
      <div className="grid gap-1 mb-6">
        <p>
          <strong>Gender:</strong> {userData.gender}
        </p>
        <p>
          <strong>Birth Date:</strong> {format(userData.birthDate, 'PPP')}
        </p>
        <p>
          <strong>Weight:</strong> {userData.weight} kg
        </p>
        <p>
          <strong>Height:</strong> {userData.height} cm
        </p>
        {userData.bodyFat && (
          <p>
            <strong>Body Fat:</strong> {userData.bodyFat}%
          </p>
        )}
        {userData.muscleMass && (
          <p>
            <strong>Muscle Mass:</strong> {userData.muscleMass} kg
          </p>
        )}
        {userData.visceralFat && (
          <p>
            <strong>Visceral Fat:</strong> {userData.visceralFat}
          </p>
        )}
        {userData.basalMetabolism && (
          <p>
            <strong>Basal Metabolism:</strong> {userData.basalMetabolism} kcal
          </p>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">BMI Calculation</h2>
        <div className="grid gap-1">
          <p>
            <strong>Your BMI:</strong> {bmi.toFixed(1)}
          </p>
          <p>
            <strong>Category:</strong> {getBMICategory(bmi)}
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">BMI Graph</h2>
        <canvas ref={canvasRef} width={700} height={200} className="w-full"></canvas>
      </div>

      <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
        <Link
          href="/"
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto sm:min-w-[120px] cursor-pointer"
        >
          <MdHome className="mr-2 text-lg" />
          Back to Home
        </Link>
      </div>
    </>
  );
}
