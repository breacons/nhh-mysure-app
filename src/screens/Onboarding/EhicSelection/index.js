import React, { Component, useState } from 'react';
import { View, Image, Picker, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import { PrimaryButton } from '../../../components/Button';

import styles from '../style'
import { OCCUPATION_SELECTION_SCREEN, WALLET_SCREEN } from '../../../constans/screens';

const countries = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovak Republic', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom']
const defaultCountry = countries[0];

class CountrySelectionScreen extends Component {
    state = { country: defaultCountry };

    navigationOptions = { header: null };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('../images/ehic.png')} style={styles.image} />
                    <Text style={styles.title}>Do you own a European Health Insurance Card?</Text>
                    <View style={{marginTop: 30}}>
                        <PrimaryButton block={true} label="Yes, use it!" onPress={() => this.props.navigation.navigate(OCCUPATION_SELECTION_SCREEN)}/>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(WALLET_SCREEN)}><Text style={styles.footerText}>Skip</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(OCCUPATION_SELECTION_SCREEN)}><Text
                        style={styles.footerText}>Next</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
};

export default CountrySelectionScreen;
