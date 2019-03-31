import React, { Component, useState } from 'react';
import { View, Image, Picker, StyleSheet, Text, TouchableOpacity } from 'react-native';

import styles from '../style';

import {
    TRAVEL_RESULTS
} from '../../../constans/screens';

const countries = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovak Republic', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom']
const defaultCountry = countries[6];

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,

    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '800',
        marginBottom: 5,
        marginTop: 35,
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginTop: 50,
        paddingHorizontal: 20,
    },
    actionTitle: {
        fontSize: 12,
        color: 'black',
        textAlign: 'center',
        // marginRight: 10,
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: 10
    },
    logo: {
        width: 40,
        height: 40,
        alignSelf: 'center'
    },
    actionItem: {
        width: 70, alignContent: 'center',
        opacity: 0.3
    },
    activeItem: {
        opacity: 1
    },
    subTitle: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: '300',
        marginBottom: 10
    }
});
const services = [
    {
        name: 'Sightseeing',
        id: 'sightseeing',
        logo: require('./images/city.png'),
    },
    {
        name: 'Beach Vacation',
        id: 'beachVacation',
        logo: require('./images/beach.png'),
    },
    {
        name: 'Winter Sports',
        id: 'winterSports',
        logo: require('./images/skiing.png'),
    },
    {
        name: 'Extreme Sports',
        id: 'extremeSports',
        logo: require('./images/climbing.png'),
    },

];


class ActivitySelectionScreen extends Component {
    state = { country: defaultCountry, selectedCategory: null };

    navigationOptions = { header: null };

    render() {
        const {selectedCategory} = this.state;

        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('./images/undraw_through_the_desert_fcin.png')} style={[styles.image, {height: 200, marginTop: 80}]} />
                    <Text style={[styles.title, {marginBottom: 10}]}>What's your plan?</Text>
                    <View style={localStyles.actionRow}>
                        {services.map(item => (
                            <TouchableOpacity key={item.name}
                                              onPress={() =>  this.setState({ selectedCategory: item.id })}>
                                <View
                                    style={[localStyles.actionItem, selectedCategory && (selectedCategory === item.id && localStyles.activeItem)]}>
                                    <Image source={item.logo} style={localStyles.logo} resizeMode="contain" />
                                    <Text style={localStyles.actionTitle}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>{''}</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(TRAVEL_RESULTS)}><Text style={styles.footerText}>Next</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
};

export default ActivitySelectionScreen;
