import React from 'react';

import Item from '../Item';

import styles from './ItemList.scss';

export const ItemList = ({items, onTextChange, onSetDone, onRemove}) => (
  <ul className={styles.itemlist}>
    {items.map((item, index) => (
      <li key={index}>
        <Item {...item}
          onDoneChange={flag => onSetDone(index, flag)}
          onRemove={() => onRemove(index)}/>
      </li>
    ))}
  </ul>
);
ItemList.defaultProps = {
  items: []
};
export default ItemList;