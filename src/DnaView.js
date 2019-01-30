import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const dnaPairMap = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
};

const dnaColorMap = {
  A: 'green',
  T: 'red',
  C: 'blue',
  G: 'yellow',
};

class DnaView extends Component {
  render() {
    const { template, clickHandler } = this.props;

    if (template.length < 1) {
      return null;
    }

    return [...template].map((left) => {
      const right = dnaPairMap[left];
      return (
        <div className="dnaGrid" key={uuid.v4()}>
          <div
            className="barLeft"
            style={{ backgroundColor: dnaColorMap[left] }}
            onClick={() => clickHandler(`Clicked on left: ${left}`)}
          >
            {left}
          </div>
          <div
            className="barRight"
            style={{ backgroundColor: dnaColorMap[right] }}
            onClick={() => clickHandler(`Clicked on right: ${right}`)}
          >
            {right}
          </div>
        </div>
      );
    });
  }
}

DnaView.propTypes = {
  template: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default DnaView;
