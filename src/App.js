import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './components/MainLayout/MainLayout';
import MainPage from './components/MainPage/MainPage';
import TransitionPage from './components/TransitionPage/TransitionPage';
import CSSTransitionPage from './components/CSSTransitionPage/CSSTransitionPage';
import SwitchTransitionPage from './components/SwitchTransitionPage/SwitchTransitionPage';
import TransitionGroupPage from './components/TransitionGroupPage/TransitionGroupPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="transition" element={<TransitionPage />} />
            <Route path="css-transition" element={<CSSTransitionPage />} />
            <Route path="switch-transition" element={<SwitchTransitionPage />} />
            <Route path="transition-group" element={<TransitionGroupPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
