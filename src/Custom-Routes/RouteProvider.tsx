import React from 'react';
import { RouteContext } from './contexts/RouteContext';

import { useLocation } from './hooks/useLocation';

type RouteProviderProps = {
  children: React.ReactNode;
};

const RouteProvider = ({ children }: RouteProviderProps) => {
  const contextValue = useLocation();
  return (
    <RouteContext.Provider value={contextValue}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteProvider;
