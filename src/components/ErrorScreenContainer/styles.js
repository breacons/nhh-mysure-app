import { StyleSheet } from 'react-native';
import { darkGray, red } from '../../styles/colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  errorGraphics: {
    width: '100%',
    marginTop: 100,
  },
  circle: {
    backgroundColor: red,
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
  },
  warning: {
    alignSelf: 'center',
    position: 'absolute',
    top: 30,
    left: 110,
  },
  content: {
    marginHorizontal: 35,
    marginTop: 70,
  },
  title: {
    fontWeight: '800',
    color: darkGray,
    fontSize: 32,
    marginBottom: 20,
  },
  paragraph: {
    marginBottom: 10,
    fontSize: 16,
    color: darkGray,
  },
  buttonContainer: {
    marginTop: 10,
  },
  boldText: {
    fontWeight: '600',
  },
  loginTextContainer: {
    marginVertical: 25,
  },
  loginText: {
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default styles;
