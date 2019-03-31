import React, { Component, useState } from 'react';
import { View, Image, Picker, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import { PrimaryButton } from '../../../components/Button';
import { darkBlue } from '../../../styles/colors';

import styles from '../style'
import { WALLET_SCREEN } from '../../../constans/screens';


class LoadingAndResultScreen extends Component {
    navigationOptions = { header: null };

    componentDidMount(){
        setTimeout(() => this.props.navigation.navigate(WALLET_SCREEN), 2000)
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('../images/loading.png')} style={styles.image} />
                    <Text style={styles.title}>Can you give us a minute?</Text>
                    <Text style={styles.subTitle}>We are gathering all the information you are going to need.</Text>
                    <Progress.Bar
                        progress={0.3}
                        width={300}
                        indeterminate={true}
                        color={darkBlue}
                        height={10}
                        style={{ alignSelf: 'center', marginTop: 50 }}

                    />
                </View>
            </View>
        )
    }
};

export default LoadingAndResultScreen;
