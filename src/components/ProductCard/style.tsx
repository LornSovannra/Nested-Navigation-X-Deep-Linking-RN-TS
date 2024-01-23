import {Dimensions, StyleSheet} from 'react-native';

export default function styleHelper(isDarkMode: boolean) {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const SCREEN_HEIGHT = Dimensions.get('window').height;

  return StyleSheet.create({
    wrapper: {},
    container: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 15,
      gap: 10,
    },
    id: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    imageContainer: {
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: 15,
    },
    image: {
      width: SCREEN_WIDTH / 2 - 15 - 30,
      height: 200,
    },
    price: {
      color: 'blue',
      fontSize: 21,
    },
    text: {},
  });
}
