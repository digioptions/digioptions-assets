// vim: sts=2:ts=2:sw=2
/* eslint-env es6 */
import React from 'react';
class IconCircleNotchSpin extends React.PureComponent {
    render() {
        const { stroke, ...rest } = this.props;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "spin", width: "100", height: "100", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", ...rest },
            React.createElement("circle", { stroke: stroke, cx: "50", cy: "50", fill: "none", strokeWidth: "10", r: "35", strokeDasharray: "164.93361431346415 56.97787143782138" })));
    }
}
IconCircleNotchSpin.defaultProps = {
    stroke: '#666666',
};
export { IconCircleNotchSpin, };
