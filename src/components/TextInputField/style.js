import { StyleSheet } from "react-native";
import { red, darkBlue, lightBlue, darkGray, white , green} from '../../styles/colors';


const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ccd3d3',
    // fontWeight: 'bold',
    // fontSize: 30,
    marginBottom: 0

  },
  input: {
    borderBottomColor: white,
    borderBottomWidth: 1,
    paddingVertical: 5,
    fontSize: 16,
    color: white
  },
  errorLabel: {
    marginTop: 5,
    marginBottom: 3,
    color: red
  },
  label: {
    color: green,
    fontSize: 12
  }
});

export default styles;
