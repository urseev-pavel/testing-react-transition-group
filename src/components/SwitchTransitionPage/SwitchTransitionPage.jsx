import React, { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import smallCarImage from '../../images/small-car.svg';
import bigCarImage from '../../images/big-car.svg';

import styles from './SwitchTransitionPage.module.css';

export default function SwitchTransitionPage() {
  const [mode, setMode] = useState('out-in');
  const [componentState, setComponentState] = useState(true);
  const [buttonActive, setButtonActive] = useState(true);

  const handleComponentButtonClick = () => {
    setComponentState((prev) => !prev);
    setButtonActive(false);
    setTimeout(() => {
      setButtonActive(true);
    }, 3000);
  };

  return (
    <>
      <h1>
        Протестировать
        <br />
        &#171;React Transition Group - SwitchTransition&#187;
      </h1>

      <div className={styles.modeSelect}>
        <p>Выбрать режим &#171;SwitchTransition&#187;&#42889;</p>
        <div className={styles.modeSelectInput}>
          <input
            onChange={(event) => {
              setMode(event.target.value);
            }}
            id="out-in"
            value="out-in"
            name="mode"
            type="radio"
            checked={mode === 'out-in'}
            disabled={!buttonActive}
          />
          <label
            htmlFor="out-in"
            className={mode === 'out-in' ? styles.activeLabel : ''}
          >
            &#171;out-in&#187;
          </label>
        </div>
        <div className={styles.modeSelectInput}>
          <input
            onChange={(event) => {
              setMode(event.target.value);
            }}
            id="in-out"
            value="in-out"
            name="mode"
            type="radio"
            checked={mode === 'in-out'}
            disabled={!buttonActive}
          />
          <label
            htmlFor="in-out"
            className={mode === 'in-out' ? styles.activeLabel : ''}
          >
            &#171;in-out&#187;
          </label>
        </div>
      </div>

      <button
        type="button"
        className={styles.componentButton}
        onClick={handleComponentButtonClick}
        disabled={!buttonActive}
      >
        Изменить состояние компонента
      </button>

      <SwitchTransition mode={mode}>
        <CSSTransition
          key={componentState ? 'car-1' : 'car-2'}
          timeout={1500}
          classNames={{
            appear: '',
            appearActive: '',
            appearDone: '',
            enter: '',
            enterActive: styles.carEnterActive,
            enterDone: styles.carEnterDone,
            exit: '',
            exitActive: styles.carExitActive,
            exitDone: '',
          }}
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
        >
          <div>
            {componentState
              ? (<img src={bigCarImage} className={styles.carImage} alt="big-car" />)
              : (<img src={smallCarImage} className={styles.carImage} alt="small-car" />)}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}
