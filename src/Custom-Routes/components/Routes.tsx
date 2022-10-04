import React, { useContext } from 'react';
import { RouteContext } from '../contexts/RouteContext';

type RoutesProps = {
  children: React.ReactNode | React.ReactNode[];
};

const Routes = ({ children }: RoutesProps) => {
  const { path } = useContext(RouteContext);
  const isArray = Array.isArray(children);

  const isChild = (child: React.ReactNode) => {
    const { props } = child as React.ReactElement;
    return props.path === path.pathname;
  };

  const childElement = (child: React.ReactNode) => {
    const { props } = child as React.ReactElement;
    return props.element;
  };

  const routeChildren = () => {
    if (isArray) {
      return childElement(children.find(isChild));
    } else {
      return childElement(children);
    }
  };
  const result = routeChildren();

  return <>{result}</>;
};

export default Routes;
