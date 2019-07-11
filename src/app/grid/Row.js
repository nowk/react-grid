import React from 'react';
import { classnames } from './_utils.js';

import css from '../_grid.module.scss';

const Row = (props) => {
  const { debug, relative } = props;
  const c = [
    css.row
  ];
  if (!!debug) {
    c.push(css['rowDebug']);
  }
  if (!!relative) {
    c.push(css['rowRelative']);
  }

  return (
    <div className={classnames(props, c)}>
      {props.children}
    </div>
  );
}

/**
 * expose
 */

export default Row;
