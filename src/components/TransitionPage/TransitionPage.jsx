import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import { RiLoader2Line as Spinner } from 'react-icons/ri';

import styles from './TransitionPage.module.css';

export default function TransitionPage() {
  const [spinnerVisible, setSpinnerVisible] = useState(false);
  const [buttonActive, setButtonActive] = useState(true);

  const handleClick = () => {
    setSpinnerVisible((prev) => !prev);
    setButtonActive(false);
  };

  return (
    <>
      <h1>
        Протестировать
        <br />
        &#171;React Transition Group - Transition&#187;
      </h1>

      <div>
        <button
          type="button"
          onClick={handleClick}
          disabled={!buttonActive}
          className={styles.spinnerButton}
        >
          {buttonActive && (spinnerVisible ? 'Скрыть' : 'Показать')}
        </button>
      </div>

      <Transition
        in={spinnerVisible}
        timeout={{ // !!! Или возможна дефолтная запись "timeout={500}"
          enter: 2000,
          exit: 3000,
        }}
        // appear // !!! Если в момент монтирования компонентов "in=true" и "appear=true", то сразу последовательно отрабатывают "onEnter", "onEntering" и "onEntered"
        // mountOnEnter // !!! Если "in=false", а "mountOnEnter=true", то компонент "<Transition />" будет смотирован только при срабатывании "onEnter". Если же "in=false", "unmountOnExit=false" и "mountOnEnter=false", то компонент смонтируется сразу со стилями, соответствующими "state=exited"
        // unmountOnExit // !!! Если "unmountOnExit=true", то компонент "<Transition />" размонтируется при выполении "onExited", при этом анимация для "state=exited" не отработает
        onEnter={() => console.log('onEnter')}
        onEntering={() => console.log('onEntering')}
        onEntered={() => { console.log('onEntered'); setButtonActive(true); }}
        onExit={() => console.log('onExit')}
        onExiting={() => console.log('onExiting')}
        onExited={() => { console.log('onExited'); setButtonActive(true); }}
      >
        {(state) => (
          <Spinner
            className={`${styles.transitionSpinner} ${styles[`transitionSpinner-${state}`]}`}
          />
        )}
      </Transition>
    </>
  );
}
