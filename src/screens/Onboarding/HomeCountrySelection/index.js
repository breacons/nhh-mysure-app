import React, { Component, useState } from 'react';
import { View, Image, Picker, StyleSheet, Text, TouchableOpacity } from 'react-native';

import styles from '../style';

import {
    EHIC_SELECTION_SCREEN, WALLET_SCREEN
} from '../../../constans/screens';

const countries = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovak Republic', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom']
const defaultCountry = countries[9];

class CountrySelectionScreen extends Component {
    state = { country: defaultCountry };

    navigationOptions = { header: null };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('../images/country.png')} style={styles.image} />
                    <Text style={styles.title}>What is your home country?</Text>
                    <Picker
                        selectedValue={this.state.country}
                        style={{ height: 50, width: 200, alignSelf: 'center' }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ country: itemValue })}>
                        {countries.map(item => <Picker.Item label={item} value={item} key={item} />)}
                    </Picker>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(WALLET_SCREEN)}><Text style={styles.footerText}>Skip</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(EHIC_SELECTION_SCREEN)}><Text style={styles.footerText}>Next</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
};

export default CountrySelectionScreen;
