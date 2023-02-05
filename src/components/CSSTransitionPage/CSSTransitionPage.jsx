import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import dolphinImage from '../../images/dolphin.png';

import styles from './CSSTransitionPage.module.css';

export default function CSSTransitionPage() {
  const [imageVisible, setImageVisible] = useState(true);
  const [buttonActive, setButtonActive] = useState(true);

  return (
    <>
      <h1>
        Протестировать
        <br />
        &#171;React Transition Group - CSSTransition&#187;
      </h1>

      <div>
        <button
          type="button"
          onClick={() => setImageVisible((prev) => !prev)}
          disabled={!buttonActive}
          className={styles.imageButton}
        >
          {buttonActive && (imageVisible ? 'Скрыть рамку' : 'Показать рамку')}
        </button>
      </div>

      <CSSTransition
        in={imageVisible}
        timeout={5000}
        // !!! Возможна дефолтная запись "classNames='my'", тогда к названию класса автоматически будет добавляться соответствующий постфикс с получением "my-appear", "my-appear-active", "my-appear-done", "my-enter", "my-enter-active", "my-enter-done", "my-exit", "my-exit-active" или "my-exit-done"
        // !!! При дефолтной записи "classNames={styles.my}" с модульными стилями работать не получится! При использовании модульных стилей необходимо отдельно прописывать стили для каждого состояния
        classNames={{
          appear: styles.myAppear,
          appearActive: styles.myAppearActive, // !!! Если "in=true" и "appear=true", то дочернему элементу "<CSSTransition />" добавятся классы "myAppear myAppearActive"
          appearDone: styles.myAppearDone, // !!! Если "in=true" и "appear=true", то дочернему элементу "<CSSTransition />" добавятся классы "myAppearDone myEnterDone"
          enter: styles.myEnter,
          enterActive: styles.myEnterActive, // !!! Дочернему элементу "<CSSTransition />" добавятся классы "myEnter myEnterActive"
          enterDone: styles.myEnterDone, // !!! Дочернему элементу "<CSSTransition />" добавится класс "myEnterDone"
          exit: styles.myExit,
          exitActive: styles.myExitActive, // !!! Дочернему элементу "<CSSTransition />" добавятся классы "myExit myExitActive"
          exitDone: styles.myExitDone, // !!! Если "unmountOnExit=false", то очернему элементу "<CSSTransition />" добавится класс "myExitDone"
        }}
        appear // !!! Если "in=true" и "appear=true", то независимо от значения "mountOnEnter" в момент монтирования компонентов дочернему элементу "<CSSTransition />" сначала присвоятся классы "свои исходные классы элемента" + "myAppear myAppearActive", а по истечении "timeout", заданного для "appear", классы переприсвоятся на "исходные" + "myAppearDone myEnterDone"
        // mountOnEnter // !!! Если "mountOnEnter=false" и "appear=false", то в момент монтирования компонентов дочернему элементу "<CSSTransition />" не будет присвоено никаких дополнительных классов, независимо от того, что "in=true" или "in=false"
        // unmountOnExit
        onEnter={() => { console.log('onEnter'); setButtonActive(false); }}
        onEntering={() => console.log('onEntering')}
        onEntered={() => { console.log('onEntered'); setButtonActive(true); }}
        onExit={() => { console.log('onExit'); setButtonActive(false); }}
        onExiting={() => console.log('onExiting')}
        onExited={() => { console.log('onExited'); setButtonActive(true); }}
      >
        <img src={dolphinImage} className={styles.dolphinImage} alt="dolphin" />
      </CSSTransition>
    </>
  );
}
