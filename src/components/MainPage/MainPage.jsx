import React, { useState } from 'react';
import { ImSpinner9 as Spinner } from 'react-icons/im';
import fireImage from '../../images/fire.gif';

import styles from './MainPage.module.css';

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  return (
    <>
      <img src={fireImage} className={styles.fireImage} alt="fire" />
      <h1>
        Библиотеки
        {' '}
        <br />
        для реализации анимаций в React:
      </h1>
      <div className={styles.mainLinks}>
        {isLoading
          ? <Spinner className={styles.spinner} />
          : (
            <>
              <a
                className={styles.firstLink}
                href="https://www.react-spring.dev/"
                target="_blank"
                rel="noreferrer"
              >
                React Spring
              </a>
              <a
                className={styles.secondLink}
                href="https://reactcommunity.org/react-transition-group/"
                target="_blank"
                rel="noreferrer"
              >
                React Transition Group
              </a>
              <a
                className={styles.thirdLink}
                href="https://www.framer.com/motion/"
                target="_blank"
                rel="noreferrer"
              >
                Framer Motion
              </a>
            </>
          )}
      </div>
    </>
  );
}
