import React, { Component } from 'react';
import { View } from 'react-native';
import { CardIOView, CardIOUtilities } from 'react-native-awesome-card-io';

export default class CardIOExample extends Component {

    componentWillMount() {
        CardIOUtilities.preload();
    }

    didScanCard = (card) => {
        // the scanned card
        console.log(card)
    }

    render() {
        return (
            <View>
                <CardIOView
                    didScanCard={this.didScanCard}
                    style={{ flex: 1 }}
                />
            </View>
        );
    }
}
