import { Heart } from 'lucide-react';
import { Button } from '../../../components/ui/button';

export function GuestInvitationPage() {
  return (
    <div className="bg-white border border-[#E8DDCB] rounded-2xl p-8 space-y-6 shadow-sm text-center">
      <div className="w-12 h-12 rounded-full bg-[#C4A77D]/10 flex items-center justify-center mx-auto text-[#C4A77D]">
        <Heart className="w-6 h-6 fill-current" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-semibold tracking-wider uppercase text-[#C4A77D]">
          Wedding Invitation
        </span>
        <h1 className="font-heading text-3xl font-bold text-[#34302B]">You Are Warmly Invited</h1>
        <p className="text-sm text-[#34302B]/70 max-w-md mx-auto">
          Please view your family&apos;s invited ceremonies and confirm your attendance below.
        </p>
      </div>

      <div className="border border-[#E8DDCB]/60 rounded-xl p-4 bg-[#F8F5EF]/50 max-w-md mx-auto text-left space-y-3">
        <h3 className="font-heading text-lg font-semibold text-[#34302B]">RSVP Response</h3>
        <p className="text-xs text-[#34302B]/60">Submit one response on behalf of your family.</p>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex-1">
            Yes, Attending
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            Maybe
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            Cannot Attend
          </Button>
        </div>
      </div>
    </div>
  );
}
