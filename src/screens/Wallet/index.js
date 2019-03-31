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
    Animated,
    Easing,
    SegmentedControlIOS,
    FlatList
} from 'react-native';
import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable';


import { lightBlue, green, red, darkBlue } from '../../styles/colors';

const insurancesFinland = [
    {
        name: 'European Health Insurance',
        image: require(`./images/eu_flag.png`),
        description: '',
        provider: 'National Healthcare of Hungary'
    },
    {
        name: 'Finnish Student Health Service',
        image: require(`./images/ayy.png`),
        description: '',
        provider: 'Aalto University Student Union'
    },
    {
        name: 'Credit Card Travel Insurance',
        image: require(`./images/granit_bank.jpg`),
        description: '',
        provider: 'Gránit Bank & MAPFRE Insurance'
    },
];

const insurancesFrance = [
    {
        name: 'European Health Insurance',
        image: require(`./images/eu_flag.png`),
        description: '',
        provider: 'National Healthcare of Hungary'
    },
    {
        name: 'Credit Card Travel Insurance',
        image: require(`./images/granit_bank.jpg`),
        description: '',
        provider: 'Gránit Bank & MAPFRE Insurance'
    },
    {
        name: 'Winter Sports Upgrade',
        image: require(`./images/munich.png`),
        description: '',
        provider: 'Munich Re'
    },
];

const activitiesFinland = [
    {
        logo: require('./images/biking.png'),
        name: 'Mountain Biking',
        percentage: 100,
        currentPercentage: 0
    },
    {
        logo: require('./images/climbing.png'),
        name: 'Climbing',
        percentage: 25,
        currentPercentage: 0

    },
    {
        logo: require('./images/skiing.png'),
        name: 'Skiing',
        percentage: 60,
        currentPercentage: 0

    },
    {
        logo: require('./images/flying.png'),
        name: 'Flying',
        percentage: 71,
        currentPercentage: 0
    },
];

const activitiesFrance = [
    {
        logo: require('./images/skiing.png'),
        name: 'Winter Sports',
        percentage: 100,
        currentPercentage: 0

    },
    {
        logo: require('./images/mountains.png'),
        name: 'Off-piste Skiing',
        percentage: 100,
        currentPercentage: 0

    },
    {
        logo: null,
        name: '',
        percentage: 0,
        currentPercentage: 0

    },
    {
        logo: null,
        name: '',
        percentage: 0,
        currentPercentage: 0

    },

];

const coverageFinland = [
    {
        logo: require('./images/ambulance.png'),
        name: 'Emergency Ambulance',
        percentage: 100
    },
    {
        logo: require('./images/dental.png'),
        name: 'Dental Care',
        percentage: 95
    },
    {
        logo: require('./images/medicine.png'),
        name: 'Medicine',
        percentage: 65
    },
    {
        logo: require('./images/mental.png'),
        name: 'Mental Wellbeing Support',
        percentage: 20
    }
]

const coverageFrance = [
    {
        logo: require('./images/checkup.png'),
        name: 'Medical Expenses',
        percentage: 100
    },
    {
        logo: require('./images/copter.png'),
        name: 'Mountain Rescue',
        percentage: 100
    },
    {
        logo: require('./images/ambulance.png'),
        name: 'Transportation',
        percentage: 100
    },
    {
        logo: require('./images/medicine.png'),
        name: 'Medicines & accessories',
        percentage: 100
    }
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '800',
        marginBottom: 5,
        marginTop: 25,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15
    },
    insuranceRow: {
        flexDirection: 'row',
        marginTop: 20
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginTop: 10
    },
    actionTitle: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        // marginRight: 10,
        alignSelf: 'center',
        marginTop: 10
    },
    logo: {
        width: 35,
        height: 35,
        alignSelf: 'center',
    },
    actionItem: {
        maxWidth: 70,
        alignContent: 'center',
        marginRight: 15
    },
    titleSentence: {
        fontSize: 36,
        fontWeight: "800",
        marginTop: 60,
    }
});

const getColor = (value) => {
    return darkBlue;
};

const ContentSection = ({ insurances, activities, coverage, loaded, state, titleSentence}) => {
    return (
        <Animatable.View animation={!loaded ? 'fadeIn' : undefined}>
            <Text style={styles.titleSentence}>{titleSentence}</Text>
            <Text style={styles.sectionTitle}>Current Policies</Text>
            {insurances.map(item => (
                    <View style={styles.insuranceRow} key={item.name}>
                        <Image source={item.image} style={styles.image} />
                        <View>
                            <Text style={{ fontWeight: '600', fontSize: 16 }}>{item.name}</Text>
                            <Text style={{ fontWeight: '300', fontSize: 14, color: '#777' }}>{item.provider}</Text>
                        </View>
                    </View>
                )
            )}

            <Text style={[styles.sectionTitle, {marginTop: 55}]}>Your Coverage</Text>
            <View style={styles.actionRow}>
                <FlatList
                    data={activities}
                    keyExtractor={item => item.name}
                    horizontal={true}
                    extraData={state}
                    renderItem={({item}) => (<View key={item.name} style={styles.actionItem}>
                        <Progress.Circle size={70}
                            // progress={progress}
                                         progress={loaded ? item.percentage / 100 : 0}
                                         color={getColor(item.percentage / 100)}
                                         unfilledColor="white"
                                         borderWidth={0}
                                         thickness={2}
                                         showsText={true}
                                         animationType="timing"
                                         animationConfig={{ duration: 30000 }}
                                         formatText={() => <Image source={item.logo} style={styles.logo}
                                                                  resizeMode="contain" />}
                        />
                        <Text style={styles.actionTitle}>{item.name}</Text>
                    </View>)}
                />
            </View>
            <View style={styles.actionRow}>
                <FlatList
                    data={coverage}
                    horizontal={true}
                    extraData={state}
                    keyExtractor={item => item.name}
                    renderItem={({item}) => (<View key={item.name} style={styles.actionItem}>
                        <Progress.Circle size={70}
                            // progress={progress}
                                         progress={loaded ? item.percentage / 100 : 0}
                                         color={getColor(item.percentage / 100)}
                                         unfilledColor="white"
                                         borderWidth={0}
                                         thickness={2}
                                         showsText={true}
                                         animationType="timing"
                                         animationConfig={{ duration: 30000 }}
                                         formatText={() => <Image source={item.logo} style={styles.logo}
                                                                  resizeMode="contain" />}
                        />
                        <Text style={styles.actionTitle}>{item.name}</Text>
                    </View>)}
                />
            </View>
            <View style={{height: 100}}/>
        </Animatable.View>
    )
};

class WalletScreen extends Component {
    constructor(props, context) {
        super(props, context);


        this.state = {
            activities: activitiesFinland,
            coverage: coverageFinland,
            insurances: insurancesFinland,
            loaded: false,
            progress: new Animated.Value(0),
            selectedIndex: 0,
            titleSentence: "Studying in Finland"
        };

        this.timeout = this.timeout.bind(this);
        this.setData = this.setData.bind(this);
    }

    setData(index) {
        if (index === 0) {
            this.setState({
                activities: activitiesFinland,
                coverage: coverageFinland,
                insurances: insurancesFinland,
                loaded: false,
                selectedIndex: 0,
                titleSentence: "Studying in Finland"
            })
        }
        else {
            this.setState({
                activities: activitiesFrance,
                coverage: coverageFrance,
                insurances: insurancesFrance,
                loaded: false,
                selectedIndex: 1,
                titleSentence: "Ski Trip to France"
            })
        }

        this.timeout()

    }

    timeout() {
        setTimeout(() => {
            this.setState({ loaded: true });
        }, 500)
    }

    componentDidMount() {
        // Animated.timing(this.state.progress, {
        //     toValue: 10,
        //     duration: 1250,
        //     // easing: Easing.linear,
        //     // useNativeDriver: true
        // }).start();

        this.timeout()

        this.props.navigation.addListener('didFocus', () => {
            // this.setState({ isFocused: true })
            // console.log("navig")

            const origin = this.props.navigation.getParam('origin', 'local');

            if (origin === 'result') {
                // console.log(origin, 'set')
                this.setData(1)
            }
        });


    }

    render() {
        const { activities, coverage, insurances, loaded, selectedIndex, titleSentence } = this.state;

        return (
            <View style={styles.container}>
                <ScrollView contentOffset={{ y: 80 }}
                            style={{ paddingHorizontal: 20, paddingTop: 30, paddingBottom: 160 }}>
                    <SegmentedControlIOS
                        values={['Finland', 'France']}
                        selectedIndex={selectedIndex}
                        onChange={(event) => {
                            this.setData(event.nativeEvent.selectedSegmentIndex);
                            this.setState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
                        }}
                    />
                    <ContentSection insurances={insurances} activities={activities} coverage={coverage}
                                    loaded={loaded} state={this.state} titleSentence={titleSentence}/>
                </ScrollView>
            </View>
        )
    }
}

export default WalletScreen;


