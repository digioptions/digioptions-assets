// vim: sts=2:ts=2:sw=2
/* eslint-env es6 */

import React from 'react';

const digiOptionsLogoPath = 'M136.103 106.009c-8.884-8.875-18.529-10.888-27.433-10.32-8.904.569-18.195 13.99-23.09 21.494-11.845 18.156-17.796 37.846-16.318 51.073 1.477 13.227 6.77 23.001 20.729 27.347 32.943 10.258 69.893 1.776 90.64-24.04 16.473-20.5 18.886-55.117 10.483-78.252-5.042-13.882-13.975-26.511-26.105-35.808C125.571 27.276 69.984 36.332 41.5 75.465c-18.904 25.97-27.451 65.878-26.552 100.058';
const digiOptionsLogoPathClip = 'M93.127 170.313c.153.061.303.116.454.17 31.118 11.327 65.576-4.74 76.902-35.86 11.326-31.117-4.742-65.576-35.86-76.902-31.118-11.326-65.577 4.744-76.903 35.86l-27.355 75.161c-16.573-25.457-21.41-58.127-10.232-88.84C39.01 28.038 96.443 1.257 148.304 20.133c51.866 18.877 78.643 76.31 59.767 128.17-18.876 51.862-76.305 78.645-128.17 59.767-13.542-4.928-25.376-12.486-35.133-21.89l16.14-44.344.011.014 14.772-40.585c.114-.342.23-.677.353-1.015 7.59-20.852 30.568-31.692 51.452-24.367z';
const digiOptionsLogoWidth = 228.206;
const digiOptionsLogoHeight = 228.206;

const digiOptionsTextWidth = 401.893;

class DigioptionsSpinnerCore extends React.PureComponent {
  render = function(){

    const {stroke, fill, fillOpacity, strokeWidth, once} = this.props;

    return (
      <>
        <circle style={{marker: 'none'}} strokeWidth={strokeWidth} cy="114.103" cx="114.103" r="114.103" fill={`rgb(${fill})`} fillOpacity={fillOpacity} fillRule="nonzero"/>
        <g 
          clipPath={`path("${digiOptionsLogoPathClip}")`}
        >
          {/* make following circle opaque and the user won't see any animation */}
          <circle style={{marker: 'none'}} cy="114.103" cx="114.103" r="114.103" fill={stroke} fillOpacity={0.0} fillRule="nonzero"/>
          <path
            strokeDasharray="750"
            fill="none"
            stroke={stroke}
            strokeLinejoin="miter"
            strokeWidth="60"
            d={digiOptionsLogoPath}
          >
            {once?
              <animate
                attributeName="stroke-dashoffset"
                begin="0.0s"
                dur="1.5s"
                values="-750;0"
                calcMode="linear"
                repeatCount="1"
              />
              :
              <animate
                attributeName="stroke-dashoffset"
                begin="0.0s"
                values="-750;750"
                dur="3s"
                calcMode="linear"
                repeatCount="indefinite"
              />
            }
          </path>
        </g> 
      </>
    );
  };
}

DigioptionsSpinnerCore.defaultProps = {
  stroke: '#05497a',
  fill: '128, 128, 128', // circle
  fillOpacity: 0.15, // circle
  strokeWidth: 0, // circle
  once: false,
};

class DigioptionsSpinner extends React.PureComponent {
  render = function(){

    const {stroke, fill, fillOpacity, strokeWidth, ...rest} = this.props;

    return (
      <svg className="digioptions-spinner" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${digiOptionsLogoWidth} ${digiOptionsLogoHeight}`} {...rest}>
        <DigioptionsSpinnerCore
          stroke={stroke}
          fill={fill}
          fillOpacity={fillOpacity}
          strokeWidth={strokeWidth}
          once={false}
        />
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

class DigioptionsLogoAnim extends React.PureComponent {
  render = function(){

    const {stroke, fill, fillOpacity, strokeWidth, color0, color1, ...rest} = this.props;

    const padding = 30; // 30 = padding between icon and text

    const digiOptionsTextScale = 1.8;
    const digiOptionsTextWidthScaled = digiOptionsTextWidth * digiOptionsTextScale;

    //const digiOptionsTextPaddingTop = 80;
    const digiOptionsTextPaddingTop = 58;

    const width = digiOptionsLogoWidth + digiOptionsTextWidthScaled + padding;

    const pathClipX = digiOptionsLogoWidth/2 + 1; // just a tiny bit outside of the circle
    const pathClipY = 0;
    const pathClipX2 = width + 10; // a bit larger than needed
    const pathClipRadius = 114.103;

    // TODO clipPath without id
    // clipPath={`path("M${pathClipX} ${pathClipY}H${pathClipX2}V${pathClipY2}H${pathClipX}L${pathClipX} ${pathClipY}")`}
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${digiOptionsLogoHeight}`} {...rest}>
        <defs>
          <clipPath id="cp">
            <path d={`M${pathClipX} ${pathClipY}H${pathClipX2}V${pathClipY + 2*pathClipRadius}H${pathClipX}A${pathClipRadius} ${pathClipRadius} 0 0 0 ${pathClipX} ${pathClipY}`} />
          </clipPath>
        </defs>
        <g transform={`translate(${width/2-digiOptionsLogoWidth/2}, 0)`}>
          { /*
          // path for clipPath testing
          <path d={`M${pathClipX} ${pathClipY}H${pathClipX2}V${pathClipY + 2*pathClipRadius}H${pathClipX}A${pathClipRadius} ${pathClipRadius} 0 0 0 ${pathClipX} ${pathClipY}`} fill="none" stroke="blue" strokeWidth="5"/>
          */}

          <g
            clipPath="url(#cp)"
          >
            <g
              transform={`translate(${digiOptionsLogoWidth/2+75-digiOptionsTextWidthScaled}, ${digiOptionsTextPaddingTop})`}
            >
              <g
                transform={`scale(${digiOptionsTextScale})`}
              >
                <path fill={color0} d="M228.338 34.48c4.053 0 7.644.907 10.775 2.719 3.13 1.812 5.568 4.333 7.314 7.562 1.747 3.229 2.62 6.887 2.62 10.973 0 2.866-.61 5.395-1.829 7.586-1.219 2.19-2.958 3.888-5.214 5.09-2.257 1.203-4.885 1.805-7.883 1.805-4.02 0-7.587-.89-10.7-2.67-3.115-1.778-5.536-4.274-7.266-7.487-1.73-3.212-2.595-6.878-2.595-10.997 0-2.866.61-5.404 1.83-7.611 1.217-2.208 2.947-3.922 5.188-5.14 2.241-1.22 4.827-1.83 7.76-1.83m1.483 8.996c-2.143 0-3.79.6-4.943 1.804-1.153 1.203-1.73 2.842-1.73 4.918 0 2.009.396 3.855 1.187 5.536.79 1.68 1.927 3.022 3.41 4.028 1.483 1.004 3.196 1.507 5.14 1.507 2.108 0 3.732-.585 4.868-1.754 1.137-1.17 1.706-2.81 1.706-4.918 0-1.977-.388-3.814-1.162-5.511-.775-1.697-1.895-3.057-3.36-4.078-1.467-1.021-3.172-1.532-5.116-1.532m34.498 15.223.691 3.855h-9.687l-7.216-40.973h9.687l3.015 17.1c.56-1.284 1.458-2.306 2.694-3.063 1.236-.76 2.793-1.137 4.671-1.137 2.207 0 4.307.576 6.301 1.73 1.993 1.153 3.7 2.809 5.116 4.967 1.416 2.158 2.388 4.67 2.916 7.537.198 1.252.296 2.405.296 3.46 0 3.328-.882 5.947-2.644 7.859-1.763 1.91-4.094 2.866-6.994 2.866-1.878 0-3.575-.38-5.09-1.137-1.516-.758-2.768-1.78-3.756-3.064m8.303-9.984c-.297-1.78-1.022-3.188-2.175-4.226-1.154-1.037-2.455-1.556-3.904-1.556-1.22 0-2.217.387-2.99 1.16-.775.775-1.162 1.855-1.162 3.238 0 .428.05.89.148 1.384.297 1.78 1.03 3.18 2.2 4.2 1.17 1.022 2.462 1.534 3.88 1.534 1.218 0 2.215-.38 2.99-1.137.773-.76 1.161-1.813 1.161-3.163a7.3 7.3 0 0 0-.148-1.434m26.145 5.783h4.992l1.433 8.056H300.2l1.187 6.722h-9.737l-1.186-6.722h-3.41l-1.434-8.056h3.41l-1.63-9.144c-.198-1.087-.297-2.06-.297-2.916 0-5.074 3.015-7.611 9.045-7.611h4.25l1.483 8.254h-2.817c-.725 0-1.244.123-1.557.37-.314.248-.47.635-.47 1.162 0 .23.016.428.05.593zm16.31 10.626c1.218 0 2.34.264 3.361.79 1.021.528 1.82 1.237 2.397 2.126a5.26 5.26 0 0 1 .865 2.916c0 1.219-.437 2.216-1.31 2.99s-2.068 1.162-3.583 1.162c-1.253 0-2.38-.272-3.386-.815-1.005-.544-1.796-1.27-2.372-2.175a5.376 5.376 0 0 1-.865-2.941c0-1.186.436-2.158 1.31-2.916.872-.758 2.067-1.137 3.583-1.137m-5.338-2.57-4.943-27.727h9.737l4.893 27.727zm23.18-28.073c3.262 0 6.211.717 8.847 2.15 2.636 1.433 4.712 3.426 6.228 5.98 1.515 2.553 2.273 5.429 2.273 8.625 0 2.339-.519 4.39-1.557 6.153-1.038 1.763-2.488 3.122-4.349 4.078-1.862.955-3.996 1.433-6.4 1.433-3.263 0-6.212-.725-8.848-2.175-2.636-1.45-4.704-3.46-6.203-6.03-1.499-2.57-2.248-5.436-2.248-8.6 0-2.34.51-4.382 1.532-6.128 1.021-1.747 2.463-3.097 4.325-4.053 1.861-.956 3.994-1.433 6.4-1.433m1.483 8.353c-1.12 0-2.027.353-2.719 1.062-.692.709-1.038 1.755-1.038 3.139 0 1.252.24 2.454.717 3.608.477 1.153 1.153 2.092 2.027 2.817.872.724 1.902 1.087 3.09 1.087 1.118 0 2.033-.363 2.742-1.087.708-.725 1.062-1.78 1.062-3.163 0-1.22-.239-2.406-.716-3.56-.478-1.152-1.17-2.092-2.076-2.816a4.813 4.813 0 0 0-3.089-1.087M374.583 62.8c-1.878 0-3.608-.387-5.189-1.161-1.582-.775-2.916-1.788-4.004-3.04l.692 3.954h-9.687l-4.942-27.727h9.736l2.67 15.124c.328 1.515.971 2.7 1.927 3.558.955.857 2.125 1.286 3.51 1.286 1.218 0 2.165-.33 2.841-.99.675-.658 1.013-1.581 1.013-2.767 0-.395-.049-.84-.148-1.334l-2.62-14.877h9.687l2.867 16.162c.198 1.054.297 2.042.297 2.965 0 2.768-.766 4.934-2.299 6.5-1.532 1.564-3.649 2.347-6.35 2.347m22.882-28.32c3.79 0 6.87.782 9.243 2.348 2.372 1.564 3.558 3.714 3.558 6.45 0 1.614-.444 2.94-1.334 3.978a9.378 9.378 0 0 1-3.188 2.422c-1.236.576-2.776 1.162-4.62 1.755-1.682.56-2.876 1.02-3.585 1.384-.708.362-1.062.856-1.062 1.482 0 .527.247.956.741 1.285.495.329 1.12.495 1.878.495 1.055 0 1.862-.256 2.422-.767s.823-1.21.791-2.1h8.7c.098 1.812-.306 3.46-1.212 4.942-.907 1.483-2.274 2.645-4.102 3.485-1.829.84-3.996 1.26-6.5 1.26-2.34 0-4.399-.371-6.178-1.112-1.779-.741-3.155-1.771-4.127-3.09a7.31 7.31 0 0 1-1.458-4.447c0-1.714.453-3.114 1.36-4.201.905-1.088 1.968-1.912 3.187-2.471 1.22-.561 2.768-1.137 4.646-1.73 1.614-.528 2.768-.964 3.46-1.31.692-.346 1.038-.833 1.038-1.458 0-.528-.272-.956-.816-1.285-.543-.33-1.228-.494-2.05-.494-1.056 0-1.879.247-2.472.74-.593.495-.873 1.203-.84 2.126h-9.342a13.158 13.158 0 0 1-.098-1.334c0-1.648.51-3.106 1.532-4.374 1.021-1.27 2.438-2.25 4.25-2.941 1.812-.692 3.872-1.038 6.178-1.038" transform="matrix(1.33333 0 0 -1.33333 -147.138 101.144)"/>
                <path fill={color1} d="M131.072 69.67h-13.79l-6.178-34.843h13.79c3.657 0 6.994.749 10.008 2.248 3.015 1.499 5.503 3.567 7.464 6.203 1.96 2.636 3.237 5.635 3.83 8.996.23 1.153.346 2.355.346 3.608 0 2.767-.61 5.189-1.83 7.265-1.218 2.076-2.997 3.682-5.337 4.819s-5.107 1.705-8.303 1.705m-5.387-26.343h-3.361l3.212 17.94h3.312c2.438 0 4.332-.592 5.684-1.778 1.35-1.187 2.026-2.884 2.026-5.091a10.8 10.8 0 0 0-.198-2.125c-.527-2.835-1.73-5.034-3.608-6.6-1.878-1.564-4.234-2.346-7.067-2.346m32.026 21.796c1.219 0 2.339.263 3.36.79 1.022.527 1.82 1.236 2.398 2.126a5.26 5.26 0 0 1 .865 2.916c0 1.219-.437 2.216-1.31 2.99s-2.068 1.162-3.583 1.162c-1.253 0-2.381-.272-3.386-.816-1.005-.543-1.796-1.27-2.372-2.174a5.376 5.376 0 0 1-.865-2.941c0-1.186.436-2.16 1.31-2.916.873-.76 2.067-1.137 3.583-1.137m-5.338-2.57-4.942-27.727h9.736l4.894 27.727zm25.503.346c-2.208 0-4.308-.577-6.301-1.73-1.994-1.154-3.7-2.801-5.116-4.943-1.417-2.142-2.39-4.645-2.916-7.512a21.611 21.611 0 0 1-.296-3.46c0-3.328.88-5.955 2.644-7.883 1.762-1.928 4.094-2.891 6.993-2.891 1.879 0 3.584.378 5.116 1.136 1.532.758 2.775 1.78 3.73 3.065l-.641-3.56c-.626-3.69-2.587-5.534-5.882-5.534-1.22 0-2.183.247-2.891.74-.71.495-1.096 1.187-1.161 2.077h-9.54l-.05-.99c0-3.162 1.113-5.658 3.337-7.487 2.225-1.828 5.363-2.743 9.416-2.743 3.195 0 5.947.627 8.254 1.879 2.306 1.252 4.134 2.924 5.486 5.016 1.35 2.093 2.256 4.44 2.718 7.043l4.844 27.43h-9.687l-.692-3.854c-.495 1.285-1.377 2.306-2.645 3.064s-2.842 1.137-4.72 1.137m5.635-14.185c-.297-1.813-1.022-3.23-2.175-4.251-1.154-1.021-2.455-1.532-3.904-1.532-1.22 0-2.217.379-2.991 1.137s-1.161 1.829-1.161 3.213c0 .46.049.939.148 1.433.297 1.812 1.02 3.22 2.175 4.226 1.153 1.004 2.454 1.507 3.904 1.507 1.219 0 2.216-.38 2.99-1.137.774-.758 1.162-1.828 1.162-3.212 0-.43-.05-.89-.148-1.384m23.03 16.409c1.22 0 2.34.263 3.362.79 1.02.527 1.82 1.236 2.397 2.126a5.26 5.26 0 0 1 .865 2.916c0 1.219-.437 2.216-1.31 2.99s-2.068 1.162-3.583 1.162c-1.252 0-2.381-.272-3.385-.816-1.006-.543-1.797-1.27-2.373-2.174a5.376 5.376 0 0 1-.865-2.941c0-1.186.437-2.16 1.31-2.916.873-.76 2.067-1.137 3.583-1.137m-5.338-2.57-4.942-27.727h9.737l4.893 27.727z" transform="matrix(1.33333 0 0 -1.33333 -147.138 101.144)"/>
              </g>
              <animateTransform attributeName="transform"
                attributeType="XML"
                begin="2.0s"
                dur="1.2s"
                type="translate"
                from={`${digiOptionsLogoWidth/2+75-digiOptionsTextWidthScaled} ${digiOptionsTextPaddingTop}`}
                to={`${width-digiOptionsTextWidthScaled} ${digiOptionsTextPaddingTop}`}
                repeatCount="1"
                fill="freeze"
              />
            </g> 
          </g> 
          <DigioptionsSpinnerCore
            stroke={stroke}
            fill={fill}
            fillOpacity={fillOpacity}
            strokeWidth={strokeWidth}
            once={true}
          />
          <animateTransform attributeName="transform"
            attributeType="XML"
            begin="2.0s"
            dur="1.2s"
            type="translate"
            from={`${width/2-digiOptionsLogoWidth/2} 0`}
            to="0 0"
            repeatCount="1"
            fill="freeze"
          />
        </g> 
      </svg>
    );
  };
}

DigioptionsLogoAnim.defaultProps = {
  stroke: '#05497a',
  fill: '128, 128, 128', // circle
  //fill: '240, 240, 240', // circle
  fillOpacity: 0.15, // circle
  //fillOpacity: 1.0, // circle
  strokeWidth: 0, // circle
  //colorIcon: '#05497a', /* color-digioptions0 */
  color0: '#05497a', /* color-digioptions0 */
  color1: '#0575c4', /* color-digioptions1 */
};


export {
  DigioptionsSpinner,
  DigioptionsLogoAnim,
};
