// vim: sts=2:ts=2:sw=2
/* eslint-env es6 */

import React from 'react';
import ProgressBar from 'react-bootstrap/esm/ProgressBar.js'; // TODO maybe get rid of react-bootstrap/bootstrap dependency?
import {DigioptionsSpinner} from './digioptions_spinner.js';

class DigioptionsProgressBar extends React.PureComponent {
  render(){
    const {progress, style} = this.props;

    const percent = Math.max(Math.min(Math.round(progress*95 + 5), 100), 0);

    let label;
    if (percent >= 20){
      label = percent +'%';
    }else if (percent >= 13) {
      label = `${percent}`;
    } else {
      label = '';
    }

    const styleFinal = Object.assign({},
      {
        backgroundColor: `rgba(${this.props.fill}, ${this.props.fillOpacity})`,
        borderRadius: '5px',
        padding: '5px',
      },
      style
    );

    return (
      <div style={styleFinal}>
        <ProgressBar style={{backgroundColor: '#e3f0f9'}} now={percent} label={label}/>
      </div>
    );
  }
}

DigioptionsProgressBar.defaultProps = {
  fill: '128, 128, 128', // circle
  fillOpacity: 0.15, // circle
  style: {},
//  width: 'auto',
};

class DigioptionsSpinnerProgressBox extends React.PureComponent {
  render(){
    const {className, style, ...rest} = this.props;

    //return (
    //  <div className={className} style={Object.assign({width: '120px', margin: 'auto'}, style)}>
    //    <DigioptionsSpinner width='60%'/>
    //    <DigioptionsProgressBar {...rest} />
    //  </div>
    //);
    return (
      <div className={className} style={Object.assign({margin: 'auto', maxWidth: 200}, style)}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <DigioptionsSpinner width='60px'/>
          <DigioptionsProgressBar style={{flexGrow: 1, marginLeft: 10}}{...rest} />
        </div>
      </div>
    );
  }
}
//dc_blue_background

DigioptionsSpinnerProgressBox.defaultProps = {
  fill: '128, 128, 128', // circle
  fillOpacity: 0.15, // circle
};


export {
  DigioptionsProgressBar,
  DigioptionsSpinnerProgressBox,
};
