import React from 'react';

export const useLocation = () => {
  const [path, setPath] = React.useState({
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
    location: window.location,
  });

  React.useEffect(() => {
    window.addEventListener('popstate', () => {
      setPath((prevState) => ({
        ...prevState,
        location: window.location,
      }));
    });
    return () => {
      window.removeEventListener('popstate', () => {
        setPath((prevState) => ({
          ...prevState,
          location: window.location,
        }));
      });
    };
  }, []);

  return { path, setPath };
};
