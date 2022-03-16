// vim: sts=2:ts=2:sw=2
/* eslint-env es6 */

import React from 'react';
import ProgressBar from 'react-bootstrap/esm/ProgressBar.js'; // TODO maybe get rid of react-bootstrap/bootstrap dependency?

class DigioptionsSpinner extends React.PureComponent {
  render = function(){

    const {stroke, fill, fillOpacity, strokeWidth, ...rest} = this.props;

    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 228.206 228.206" {...rest}>
        <circle style={{marker: 'none'}} strokeWidth={strokeWidth} cy="114.103" cx="114.103" r="114.103" fill={`rgb(${fill})`} fillOpacity={fillOpacity} fillRule="nonzero"/>
        <g 
          clipPath="path('M93.127 170.313c.153.061.303.116.454.17 31.118 11.327 65.576-4.74 76.902-35.86 11.326-31.117-4.742-65.576-35.86-76.902-31.118-11.326-65.577 4.744-76.903 35.86l-27.355 75.161c-16.573-25.457-21.41-58.127-10.232-88.84C39.01 28.038 96.443 1.257 148.304 20.133c51.866 18.877 78.643 76.31 59.767 128.17-18.876 51.862-76.305 78.645-128.17 59.767-13.542-4.928-25.376-12.486-35.133-21.89l16.14-44.344.011.014 14.772-40.585c.114-.342.23-.677.353-1.015 7.59-20.852 30.568-31.692 51.452-24.367z')"
        >
          <circle style={{marker: 'none'}} strokeWidth={strokeWidth} cy="114.103" cx="114.103" r="114.103" fill='#ffffff' fillOpacity={0.5} fillRule="nonzero"/>
          <path
            strokeDasharray="750"
            fill="none"
            stroke={stroke}
            strokeLinejoin="miter"
            strokeWidth="60"
            d="M136.103 106.009c-8.884-8.875-18.529-10.888-27.433-10.32-8.904.569-18.195 13.99-23.09 21.494-11.845 18.156-17.796 37.846-16.318 51.073 1.477 13.227 6.77 23.001 20.729 27.347 32.943 10.258 69.893 1.776 90.64-24.04 16.473-20.5 18.886-55.117 10.483-78.252-5.042-13.882-13.975-26.511-26.105-35.808C125.571 27.276 69.984 36.332 41.5 75.465c-18.904 25.97-27.451 65.878-26.552 100.058"
          >
            <animate
              attributeName="stroke-dashoffset"
              begin="0.0s"
              values="-750;750"
              dur="3s"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </path>
        </g> 
      </svg>
    );
  };
}

DigioptionsSpinner.defaultProps = {
  stroke: '#05497a',
  fill: '128, 128, 128', // circle
  fillOpacity: 0.15, // circle
  strokeWidth: 0, // circle
};


class DigioptionsSpinnerProgressBox extends React.PureComponent {
  render(){
    const {progress} = this.props;

    const percent = Math.max(Math.min(Math.round(progress*95 + 5), 100), 0);

    let label;
    if (percent >= 20){
      label = percent +'%';
    }else if (percent >= 13) {
      label = `${percent}`;
    } else {
      label = '';
    }

    return (
      <div style={Object.assign({width: '120px', margin: 'auto'}, this.props.style)}>
        <DigioptionsSpinner width='60%'/>
        <div style={{backgroundColor: `rgba(${this.props.fill}, ${this.props.fillOpacity})`, borderRadius: '5px', padding: '5px', marginTop: '5px',
        }}>
          <ProgressBar style={{backgroundColor: '#e3f0f9'}} now={percent} label={label}/>
        </div>
      </div>
    );
  }
}
//dc_blue_background

DigioptionsSpinnerProgressBox.defaultProps = {

  // for DigioptionsSpinner
  stroke: '#05497a',
  fill: '128, 128, 128', // circle
  fillOpacity: 0.15, // circle
  strokeWidth: 0, // circle
};


export {
  DigioptionsSpinner,
  DigioptionsSpinnerProgressBox,
};
