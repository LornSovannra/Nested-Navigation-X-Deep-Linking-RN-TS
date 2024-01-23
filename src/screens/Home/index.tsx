import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {HomeScreenProps} from '../../types';
import {ProductCard} from '../../components';
import {Product} from '../../models';
import styleHelper from './style';
import {MasonryFlashList, MasonryListRenderItem} from '@shopify/flash-list';

export default function Home({navigation}: HomeScreenProps) {
  const styles = styleHelper();
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const products = await response.json();

      const tProducts = [];

      for (let product of products) {
        tProducts.push(
          new Product(product.id, product.title, product.price, product.image),
        );
      }

      setProducts(tProducts);
      setIsFetching(false);
    } catch (error) {
      console.log('ERROR WHILE FETCHING PRODUCTS:', JSON.stringify(error));
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderItem: MasonryListRenderItem<Product> = ({item, index}) => {
    return (
      <ProductCard
        product={item}
        wrapperStyle={{
          marginLeft: index % 2 !== 0 ? 5 : 0,
          marginRight: index % 2 === 0 ? 5 : 0,
        }}
        onPress={() => navigation.navigate('PRODUCT_DETAIL', {id: item.id})}
      />
    );
  };

  if (isFetching) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator />
        <Text style={[styles.text, {fontSize: 16, marginTop: 15}]}>
          Wating...
        </Text>
      </View>
    );
  }

  if (products.length === 0) {
    return (
      <View style={[styles.dataNotFoundContainer]}>
        <Text style={[styles.text]}>No Data Found</Text>
      </View>
    );
  }

  // UI KIT
  return (
    <View style={[styles.wrapper]}>
      <MasonryFlashList
        data={products}
        numColumns={2}
        renderItem={renderItem}
        estimatedItemSize={200}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}
