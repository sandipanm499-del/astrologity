import React from 'react';
import { NavigationProvider } from './contexts/NavigationContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { UserProvider } from './contexts/UserContext';
import { AppProvider } from './contexts/AppContext';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <AppProvider>
      <LanguageProvider>
        <UserProvider>
          <NavigationProvider>
            <AppRouter />
          </NavigationProvider>
        </UserProvider>
      </LanguageProvider>
    </AppProvider>
  );
}

export default App;
