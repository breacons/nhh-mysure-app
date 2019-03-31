import React, { Component, useState } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
    COUNTRY_SELECTION_SCREEN, EHIC_SELECTION_SCREEN, OCCUPATION_SELECTION_SCREEN, UNIVERSITY_SELECTION_SCREEN, DIGIME_SCREEN, LOADING_AND_RESULT_SCREEN
} from '../../constans/screens';

import HomeCountrySelection from './HomeCountrySelection';
import EhicSelection from './EhicSelection';
import OccupationSelection from './OccupationSelection';
import UniversitySelection from './UniversitySelection';
import Digime from './Digime';
import LoadingAndResult from './LoadingAndResult';


const OnboardigStack = createStackNavigator(
    {
        [COUNTRY_SELECTION_SCREEN]: HomeCountrySelection,
        [EHIC_SELECTION_SCREEN]: EhicSelection,
        [OCCUPATION_SELECTION_SCREEN]: OccupationSelection,
        [UNIVERSITY_SELECTION_SCREEN]: UniversitySelection,
        [DIGIME_SCREEN]: Digime,
        [LOADING_AND_RESULT_SCREEN]: LoadingAndResult,
    },
    {
        initialRouteName: COUNTRY_SELECTION_SCREEN,
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
            gesturesEnabled: true
        }
    },
);

export default OnboardigStack
