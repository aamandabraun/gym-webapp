export type Screen = 'login' | 'modules' | 'workout' | 'checkin' | 'content';

import { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { ModulesScreen } from './components/ModulesScreen';
import { WorkoutScreen } from './components/WorkoutScreen';
import { CheckinScreen } from './components/CheckinScreen';
import { ContentScreen } from './components/ContentScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [userName, setUserName] = useState('');

  const handleLogin = (name: string) => {
    setUserName(name);
    setCurrentScreen('modules');
  };

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {currentScreen === 'login' && (
        <LoginScreen onLogin={handleLogin} />
      )}
      
      {currentScreen === 'modules' && (
        <ModulesScreen userName={userName} onNavigate={navigateTo} />
      )}
      
      {currentScreen === 'workout' && (
        <WorkoutScreen onBack={() => navigateTo('modules')} />
      )}

      {currentScreen === 'checkin' && (
        <CheckinScreen userName={userName} onBack={() => navigateTo('modules')} />
      )}

      {currentScreen === 'content' && (
        <ContentScreen onBack={() => navigateTo('modules')} />
      )}
    </div>
  );
}