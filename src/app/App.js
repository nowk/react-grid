import React from 'react';
import { Container, Row, Col, GridOverlayGuide } from './grid';

import './App.module.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <GridOverlayGuide></GridOverlayGuide>
        <Container>
          <h1>Basic Colums</h1>
          <Row debug>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="2">&nbsp;</Col>
            <Col size="2">&nbsp;</Col>
            <Col size="2">&nbsp;</Col>
            <Col size="2">&nbsp;</Col>
            <Col size="2">&nbsp;</Col>
            <Col size="2">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="3">&nbsp;</Col>
            <Col size="3">&nbsp;</Col>
            <Col size="3">&nbsp;</Col>
            <Col size="3">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="4">&nbsp;</Col>
            <Col size="4">&nbsp;</Col>
            <Col size="4">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="5">&nbsp;</Col>
            <Col size="7">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="6">&nbsp;</Col>
            <Col size="6">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="7">&nbsp;</Col>
            <Col size="5">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="8">&nbsp;</Col>
            <Col size="4">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="9">&nbsp;</Col>
            <Col size="3">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="10">&nbsp;</Col>
            <Col size="2">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="11">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="12">&nbsp;</Col>
          </Row>

          <h2>Wrapping</h2>
          <Row debug>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>

            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
            <Col size="1">&nbsp;</Col>
          </Row>

          <h2>Offsets</h2>
          <Row debug>
            <Col size="11" offset="1">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="10" offset="2">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="9" offset="3">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="8" offset="4">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="7" offset="5">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="6" offset="6">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="5" offset="7">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="4" offset="8">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="3" offset="9">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="2" offset="10">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="1" offset="11">&nbsp;</Col>
          </Row>

          <h2>Extend/Prepend Linked Margins</h2>
          <h3>Extend Right</h3>
          <Row debug>
            <Col size="6">&nbsp;</Col>
            <Col size="6" extend>&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="7">&nbsp;</Col>
            <Col size="5" extend>&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="8">&nbsp;</Col>
            <Col size="4" extend>&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="8">&nbsp;</Col>
            <Col size="3" offset="1" extend>&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="2" offset="10" extend>&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="1" offset="11" extend>&nbsp;</Col>
          </Row>
          <h3>Prened Left</h3>
          <Row debug>
            <Col size="6" prepend>&nbsp;</Col>
            <Col size="6">&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="5" prepend>&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="4" prepend>&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="3" prepend>&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="2" prepend>&nbsp;</Col>
          </Row>
          <br />
          <Row debug>
            <Col size="1" prepend>&nbsp;</Col>
          </Row>

          <h2>Relative</h2>
          <Row>
            <Col size="3" nogutter>
              <Row debug relative>
                <Col size="1">&nbsp;</Col>
                <Col size="1">&nbsp;</Col>
                <Col size="1">&nbsp;</Col>
              </Row>
              <br />
              <Row debug relative>
                <Col size="2">&nbsp;</Col>
                <Col size="1">&nbsp;</Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }
}

export default App
