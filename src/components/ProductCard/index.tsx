import React, {useMemo, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styleHelper from './style';
import Props from './prop';

export default function ProductCard({product, wrapperStyle, onPress}: Props) {
  const styles = styleHelper(true);
  const [imageHeight, setImageHeight] = useState<number>(0);
  const [imageWidth, setImageWidth] = useState<number>(0);

  const imageDimension = useMemo(() => {
    return {
      imageHeight,
      imageWidth,
    };
  }, [imageHeight, imageWidth]);

  Image.getSize(product.image, (width, height) => {
    // console.log('');
    // console.log('================================');
    // console.log('');
    // console.log('ID:', product.id);
    // console.log('WIDTH:', width);
    // console.log('HEIGHT:', height);
    // console.log('');
    // console.log('================================');
    // console.log('');

    setImageHeight(height);
    setImageWidth(width);
  });

  return (
    <TouchableOpacity onPress={onPress} style={[styles.wrapper, wrapperStyle]}>
      <View style={[styles.container]}>
        <View style={[styles.imageContainer]}>
          <Image
            source={{uri: product.image}}
            resizeMode="cover"
            style={[styles.image]}
          />
        </View>

        <Text style={[styles.text, {flex: 1}]}>{product.title}</Text>
        <Text style={[styles.text, styles.price]}>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
