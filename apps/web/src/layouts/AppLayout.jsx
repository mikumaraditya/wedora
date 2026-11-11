import { Outlet } from 'react-router';
import { Header } from '../components/common/Header';

export function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EF]">
      <Header />
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
    </div>
  );
}
