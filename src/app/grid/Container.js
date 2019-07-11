import React from 'react';
import { classnames } from './_utils.js';

import css from '../_grid.module.scss';

const Container = (props) => {
  const c = [css.container];

  return (
    <div className={classnames(props, c)}>
      {props.children}
    </div>
  );
}

/**
 * expose
 */

export default Container;
