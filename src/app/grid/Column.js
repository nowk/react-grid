import React, { Component } from 'react';
import { classnames } from './_utils.js';

import css from '../_grid.module.scss';

class Column extends Component {
  render() {
    const { size, offset, nogutter, extend, prepend } = this.props;
    const c = [
      css.col,
      css[`col${size}`]
    ];
    if (!!offset) { 
      c.push(css[`colOffsetLeft${offset}`]);
    }
    if (!!nogutter) {
      c.push(css['colNogutter']);
    }
    // NOTE due to the math here and the possibility of a scrollbar this will
    // cause an x scrollbar if there is a y scrollbar present, to avoid that
    // you will need to `overflow-x: hidden` on the body or external box to
    // avoid this 
    // FIXME this should be an ifelse, you should not be able to use
    // both at
    // the same time
    // FIXME but what about a full expansion that involves a prepend and
    // extend. Technically you should use a separate pane element, but good
    // question.
    if (!!extend){ 
      c.push(css[`col${size}Extend`]);
    }
    if (!!prepend) {
      c.push(css[`col${size}Prepend`]);
    }

    return (
      <div className={classnames(this.props, c)} style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}

/**
 * expose
 */

export default Column;
