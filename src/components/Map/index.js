import { Image, View } from 'react-native';
import React from 'react';
import worldMap from '../../static/img/world_map.png';

export default <Image
  source={worldMap}
  style={{
    width: 380,
    height: 230,
    opacity: 0.2,
    position: 'absolute',
    top: -80,
    zIndex: -1,
  }}
/>;
