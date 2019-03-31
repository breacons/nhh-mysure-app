import React, { Component, useState } from 'react';
import {
    View,
    Image,
    Picker,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { hospitals } from './hostpitals';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    sectionTitle: {
        paddingHorizontal: 20,
        fontSize: 24,
        fontWeight: '800',
        marginBottom: 5,
        marginTop: 35,
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    actionRow: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginTop: 10
    },
    actionTitle: {
        fontSize: 12,
        color: 'black',
        textAlign: 'center',
        // marginRight: 10,
        fontWeight: "600",
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
        paddingHorizontal: 20, fontSize: 20, marginTop: 20, fontWeight: "300", marginBottom: 10
    }
});

const width = Dimensions.get('window').width;
const height = 298;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

const current = [60.190697, 24.907262];

const activePin = require('./images/active-pin.png');
const inactivePin = require('./images/inactive-pin.png');

const services = [
    {
        name: 'Basic Checkup',
        id: 'Genral',
        logo: require('./images/checkup.png'),
    },
    {
        name: 'Dental Care',
        id: 'Dental',
        logo: require('./images/dental.png'),
    },
    {
        name: 'Eye Care',
        id: 'Vision',
        logo: require('./images/eye.png'),
    },
    {
        name: 'Orthopedic',
        id: 'Bone',
        logo: require('./images/bones.png'),
    },

]


class AssistanceScreen extends Component {
    state = { selectedCategory: null };

    render() {
        const {selectedCategory} = this.state;


        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.sectionTitle}>Medical Assistance</Text>
                    <Text style={styles.subTitle}>How can we help you?</Text>
                    <View style={styles.actionRow}>
                        {services.map(item => (
                            <TouchableOpacity key={item.name} onPress={() => (selectedCategory && selectedCategory === item.id) ? this.setState({selectedCategory: null}) : this.setState({selectedCategory: item.id})}>
                                <View style={[styles.actionItem, selectedCategory && (selectedCategory === item.id && styles.activeItem) ]}>
                                    <Image source={item.logo} style={styles.logo} resizeMode="contain" />
                                    <Text style={styles.actionTitle}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <Text style={styles.subTitle}>You are covered for medical treatment in the following locations:</Text>
                    <View style={{ backgroundColor: 'red', width: width, height: height }}>
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: 60.166091,
                                longitude: 24.926820,
                                latitudeDelta: LATITUDE_DELTA,
                                longitudeDelta: LONGITUDE_DELTA,
                            }}
                        >
                            {hospitals.map(marker => (
                                <Marker
                                    key={marker.ID}
                                    coordinate={{ latitude: marker.Latitude, longitude: marker.Longitude }}
                                    title={marker.Name}
                                    description={`${marker.PostalAddress}, Helsinki`}
                                    image={!selectedCategory || marker[selectedCategory] === 1 ? activePin : inactivePin}
                                />
                            ))}
                        </MapView>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default AssistanceScreen;


