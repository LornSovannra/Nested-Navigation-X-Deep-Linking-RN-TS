import {StyleSheet} from 'react-native';

export default function styleHelper() {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: 'black',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
    },
    contentContainer: {
      padding: 10,
      paddingBottom: 40,
    },
    loadingContainer: {
      justifyContent: 'center',
    },
    dataNotFoundContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
    },
    text: {
      color: 'white',
      fontSize: 24,
    },
  });
}
