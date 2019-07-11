import React, { Component } from 'react';
import { classnames } from './_utils.js';

import css from '../_grid.module.scss';

class Container extends Component {
  render() {    
    const c = [css.container];

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

export default Container;
