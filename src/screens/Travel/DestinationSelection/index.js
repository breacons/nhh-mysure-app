import React, { Component, useState } from 'react';
import { View, Image, Picker, StyleSheet, Text, TouchableOpacity } from 'react-native';

import styles from '../style';

import {
    EHIC_SELECTION_SCREEN, TRAVEL_ACTIVITY_SELECTION
} from '../../../constans/screens';

const countries = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovak Republic', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom']
const defaultCountry = countries[6];

class CountrySelectionScreen extends Component {
    state = { country: defaultCountry };

    navigationOptions = { header: null };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('../ActivitySelection/images/travelers.png')} style={[styles.image, {height: 230, marginTop: 80}]} />
                    <Text style={[styles.title, {marginBottom: 10}]}>Where are you heading?</Text>
                    <Picker
                        selectedValue={this.state.country}
                        style={{ height: 50, width: 200, alignSelf: 'center' }}
                        itemStyle={{height: 200}}
                        onValueChange={(itemValue, itemIndex) => this.setState({ country: itemValue })}>
                        {countries.map(item => <Picker.Item label={item} value={item} key={item} />)}
                    </Picker>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>{''}</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(TRAVEL_ACTIVITY_SELECTION)}><Text style={styles.footerText}>Next</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
};

export default CountrySelectionScreen;
