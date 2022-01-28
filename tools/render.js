// vim: sts=2:ts=2:sw=2

import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server.js';
import sharp from 'sharp';

//import {DigioptionsSpinner} from '../dist/mjs-react/digioptions_spinner.js';
import {DigioptionsLogo} from '../dist/mjs-react/digioptions_logo.js';

function mkdir(dir){
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
}

function svg_component_render(component, props){
  //console.log(component.defaultProps);
  const elm = React.createElement(component, props);
  return ReactDOMServer.renderToStaticMarkup(elm);
}

function svg_component_write(component, props, fname){
  fs.writeFileSync(
    fname,
    svg_component_render(component, props)
  );
}

async function svg_component_write_png(component, props, fname, imageprops){
  const buf = Buffer.from(svg_component_render(component, props));

  console.log(imageprops);
  let img = await sharp(
    buf,
    {density: 800} // TODO might be huge
  ).png();

  if (img.resize){
    img = await img.resize(imageprops.resize);
  }

  if (imageprops.flatten) {
    img = img.flatten(imageprops.flatten);
  }

  await img.toFile(fname);
}

mkdir('svg');
mkdir('bitmap');

// animated spinner (only svg)
//svg_component_write(DigioptionsSpinner, {}, path.join('svg', 'digioptions_spinner.svg'));

svg_component_write(DigioptionsLogo, {}, path.join('svg', 'digioptions_logo.svg'));
svg_component_write(DigioptionsLogo, {subTitle: true}, path.join('svg', 'digioptions_logofull.svg'));
svg_component_write(DigioptionsLogo, {logoText: false}, path.join('svg', 'digioptions_icon-nocircle.svg'));

//svg_component_write(DigioptionsSpinner, {}, 'digioptions_logo-icon-circle.svg');

for (let [size, imageprops] of [
  ['xl', {resize: 1600}],
  ['lg', {resize: 1200}],
  ['md', {resize: 800}],
]){
  svg_component_write_png(DigioptionsLogo, {}, path.join('bitmap', `digioptions_logo_${size}.png`), imageprops);
  svg_component_write_png(DigioptionsLogo, {}, path.join('bitmap', `digioptions_logo_bg-white_${size}.png`), Object.assign({flatten: {background: '#ffffff'}}, imageprops));

  svg_component_write_png(DigioptionsLogo, {subTitle: true}, path.join('bitmap', `digioptions_logofull_${size}.png`), imageprops);
  svg_component_write_png(DigioptionsLogo, {subTitle: true}, path.join('bitmap', `digioptions_logofull_bg-white_${size}.png`), Object.assign({flatten: {background: '#ffffff'}}, imageprops));

  svg_component_write_png(DigioptionsLogo, {logoText: false}, path.join('bitmap', `digioptions_icon-nocircle_${size}.png`), imageprops);
  svg_component_write_png(DigioptionsLogo, {logoText: false}, path.join('bitmap', `digioptions_icon-nocircle_bg-white_${size}.png`), Object.assign({flatten: {background: '#ffffff'}}, imageprops));
}



