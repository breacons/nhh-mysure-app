import { Component } from 'react';
import { Image } from 'react-native';
import React from 'react';
import plane from '../../static/img/plane.png';

export default class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={plane}
        style={{
          width: 40,
          resizeMode: 'contain',
          display: 'flex',
          marginTop: 10,
        }}
      />
    );
  }
}
