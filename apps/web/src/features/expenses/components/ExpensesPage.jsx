import { Receipt, Plus, RotateCcw } from 'lucide-react';
import { useWedding } from '../../../context/WeddingContext';
import { Button } from '../../../components/ui/button';

export function ExpensesPage() {
  const { isAdmin } = useWedding();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#34302B]">Expenses & Payments</h1>
          <p className="text-sm text-[#34302B]/70">
            Private wedding financial record-keeping (Admins and Managers only).
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* Destructive / Admin-only actions */}
          {isAdmin && (
            <Button variant="outline" size="sm">
              <RotateCcw className="w-4 h-4 mr-2" />
              Recycle Bin
            </Button>
          )}
          {/* Operational actions accessible to both Admins and Managers */}
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Expense
          </Button>
        </div>
      </div>

      <div className="bg-white border border-[#E8DDCB] rounded-xl p-8 text-center space-y-3">
        <Receipt className="w-12 h-12 text-[#C4A77D] mx-auto" />
        <h3 className="font-heading text-xl font-semibold text-[#34302B]">Financial Ledger</h3>
        <p className="text-sm text-[#34302B]/60 max-w-md mx-auto">
          Track agreed amounts in integer paise, record payment instalments, and maintain
          transparency between both families.
        </p>
      </div>
    </div>
  );
}
