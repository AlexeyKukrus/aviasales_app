import React from 'react';
import classNames from 'classnames';

import classes from './tabs.module.scss';

const Tabs = () => {
  return (
    <div className={classes.tabs}>
      <button className={classNames(classes.tabs__button, classes.tabs__button_cheapest, classes.checked)}>
        самый дешевый
      </button>
      <button className={classNames(classes.tabs__button, classes.tabs__button_fast)}>самый быстрый</button>
      <button className={classNames(classes.tabs__button, classes.tabs__button_optimal)}>оптимальный</button>
    </div>
  );
};

export default Tabs;
