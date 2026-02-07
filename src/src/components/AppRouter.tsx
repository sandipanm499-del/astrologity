import React, { useEffect } from 'react';
import { useNavigation } from '../hooks/useNavigation';
import { useUser } from '../hooks/useUser';

// Temporary placeholder screens until we create actual screens
const PlaceholderScreen: React.FC<{ title: string }> = ({ title }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">🔮</h1>
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-purple-200">Loading amazing features...</p>
    </div>
  </div>
);

const AppRouter: React.FC = () => {
  const { currentScreen } = useNavigation();

  // For now, show placeholder
  return <PlaceholderScreen title="AI Palm Reader" />;
};

export default AppRouter;
