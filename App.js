import React from 'react';
import Expo from 'expo';
import {
  View, Linking, StatusBar, Image, StyleSheet,ImageBackground
} from 'react-native';

// import { Button } from './src/components/Button'
import RootStack from './src/screens/RootStack';
import { validateAccountActivationToken } from './src/services/authentication';
import worldMap from "./src/static/img/world_map.png";
import { purple } from "./src/styles/colors";
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
console.disableYellowBox = true;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: purple,

  },

  map: {
    width: 380,
    height: 230,
    opacity: 0.2,
    position: 'absolute',
    // left: -45,

    zIndex: -1,
  },
  content: {
    flex: 1,
    width: '100%',
    height: 300,
    backgroundColor: 'red',
    zIndex: 10,
  },
});


export default class App extends React.Component {

  render() {
    return (
      // <View style={styles.container}>
      //     <Button label="Label" onPress={() => console.log( "Pressed" )}/>
      //     <Text>Open up App.js to start working on your app! Helo</Text>
      //     <Text>Changes you make will automatically reload.</Text>
      //     <Text>Shake your phone to open the developer menu.</Text>
      // </View>
      <View style={styles.screen}>

        <StatusBar
          barStyle="light-content"
        />
        {/*<Image source={worldMap} style={{*/}
          {/*width: 380,*/}
          {/*height: 230,*/}
          {/*opacity: 0.2,*/}
          {/*position: 'absolute',*/}
          {/*// left: -45,*/}

          {/*zIndex: -1,*/}
        {/*}} />*/}


        <View style={styles.content}>
          <ImageBackground source={worldMap} style={{width: '100%', height: '100%'}}>

          <RootStack />
        </ImageBackground>
        </View>

      </View>

    );
  }
}
