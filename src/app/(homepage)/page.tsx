import Link from 'next/link';
import { FaHeartbeat, FaRulerVertical, FaWeight } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';

export default function Home() {
  return (
    <>
      <div className="flex justify-around mb-8 w-full">
        <div className="text-center">
          <FaWeight className="text-xl mb-4 text-white mx-auto" />
          <p className="text-sm text-white">Track Weight</p>
        </div>
        <div className="text-center">
          <FaRulerVertical className="text-xl mb-4 text-white mx-auto" />
          <p className="text-sm text-white">Measure Height</p>
        </div>
        <div className="text-center">
          <FaHeartbeat className="text-xl mb-4 text-white mx-auto" />
          <p className="text-sm text-white">Monitor Health</p>
        </div>
      </div>

      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] text-white">
        <li className="mb-2">
          Start by entering your{' '}
          <code className="bg-white/[.15] px-1 py-0.5 rounded font-semibold">
            personal information
          </code>
          .
        </li>
        <li>Track your health metrics and see your progress.</li>
      </ol>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Link
          href="/gender-selection"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          <MdArrowForward className="text-lg" />
          Get Started
        </Link>
      </div>
    </>
  );
}
