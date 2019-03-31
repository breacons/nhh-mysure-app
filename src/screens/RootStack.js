import React from 'react';
import {Image} from 'react-native'
import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator,
} from 'react-navigation';
// import { Ionicons } from '@expo/vector-icons';

import {
    ONBOARDING_SCREEN,
    WALLET_SCREEN,
    TRAVEL_SCREEN,
    ASSISTANCE_SCREEN,
    GET_STARTED_SCREEN
} from '../constans/screens';

import { darkBlue } from '../styles/colors';

const insuranceActive = require('./images/insurance-active.png');
const insurance = require('./images/insurance.png');
const travel = require('./images/travel.png');
const travelActive = require('./images/travel-active.png');
const assistance = require('./images/assistance.png');
const assistanceActive = require('./images/assistance-active.png');


import OnboardigStack from './Onboarding'
import WalletScreen from './Wallet'
import AssistanceScreen from './Assistance'
import TravelScreen from './Travel'
import GetStartedScreen from './GetStarted'

const iconStyle = { width: 20, height: 20 };

WalletScreen.navigationOptions = {
    tabBarLabel: 'Insurances',
    tabBarIcon: ({ focused, tintColor }) => (
        focused ? <Image
                source={insuranceActive}
                style={iconStyle} resizeMode="contain"
            />
            :
            <Image
                source={insurance}
                style={iconStyle} resizeMode="contain"
            />
    ),
};

TravelScreen.navigationOptions = {
    tabBarLabel: 'Travel',
    tabBarIcon: ({ focused, tintColor }) => (
        focused ? <Image
                source={travelActive}
                style={iconStyle} resizeMode="contain"
            />
            :
            <Image
                source={travel}
                style={iconStyle} resizeMode="contain"
            />
    ),
};

AssistanceScreen.navigationOptions = {
    tabBarLabel: 'Assistance',
    tabBarIcon: ({ focused, tintColor }) => (
        focused ? <Image
                source={assistanceActive}
                style={iconStyle} resizeMode="contain"
            />
            :
            <Image
                source={assistance}
                style={iconStyle} resizeMode="contain"
            />
    ),
};



const WalletStack = createBottomTabNavigator({
        [WALLET_SCREEN]: WalletScreen,
        [TRAVEL_SCREEN]: TravelScreen,
        [ASSISTANCE_SCREEN]: AssistanceScreen
    },
    {
        initialRouteName: WALLET_SCREEN,
        tabBarOptions: {
            activeTintColor: darkBlue,
            inactiveTintColor: '#B3B3B3',
        }
    }
);

const DefaultStack = createStackNavigator(
    {
        [GET_STARTED_SCREEN]: GetStartedScreen,
        [ONBOARDING_SCREEN]: OnboardigStack,
        'WalletStack' : WalletStack
    },
    {
        initialRouteName: 'WalletStack',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

export default DefaultStack;
