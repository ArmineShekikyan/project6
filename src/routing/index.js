import React from 'react';
import { useRoutes } from 'react-router-dom';
import  routes from '../Routes';

export const Routing = () => {
  return (
    <>
      {useRoutes(routes)}
    </>
  );
};




