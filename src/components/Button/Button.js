import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'

import styles from './style'

export const Button = ({ label, onPress, style, ...props }) => {
    const { block, marginTop, marginBottom } = props;

    return (
        <TouchableOpacity onPress={onPress} style={{width: '100%', paddingHorizontal: 20, marginBottom: marginBottom || 0, marginTop:marginTop || 0}}>
            <View style={[ styles.button, style, block && styles.block ]}>

                <Text style={styles.label}>
                    {label}
                </Text>

            </View>
        </TouchableOpacity>

    )
};

export const PrimaryButton = (props) => {
    return <Button style={styles.primary} {...props}/>
};

export const SecondaryButton = (props) => {
  return <Button style={styles.secondary} {...props}/>
};

export const AccentButton = () => {
};

export const DisabledButton = () => {
};
