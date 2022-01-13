"use strict";
// vim: sts=2:ts=2:sw=2
/* eslint-env es6 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconCircleNotchSpin = void 0;
const react_1 = __importDefault(require("react"));
/* this is the only icon with default stroke color #666666 */
/* since animateTransform does not work with ie11 we added a css3 animation '.spin' */
class IconCircleNotchSpin extends react_1.default.PureComponent {
    render() {
        const _a = this.props, { stroke } = _a, rest = __rest(_a, ["stroke"]);
        return (<svg xmlns="http://www.w3.org/2000/svg" className="spin" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" {...rest}>
        <circle stroke={stroke} cx="50" cy="50" fill="none" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
        </circle>
      </svg>);
    }
}
exports.IconCircleNotchSpin = IconCircleNotchSpin;
// <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
IconCircleNotchSpin.defaultProps = { stroke: '#666666' };
