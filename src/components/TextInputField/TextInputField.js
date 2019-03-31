import React, { Component } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import styles from './style'


class TextInputField extends Component {
    render() {
        const { name, label, validateField, onChange, error, onSubmitEditing, next, setRef, ...rest } = this.props;
        return ( <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <TextInput style={styles.input}
                           onBlur={() => validateField(name)}
                           onChangeText={value => onChange(name, value)}
                           autoCorrect={false}
                           onSubmitEditing={() => onSubmitEditing(next)}
                           returnKeyType={next ? "next": "done"}
                           ref={(input) => setRef && setRef(name, input)}
                           {...rest}

                />
                error ? <Text style={styles.errorLabel}>{error}</Text> : null
            </View>
        )
    }
    ;
}

export default TextInputField