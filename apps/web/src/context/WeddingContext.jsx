import { createContext, useContext, useState, useMemo } from 'react';

const WeddingContext = createContext(null);

export function WeddingProvider({ children }) {
  const [wedding, setWedding] = useState(null);
  const [role, setRole] = useState(null); // 'ADMIN' | 'MANAGER'
  const [loading, setLoading] = useState(false);

  const value = useMemo(
    () => ({
      wedding,
      setWedding,
      role,
      setRole,
      isAdmin: role === 'ADMIN',
      isManager: role === 'MANAGER',
      lifecycle: wedding?.lifecycle || 'ACTIVE',
      isCompleted: wedding?.lifecycle === 'COMPLETED',
      isArchived: wedding?.lifecycle === 'ARCHIVED',
      loading,
      setLoading,
    }),
    [wedding, role, loading]
  );

  return <WeddingContext.Provider value={value}>{children}</WeddingContext.Provider>;
}

export function useWedding() {
  const context = useContext(WeddingContext);
  if (!context) {
    throw new Error('useWedding must be used within a WeddingProvider');
  }
  return context;
}
