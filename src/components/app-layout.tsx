type Props = {
  children: React.ReactNode;
  description: string;
};

export default function AppLayout(props: Props) {
  const { children, description } = props;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-start md:w-[500px]">
        <div className="mb-4">
          <div className="text-4xl font-bold text-white mb-1">Scale App</div>
          <div className="text-md text-white sm:text-left">{description}</div>
        </div>

        {children}
      </main>
    </div>
  );
}
