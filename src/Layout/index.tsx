import React from 'react';
import Navigation from '../Navigation';
import Routes from '../custom-react-route/components/Routes';
import Route from '../custom-react-route/components/Route';
import App from '../App';
import Route1 from '../pages/Route1';
import Route2 from '../pages/Route2';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={'/'} element={<App />} />
        <Route path={'/1'} element={<Route1 />} />
        <Route path={'/2'} element={<Route2 />} />
      </Routes>
    </>
  );
};

export default Layout;
