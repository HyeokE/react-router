import React, { useCallback, useContext } from 'react';
import { RouteContext } from '../contexts/RouteContext';

export const useNavigate = () => {
  let { path, setPath } = useContext(RouteContext);

  const navigate = useCallback(
    (inputPath: string) => {
      if (path.pathname === inputPath) return;
      history.pushState({}, '', inputPath);
      setPath({
        pathname: location.pathname,
        search: location.search,
        hash: location.hash,
        location: window.location,
      });
    },
    [path],
  );
  return navigate;
};
