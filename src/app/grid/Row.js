import React, { Component } from 'react';
import { classnames } from './_utils.js';

import css from '../_grid.module.scss';

class Row extends Component {
  render() {
    const { debug, relative } = this.props;
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
      <div className={classnames(this.props, c)}>
        {this.props.children}
      </div>
    );
  }
}

/**
 * expose
 */

export default Row;
