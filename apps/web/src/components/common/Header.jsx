import { Heart } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export function Header() {
  const { user } = useAuth();

  return (
    <header className="border-b border-[#E8DDCB] bg-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#C4A77D]/20 flex items-center justify-center text-[#C4A77D]">
          <Heart className="w-5 h-5 fill-current" />
        </div>
        <div>
          <span className="font-heading text-2xl font-bold tracking-tight text-[#34302B]">
            Wedora
          </span>
          <p className="text-xs text-[#34302B]/60 hidden sm:block">
            One wedding. One plan. Everyone together.
          </p>
        </div>
      </div>
      {user && (
        <div className="text-sm font-medium text-[#34302B]">
          <span>{user.name}</span>
        </div>
      )}
    </header>
  );
}
