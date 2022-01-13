// vim: sts=2:ts=2:sw=2
/* eslint-env es6 */
import React from 'react';
/* this is the only icon with default stroke color #666666 */
/* since animateTransform does not work with ie11 we added a css3 animation '.spin' */
class IconCircleNotchSpin extends React.PureComponent {
    render() {
        const { stroke, ...rest } = this.props;
        return (<svg xmlns="http://www.w3.org/2000/svg" className="spin" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" {...rest}>
        <circle stroke={stroke} cx="50" cy="50" fill="none" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
        </circle>
      </svg>);
    }
}
// <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
IconCircleNotchSpin.defaultProps = { stroke: '#666666' };
export { IconCircleNotchSpin, };
