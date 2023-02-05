import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MainNavigation.module.css';

const checkActive = (isActive) => (isActive ? styles.navbarLinkAcive : styles.navbarLink);

export default function MainNavigation() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.fillNavBlock} />
      <NavLink className={({ isActive }) => checkActive(isActive)} to="." end>Main</NavLink>
      <NavLink className={({ isActive }) => checkActive(isActive)} to="transition">Transition</NavLink>
      <NavLink className={({ isActive }) => checkActive(isActive)} to="css-transition">CSSTransition</NavLink>
      <NavLink className={({ isActive }) => checkActive(isActive)} to="switch-transition">SwitchTransition</NavLink>
      <NavLink className={({ isActive }) => checkActive(isActive)} to="transition-group">TransitionGroup</NavLink>
      <div className={styles.fillNavBlock} />
    </nav>
  );
}
