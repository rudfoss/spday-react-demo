import React from 'react';
import PropTypes from 'prop-types';

import styles from './Item.scss';

export const Item = ({done, text, onDoneChange, onRemove}) => (
  <div className={styles.item} data-done={done}>
    <input type="checkbox" checked={done} onChange={evt => onDoneChange(evt.target.checked)}/>
    <div>{text}</div>
    <button onClick={onRemove}>Remove</button>
  </div>
);
Item.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string,

  onDoneChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};
export default Item;