import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { RiDeleteBin2Line as DeleteIcon } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';

import styles from './TransitionGroupPage.module.css';

export default function TransitionGroupPage() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState(null);

  const handleAddOneItem = (event) => {
    event.preventDefault();
    const itemId = uuidv4();
    setItems((prev) => [{ itemId, itemText: inputText }, ...prev]);
    setInputText(null);
  };

  const handleDeleteOneItem = (itemId) => {
    setItems((prev) => prev.filter((el) => el.itemId !== itemId));
  };

  return (
    <>
      <h1>
        Протестировать
        <br />
        &#171;React Transition Group - TransitionGroup&#187;
      </h1>

      <form
        onSubmit={handleAddOneItem}
        className={styles.addItemForm}
      >
        <input
          onChange={(event) => setInputText(event.target.value)}
          value={inputText ?? ''}
          type="text"
          required
        />
        <button type="submit">Добавить запись</button>
      </form>

      <TransitionGroup
        component="div"
        className={styles.itemList}
      >
        {items.map(({ itemId, itemText }) => (
          <CSSTransition
            key={itemId}
            timeout={500}
            classNames={{
              appear: '',
              appearActive: '',
              appearDone: '',
              enter: '',
              enterActive: styles.itemEnterActive,
              enterDone: '',
              exit: '',
              exitActive: styles.itemExitActive,
              exitDone: '',
            }}
            onEnter={() => console.log('onEnter')}
            onEntering={() => console.log('onEntering')}
            onEntered={() => console.log('onEntered')}
            onExit={() => console.log('onExit')}
            onExiting={() => console.log('onExiting')}
            onExited={() => console.log('onExited')}
          >
            <div className={styles.item}>
              <button
                type="button"
                className={styles.deleteItemButton}
                onClick={() => handleDeleteOneItem(itemId)}
              >
                <DeleteIcon />
              </button>
              <p className={styles.itemText}>{itemText}</p>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}
