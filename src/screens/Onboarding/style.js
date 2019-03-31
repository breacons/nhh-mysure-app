import { StyleSheet } from 'react-native';
import { darkBlue } from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    title: {
        fontSize: 24,
        alignSelf: 'center',
        marginTop: 80,
        textAlign: 'center',
        fontWeight: '300',
        paddingHorizontal: 20
    },
    subTitle: {
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 20,
        textAlign: 'center',
        fontWeight: '300',
        paddingHorizontal: 20
    },
    image: {
        width: 250,
        height: 150,
        alignSelf: 'center',
        marginTop: 150
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 20,

    },
    footerText: {
        fontWeight: "600",
        color: darkBlue
    }
});

export default styles;
