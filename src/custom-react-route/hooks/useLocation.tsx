import React from 'react';

export const useLocation = () => {
  const [path, setPath] = React.useState(window.location);

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
