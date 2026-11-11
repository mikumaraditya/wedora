import { Outlet } from 'react-router';
import { Heart } from 'lucide-react';

export function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EF]">
      <header className="py-6 text-center border-b border-[#E8DDCB]/50 bg-white/50 backdrop-blur-xs">
        <div className="flex items-center justify-center gap-2">
          <Heart className="w-5 h-5 text-[#C4A77D] fill-current" />
          <span className="font-heading text-2xl font-bold tracking-tight text-[#34302B]">
            Wedora
          </span>
        </div>
      </header>
      <main className="flex-1 max-w-4xl mx-auto w-full p-4 sm:p-6">
        <Outlet />
      </main>
    </div>
  );
}
