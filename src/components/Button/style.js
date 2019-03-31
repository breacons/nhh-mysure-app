import { StyleSheet } from "react-native";
import { darkBlue, green, lightBlue, darkGray, purple } from '../../styles/colors';


const styles = StyleSheet.create({
  block: {
    width: '100%'
  },
  button: {
    paddingVertical: 12,
    borderRadius: 2,
    height: 45,
    alignItems: 'center',

  },

  primary: {
    backgroundColor: darkBlue,
    borderRadius: 25,


  },
  secondary: {
    borderColor: green,
    borderWidth: 1,
    borderRadius: 25,
    marginTop: 20

  },
  label: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 16,

  }

});

export default styles;
