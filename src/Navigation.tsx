import React, { memo } from 'react';
import Link from './Custom-Routes/components/Link';
import { useNavigate } from './Custom-Routes/hooks/useNavigate';

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div
      className={
        'fixed w-96 h-200 w-screen h-12 flex flex-row gap-4 align-middle'
      }
    >
      <Link to={'/'}>
        <h1 className={'w-fit text-2xl'}>React Router Setting</h1>
      </Link>
      <nav className={'w-fit flex gap-5'}>
        <button className={'text-sm'} onClick={() => navigate('/1')}>
          Go to Route1
        </button>
        <button className={'text-sm'} onClick={() => navigate('/2')}>
          Go to Route2
        </button>
      </nav>
    </div>
  );
};

export default memo(Navigation);
