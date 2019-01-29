import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const dnaStrand = [...template].map((left) => {
      const right = dnaPairMap[left];
      return (
        <div className='dnaGrid'>
          <div 
            className='barLeft'
            style={{ 'background-color': dnaColorMap[left] }}
            onClick={() => clickHandler(`Clicked on left: ${left}`)}
          >
            {left}
          </div>
          <div 
            className='barRight' 
            style={{ 'background-color': dnaColorMap[right] }}
            onClick={() => clickHandler(`Clicked on right: ${right}`)}
          >
            {right}
          </div>
        </div>
      );
    });

    return (
      <p>
        {dnaStrand}
      </p>
    );
  }
}

DnaView.propTypes = {
  template: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
}

export default DnaView;
