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
exports.DigioptionsSpinnerProgressBox = exports.DigioptionsProgressBar = void 0;
const react_1 = __importDefault(require("react"));
const ProgressBar_js_1 = __importDefault(require("react-bootstrap/esm/ProgressBar.js")); // TODO maybe get rid of react-bootstrap/bootstrap dependency?
const digioptions_spinner_js_1 = require("./digioptions_spinner.js");
class DigioptionsProgressBar extends react_1.default.PureComponent {
    render() {
        const { progress, style } = this.props;
        const percent = Math.max(Math.min(Math.round(progress * 95 + 5), 100), 0);
        let label;
        if (percent >= 20) {
            label = percent + '%';
        }
        else if (percent >= 13) {
            label = `${percent}`;
        }
        else {
            label = '';
        }
        const styleFinal = Object.assign({}, {
            backgroundColor: `rgba(${this.props.fill}, ${this.props.fillOpacity})`,
            borderRadius: '5px',
            padding: '5px',
        }, style);
        return (react_1.default.createElement("div", { style: styleFinal },
            react_1.default.createElement(ProgressBar_js_1.default, { style: { backgroundColor: '#e3f0f9' }, now: percent, label: label })));
    }
}
exports.DigioptionsProgressBar = DigioptionsProgressBar;
DigioptionsProgressBar.defaultProps = {
    fill: '128, 128, 128',
    fillOpacity: 0.15,
    style: {},
    //  width: 'auto',
};
class DigioptionsSpinnerProgressBox extends react_1.default.PureComponent {
    render() {
        const _a = this.props, { className, style } = _a, rest = __rest(_a, ["className", "style"]);
        //return (
        //  <div className={className} style={Object.assign({width: '120px', margin: 'auto'}, style)}>
        //    <DigioptionsSpinner width='60%'/>
        //    <DigioptionsProgressBar {...rest} />
        //  </div>
        //);
        return (react_1.default.createElement("div", { className: className, style: Object.assign({ margin: 'auto', maxWidth: 200 }, style) },
            react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                react_1.default.createElement(digioptions_spinner_js_1.DigioptionsSpinner, { width: '60px' }),
                react_1.default.createElement(DigioptionsProgressBar, Object.assign({ style: { flexGrow: 1, marginLeft: 10 } }, rest)))));
    }
}
exports.DigioptionsSpinnerProgressBox = DigioptionsSpinnerProgressBox;
//dc_blue_background
DigioptionsSpinnerProgressBox.defaultProps = {
    fill: '128, 128, 128',
    fillOpacity: 0.15, // circle
};
//# sourceMappingURL=digioptions_progress_bar.js.map