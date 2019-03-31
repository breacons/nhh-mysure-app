import React, { Component, useState } from 'react';
import { View, Image, Picker, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable';

import styles from '../style';

const localStyles = StyleSheet.create({
    coverageRow: {
        marginHorizontal: 25,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        paddingVertical: 10
    },
    coverageName: {
        fontWeight: '800'
    },
    coverageAmount: {
        fontSize: 12,
        marginTop: 3,
        color: '#666'
    }
});

import {
    EHIC_SELECTION_SCREEN, TRAVEL_ACTIVITY_SELECTION, WALLET_SCREEN
} from '../../../constans/screens';
import { PrimaryButton } from '../../../components/Button';

const coverage = [
    {
        name: 'Mountain and helicopter rescue',
        amount: '30000'
    },
    {
        name: 'Ski pass refund',
        amount: '500'
    },
    {
        name: 'Ski equipment',
        amount: '1500'
    }
];

class CountrySelectionScreen extends Component {
    state = { loading: true, endLoading: false };

    navigationOptions = { header: null };

    constructor(props) {
        super(props);

        this.startLoading = this.startLoading.bind(this);
    }


    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1000)
    }

    startLoading() {
        this.setState({ endLoading: true });

        setTimeout(() => {
            this.setState({ endLoading: false });
            this.props.navigation.navigate(WALLET_SCREEN, {
                origin: 'result',
            })
        }, 1000)

    }

    render() {
        const { loading, endLoading } = this.state;

        return (
            <View style={styles.container}>
                {loading ? (
                        <View style={{ alignSelf: 'center', justifyContent: 'center', flex: 1 }}>
                            <Progress.Circle size={70} indeterminate={true} thickness={5} />
                        </View>
                    ) :
                    (
                        <Animatable.View animation="fadeIn"
                                         style={{ flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                            <View>
                                <Image source={require('./images/undraw_files1_9ool.png')}
                                       style={[styles.image, { height: 100, width: 90, marginTop: 80 }]} />
                                <Text style={[styles.title, { marginBottom: 10, marginTop: 30 }]}>Your ski trip to
                                    France is only partly covered currently.</Text>
                                <Text style={[styles.subTitle, { marginBottom: 10 }]}>We suggest you to purchase this
                                    additional coverage of the following services:</Text>
                                {coverage.map(item => (
                                    <View key={item.name} style={localStyles.coverageRow}>
                                        <Text style={localStyles.coverageName}>{item.name}</Text>
                                        <Text style={localStyles.coverageAmount}>Up to {item.amount}€</Text>
                                    </View>
                                ))}
                                <Text style={{ alignSelf: 'center', fontSize: 12, color: '#666', marginTop: 10 }}>And 15
                                    other upgraded services</Text>
                            </View>
                            <View style={styles.footer}>
                                <PrimaryButton onPress={() => this.startLoading()}
                                               label={endLoading ? <Progress.Circle size={21} indeterminate={true} thickness={10} color="white"/>: "Purchase Upgrade for 5€"} />
                            </View>
                        </Animatable.View>
                    )}
            </View>
        )
    }
};

export default CountrySelectionScreen;
