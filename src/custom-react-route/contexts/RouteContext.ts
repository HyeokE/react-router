import { createContext } from 'react';
import { PathType } from '../types';

const noop = () => {};

type RouteContextType = {
  path: PathType;
  setPath: (location: PathType) => void;
};

export const RouteContext = createContext<RouteContextType>({
  path: {
    pathname: location.pathname,
    search: location.search,
    hash: location.hash,
    location: location,
  },
  setPath: noop,
});
