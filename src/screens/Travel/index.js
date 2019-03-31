import React, { Component, useState } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
    TRAVEL_DESTINATION_SELECTION,
    TRAVEL_ACTIVITY_SELECTION,
    TRAVEL_RESULTS
} from '../../constans/screens';
import DestinationSelection from './DestinationSelection';
import ActivitySelection from './ActivitySelection';
import Results from './Results';

const TravelStack = createStackNavigator(
    {
        [TRAVEL_DESTINATION_SELECTION]: DestinationSelection,
        [TRAVEL_ACTIVITY_SELECTION]: ActivitySelection,
        [TRAVEL_RESULTS]: Results,
    },
    {
        initialRouteName: TRAVEL_DESTINATION_SELECTION,
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    },
);

export default TravelStack


