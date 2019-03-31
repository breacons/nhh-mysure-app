import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import {
  darkBlue, darkGray, red,
} from '../../styles/colors';
import styles from './styles';

export default class InvalidActivationTokenScreen extends Component {
  static navigationOptions = {
    gesturesEnabled: false,
    header: null,
  };

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <View style={styles.screen}>
        <View style={styles.errorGraphics}>
          <View style={styles.circle} />
          <View style={styles.warning}>
            <Ionicons name="ios-warning" size={120} color={darkBlue} />
          </View>
        </View>
        <View style={styles.content}>
          {children}
        </View>
      </View>
    );
  }
}
