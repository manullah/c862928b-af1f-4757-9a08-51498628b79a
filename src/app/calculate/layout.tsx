import AppLayout from '@/components/app-layout';

type Props = {
  children: React.ReactNode;
  description: string;
};

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <AppLayout description="Track your health metrics and see your progress.">{children}</AppLayout>
  );
}
