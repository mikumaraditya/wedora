import { Outlet } from 'react-router';
import { Heart } from 'lucide-react';

export function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-[#F8F5EF]">
      <div className="mb-6 flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-full bg-[#C4A77D]/20 flex items-center justify-center text-[#C4A77D]">
          <Heart className="w-7 h-7 fill-current" />
        </div>
        <h1 className="font-heading text-3xl font-bold text-[#34302B]">Wedora</h1>
        <p className="text-sm text-[#34302B]/70">One wedding. One plan. Everyone together.</p>
      </div>
      <div className="w-full max-w-md bg-white border border-[#E8DDCB] rounded-xl shadow-sm p-8">
        <Outlet />
      </div>
    </div>
  );
}
