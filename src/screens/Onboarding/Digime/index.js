import React, { Component, useState } from 'react';
import { View, Image, Picker, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import { PrimaryButton } from '../../../components/Button';

import styles from '../style'
import { LOADING_AND_RESULT_SCREEN, WALLET_SCREEN } from '../../../constans/screens';

const countries = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovak Republic', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom']
const defaultCountry = countries[0];

class DigimeScreen extends Component {
    state = { country: defaultCountry };

    navigationOptions = { header: null };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('../images/digime.png')} style={styles.image} />
                    <Text style={styles.title}>Can we get to know you?</Text>
                    <Text style={styles.subTitle}>We are using Digi.me to explore your habits and needs.</Text>
                    <View style={{marginTop: 30}}>
                        <PrimaryButton block={true} label="Connect to my Digi.me profile" onPress={() => this.props.navigation.navigate(LOADING_AND_RESULT_SCREEN)}/>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(WALLET_SCREEN)}><Text style={styles.footerText}>Skip</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(LOADING_AND_RESULT_SCREEN)}><Text
                        style={styles.footerText}>Next</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
};

export default DigimeScreen;
