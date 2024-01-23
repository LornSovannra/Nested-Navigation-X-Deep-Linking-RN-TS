import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import {CartScreenProps} from '../../types';
import styleHelper from './style';

export default function Cart({navigation}: CartScreenProps) {
  const styles = styleHelper();

  // UI KIT
  return (
    <ScrollView style={[styles.wrapper]}>
      <View>
        <Image
          source={{
            uri: 'https://mir-s3-cdn-cf.behance.net/user/276/e30318414651335.6300e8aba5435.jpg',
          }}
        />
      </View>
    </ScrollView>
  );
}
