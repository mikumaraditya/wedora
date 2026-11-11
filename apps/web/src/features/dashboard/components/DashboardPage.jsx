import { Calendar, Users, CheckSquare } from 'lucide-react';
import { useWedding } from '../../../context/WeddingContext';

export function DashboardPage() {
  const { wedding } = useWedding();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[#34302B]">Wedding Dashboard</h1>
        <p className="text-sm text-[#34302B]/70">
          {wedding
            ? `${wedding.brideName} & ${wedding.groomName}`
            : 'Welcome to your wedding workspace'}
        </p>
      </div>

      {/* Non-financial KPI aggregates */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-[#E8DDCB] rounded-xl p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3">
            <span className="text-sm font-medium text-[#34302B]/80">Upcoming Events</span>
            <Calendar className="w-5 h-5 text-[#C4A77D]" />
          </div>
          <div className="text-2xl font-bold font-heading text-[#34302B]">0</div>
          <p className="text-xs text-[#34302B]/60 mt-1">Scheduled ceremonies</p>
        </div>

        <div className="bg-white border border-[#E8DDCB] rounded-xl p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3">
            <span className="text-sm font-medium text-[#34302B]/80">Guest Families & RSVPs</span>
            <Users className="w-5 h-5 text-[#C4A77D]" />
          </div>
          <div className="text-2xl font-bold font-heading text-[#34302B]">0</div>
          <p className="text-xs text-[#34302B]/60 mt-1">0 confirmed (families × 3 estimate)</p>
        </div>

        <div className="bg-white border border-[#E8DDCB] rounded-xl p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3">
            <span className="text-sm font-medium text-[#34302B]/80">Pending Tasks</span>
            <CheckSquare className="w-5 h-5 text-[#C4A77D]" />
          </div>
          <div className="text-2xl font-bold font-heading text-[#34302B]">0</div>
          <p className="text-xs text-[#34302B]/60 mt-1">Tasks requiring coordination</p>
        </div>
      </div>
    </div>
  );
}
