import React from 'react';
import PropTypes from 'prop-types';

import styles from './Item.scss';

export const Item = ({done, text, onTextChange, onDoneChange, onRemove}) => (
  <div className={styles.item}>
    <input type="checkbox" value={done} onChange={evt => onDoneChange(evt.target.checked)}/>
    <input type="text" value={text} onChange={evt => onTextChange(evt.target.value)}/>
    <button onClick={onRemove}>Remove</button>
  </div>
);
Item.propTypes = {
};
export default Item;