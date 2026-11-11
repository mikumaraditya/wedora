import { useState } from 'react';
import { Button } from '../../../components/ui/button';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-4">
        <h2 className="font-heading text-2xl font-bold text-[#34302B]">Welcome back</h2>
        <p className="text-xs text-[#34302B]/60">Sign in to your wedding planning workspace</p>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold text-[#34302B]">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="bride-or-groom@example.com"
          className="w-full px-3 py-2 text-sm border border-[#E8DDCB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#C4A77D]"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold text-[#34302B]">Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-3 py-2 text-sm border border-[#E8DDCB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#C4A77D]"
          required
        />
      </div>

      <Button type="submit" className="w-full mt-2">
        Sign In
      </Button>
    </form>
  );
}
