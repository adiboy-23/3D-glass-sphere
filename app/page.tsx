import Spline from '@splinetool/react-spline/next';
import { ReactNode } from 'react';

const splineUrl: string | undefined = process.env.NEXT_PUBLIC_SPLINE_URL;

export default function Home() {
  return (
    <main>
      <Spline
        scene={splineUrl} 
      />
    </main>
  );
}

