import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteProvider from './custom-react-route/RouteProvider';
import './index.css';
import Layout from './Layout';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouteProvider>
      <div className={'relative w-screen h-screen'}>
        <Layout />
      </div>
    </RouteProvider>
  </React.StrictMode>,
);
