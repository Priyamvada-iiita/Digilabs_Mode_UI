// TextContext.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface TextContextProps {
  textContent: string;
  updateTextContent: (newText: string) => void;
}

const TextContext = createContext<TextContextProps | undefined>(undefined);

interface TextProviderProps {
  children: ReactNode;
}

export const TextProvider: React.FC<TextProviderProps> = ({ children }) => {
  const [textContent, setTextContent] = useState('Unlock Your Card');

  const updateTextContent = (newText: string) => {
    if (newText !== 'Unlock Your Card') {
      setTextContent(newText);
    }
  };
  // console.log("textcontent" , textContent);
  return (
    <TextContext.Provider value={{ textContent, updateTextContent }}>
      {children}
    </TextContext.Provider>
  );
};

export const useTextContext = (): TextContextProps => {
  const context = useContext(TextContext);

  if (!context) {
    throw new Error('useTextContext must be used within a TextProvider');
  }

  return context;
};
