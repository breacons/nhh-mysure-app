import React, { Component, useState } from 'react';
import { View, Image, Picker, StyleSheet, Text, TouchableOpacity } from 'react-native';

import styles from '../style';

import {
    DIGIME_SCREEN,
    EHIC_SELECTION_SCREEN, WALLET_SCREEN
} from '../../../constans/screens';

const unions = ["University of Helsinki (HYY) ","University of Eastern Finland (ISYY) ","The University of Jyväskylä (JYY) ", "The University of Lapland (LYY) ","Lappeenranta University of Technology (LTKY) ","Hanken School of Economics (SHS) ","Aalto University Student Union (AYY)","The University of Oulu (OYY) ","The University of Turku (TYY) ","The University of Vaasa (VYY) ","Åbo Akademi University (ÅAS) ","University of the Arts Student Union (TaiYo)"]
const defaultUnion = unions[3];

class UniversitySelectionScreen extends Component {
    state = { union: defaultUnion };

    navigationOptions = { header: null };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('../images/union.png')} style={styles.image} />
                    <Text style={styles.title}>Are you part of any Student Union?</Text>
                    <Picker
                        selectedValue={this.state.union}
                        style={{ height: 50, width: 300, alignSelf: 'center' }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ union: itemValue })}>
                        {unions.map(item => <Picker.Item label={item} value={item} key={item} />)}
                    </Picker>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(WALLET_SCREEN)}><Text style={styles.footerText}>Skip</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(DIGIME_SCREEN)}><Text style={styles.footerText}>Next</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
};

export default UniversitySelectionScreen;
