import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import validate from 'validate.js'

import { Button, PrimaryButton } from '../../components/Button'

export default class Form extends Component {
  static propTypes = {
    fields: PropTypes.array.isRequired,
    successCallback: PropTypes.func,
    errorCallback: PropTypes.func,
    submitLabel: PropTypes.any,
  };

  constructor(props, context) {
    super(props, context);

    let values = {};

    for (let field of this.props.fields) {
      if ("defaultValue" in field) {
        values[field.name] = field.defaultValue;
      }
    }

    this.state = {
      errors: {},
      values: values,
      fields: {}
    };

    this.inputs = {};

    this.validateField = this.validateField.bind(this);
    this.validateAllFields = this.validateAllFields.bind(this);
    this.updateFieldValue = this.updateFieldValue.bind(this);
    this.submit = this.submit.bind(this);
    this.onSubmitEditing = this.onSubmitEditing.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  updateFieldValue(name, value) {
    const newValues = { ...this.state.values, [name]: value };
    this.setState({ ...this.state, values: newValues });

    this.props.onChange(name, value);
  }


  validateField(name) {
    const { fields } = this.props;
    const field = fields.find(item => item.name === name);

    // validate field
    const value = this.state.values[name];
    const result = validate(this.state.values, { [name]: field.validation });

    // update errors
    this.setState(currentState => {
      const newErrors = { ...currentState.errors, [name]: result === undefined ? "" : result[name][0] };
      return { ...currentState, errors: newErrors }
    });

    return result === undefined;

  }

  validateAllFields() {
    let formCorrect = true;
    for (let field of this.props.fields) {
      if (!this.validateField(field.name)) {
        formCorrect = false
      }
    }

    return formCorrect
  }

  submit() {
    if (this.validateAllFields()) {
      this.props.successCallback(this.state.values)
    }
  }

  onSubmitEditing(next) {
    if (next !== undefined) {
      this.inputs[next].focus()
    }
  }

  setRef(name, input) {
    this.inputs[name] = input;
  }


  render() {
    return (
      <View>
        {this.props.fields.map((field, index) => {
          const { name } = field;
          const error = this.state.errors[name];
          const value = this.state.values[name];

          return <field.component key={name}
                                  value={value}
                                  error={error}
                                  validateField={this.validateField}
                                  onChange={this.updateFieldValue}
                                  setRef={this.setRef}
                                  onSubmitEditing={this.onSubmitEditing}
                                  {...field}
          />
        })}
        {this.props.children}
        {this.props.submitLabel && <PrimaryButton label={this.props.submitLabel} onPress={this.submit} block />}
      </View>
    );
  }

}
