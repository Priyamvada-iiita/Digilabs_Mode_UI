// LogoContext.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface LogoContextProps {
  logoUrl: string;
  updateLogoUrl: (newUrl: string) => void;
}

const LogoContext = createContext<LogoContextProps | undefined>(undefined);

interface LogoProviderProps {
  children: ReactNode;
}

export const LogoProvider: React.FC<LogoProviderProps> = ({ children }) => {
  const [logoUrl, setLogoUrl] = useState('/Mode UI Logo.png');

  const updateLogoUrl = (newUrl: string) => {
    setLogoUrl(newUrl);
  };

  return (
    <LogoContext.Provider value={{ logoUrl, updateLogoUrl }}>
      {children}
    </LogoContext.Provider>
  );
};

export const useLogoContext = (): LogoContextProps => {
  const context = useContext(LogoContext);

  if (!context) {
    throw new Error('useLogoContext must be used within a LogoProvider');
  }

  return context;
};
