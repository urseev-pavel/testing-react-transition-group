import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../MainNavigation/MainNavigation';

export default function MainLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}
