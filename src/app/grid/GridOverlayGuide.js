import React from 'react';

import Container from './Container.js';
import Row from './Row.js';
import Column from './Column.js';

import css from '../_grid.module.scss';

/**
 * Column alias
 */

const Col = Column;

/**
 * GridOverlayGuide provides a grid overlay
 */

const GridOverlayGuide = () => {
  return (
    <div className={css['debugOverlay']}>
      <Container>
        <Row debug={true}>
          <Col size="1"><div className={css['debugOverlay__col']}>&nbsp;</div></Col>
          <Col size="1"><div className={css['debugOverlay__col']}>&nbsp;</div></Col>
          <Col size="1"><div className={css['debugOverlay__col']}>&nbsp;</div></Col>
          <Col size="1"><div className={css['debugOverlay__col']}>&nbsp;</div></Col>
          <Col size="1"><div className={css['debugOverlay__col']}>&nbsp;</div></Col>
          <Col size="1"><div className={css['debugOverlay__col']}>&nbsp;</div></Col>
          <Col size="1"><div className={css['debugOverlay__col']}>&nbsp;</div></Col>
          <Col size="1"><div className={css['debugOverlay__col']}>&nbsp;</div></Col>
          <Col size="1"><div className={css['debugOverlay__col']}>&nbsp;</div></Col>
          <Col size="1"><div className={css['debugOverlay__col']}>&nbsp;</div></Col>
          <Col size="1"><div className={css['debugOverlay__col']}>&nbsp;</div></Col>
          <Col size="1"><div className={css['debugOverlay__col']}>&nbsp;</div></Col>
        </Row>
      </Container>
    </div>
  )
}

/**
 * expose
 */

export default GridOverlayGuide;
