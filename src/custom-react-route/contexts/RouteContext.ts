import { createContext } from 'react';

const noop = () => {};

type RouteContextType = {
  path: Location;
  setPath: (location: Location) => void;
};

export const RouteContext = createContext<RouteContextType>({
  path: location,
  setPath: noop,
});
