import React from 'react';
import { useNavigate } from '../hooks/useNavigate';

type LinkProps = {
  to: string;
  children: React.ReactNode;
};

const Link = ({ to, children }: LinkProps) => {
  const navigate = useNavigate();
  return (
    <a
      onClick={() => navigate(to)}
      style={{
        cursor: 'pointer',
        textDecoration: 'unset',
        color: 'unset',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
    </a>
  );
};

export default Link;
