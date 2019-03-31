import React, { Component, useState } from 'react';
import { View, Image, Picker, StyleSheet, Text, TouchableOpacity } from 'react-native';

import styles from '../Onboarding/style';

import {
    COUNTRY_SELECTION_SCREEN
} from '../../constans/screens';
import { PrimaryButton } from '../../components/Button';


class CountrySelectionScreen extends Component {
    navigationOptions = { header: null };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('./images/undraw_airport_2581.png')}
                           style={[styles.image, { height: 180 }]} />
                    <Text style={[styles.title, {fontWeight: "800", fontSize: 30, marginTop: 70}]}>Cross-border access to healthcare. {`\n\n`}Simplified.</Text>
                </View>
                <View style={styles.footer}>
                    <PrimaryButton onPress={() => this.props.navigation.navigate(COUNTRY_SELECTION_SCREEN)} label={"Let's get started"}/>
                </View>
            </View>
        )
    }
};

export default CountrySelectionScreen;
