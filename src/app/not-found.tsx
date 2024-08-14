'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-slate-950 to-slate-950 text-gray-100">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-3 text-xl">Oops! Page not found.</p>
      <Button
        onPress={() => router.push('/')}
        size="lg"
        variant="flat"
        className="bg-emerald-700 text-emerald-100 border border-emerald-500 mt-6"
      >
        Volver al inicio
      </Button>
    </div>
  );
}
