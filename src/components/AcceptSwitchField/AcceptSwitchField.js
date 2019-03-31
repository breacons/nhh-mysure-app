import React from 'react';
import {
  View, TextInput, Text, StyleSheet, Switch,
} from 'react-native';
import { red, white, green } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    // fontWeight: 'bold',
    // fontSize: 30,
    flexDirection: 'row',
    marginVertical: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  labelContainer: {
    marginLeft: 10,
  },
  label: {
    color: white,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
    marginLeft: 10

  },
  input: {
    // backgroundColor: green
  },
  errorLabel: {
    color: red,
  },
});

const AcceptSwitchField = (props) => {
  const {
    name, onChange, error, value, defaultValue, ...rest
  } = props;
  return (
    <View style={styles.container}>
      <Switch
        style={styles.input}
        onValueChange={value => onChange(name, value)}
        value={value || defaultValue}
        ios_backgroundColor={green}
        {...rest}

      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{props.label}</Text>
        error ?
        {' '}
        <Text style={styles.errorLabel}>{error}</Text>
        {' '}
: null
      </View>
    </View>
  );
};

export default AcceptSwitchField;
