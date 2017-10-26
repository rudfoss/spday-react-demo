import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';

import styles from './Item.scss';

export const ItemList = ({items}) => (
  <ul>
    <li>
      {items.map((item, index) => (
        <li key={index}>
          <Item {...item}/>
        </li>
      ))}
    </li>
  </ul>
);
ItemList.propTypes = {
};
export default ItemList;