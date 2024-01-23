import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Product} from '../../models';
import {RootStackParamList} from '../../types';

type RouteParams = {
  id: number;
};

export default function ProductDetail() {
  const params = useRoute<RouteProp<{params: RouteParams}>>().params;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>();

  async function fetchData() {
    setIsFetching(true);

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`,
      );
      const json = await response.json();

      // console.log('RESPONSE:', JSON.stringify(json));

      setProduct(json);
      setIsFetching(false);
    } catch (error) {
      console.log(
        'ERROR WHILE FETCHING PRODUCT DETAIL:',
        JSON.stringify(error),
      );
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text style={{width: 150}} numberOfLines={1}>
          {product?.title}
        </Text>
      ),
      // headerLeft() {
      //   return (
      //     <TouchableOpacity onPress={() => navigation.goBack()}>
      //       <Text>Back</Text>
      //     </TouchableOpacity>
      //   );
      // },
    });
  }, [product?.title]);

  if (isFetching) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator />
        <Text
          style={[styles.text, {color: 'black', fontSize: 16, marginTop: 15}]}>
          Wating...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.container]}>
        {product && (
          <View style={[styles.productCard]}>
            <Text style={[styles.text]}>ID: {product.id}</Text>
            <Text style={[styles.text]}>NAME: {product.title}</Text>
            <Text style={[styles.text]}>PRICE: ${product.price}</Text>
            <Image
              source={{uri: product.image}}
              resizeMode="cover"
              style={[styles.image]}
            />
          </View>
        )}

        <TouchableOpacity onPress={() => navigation.navigate('CART')}>
          <View style={[styles.btnCartContainer]}>
            <Text>Go to Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    gap: 20,
    paddingBottom: 40,
  },
  loadingContainer: {
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
  image: {
    width: SCREEN_WIDTH - 30 - 30,
    height: SCREEN_WIDTH * 1.3,
    marginTop: 15,
    borderRadius: 10,
  },
  productCard: {
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 15,
    margin: 15,
    width: SCREEN_WIDTH - 30,
  },
  btnCartContainer: {
    backgroundColor: 'grey',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
