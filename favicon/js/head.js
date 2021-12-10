// vim: sts=2:ts=2:sw=2
/* eslint-env es6 */

import React from 'react';

class Head extends React.PureComponent {
  render() {
    const {
      version,
      title,
    } = this.props;

    return (
      <React.Fragment>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{title || 'DigiOptions App'}</title>

        <link rel="apple-touch-icon" sizes="180x180" href={'img/apple-icon-180x180.png?ver=' + version}/>
        <link rel="icon" type="image/png" sizes="96x96" href={'img/favicon-96x96.png?ver=' + version}/>
        <link rel="icon" type="image/png" sizes="32x32" href={'img/favicon-32x32.png?ver=' + version}/>
        <link rel="icon" type="image/png" sizes="16x16" href={'img/favicon-16x16.png?ver=' + version}/>
        <link rel="manifest" href={'site.webmanifest?ver=' + version}/>
        <meta name="msapplication-TileColor" content="#05497a"/>
        <meta name="msapplication-config" content={'browserconfig.xml?ver=' + version}/>
        <meta name="theme-color" content="#ffffff"/>

      </React.Fragment>
    );
  }
}

export {
  Head,
};
