import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  PRODUCT_DETAIL: {id: number};
  FAVORITE: undefined;
  PROFILE: undefined;
  CART: undefined;
};

// PARAMS
export type HomeStackNavigatorParamList = {
  Home: undefined;
  PRODUCT_DETAIL: {
    id: number;
  };
  CART: undefined;
};

export type FavoriteStackNavigatorParamList = {
  FAVORITE: undefined;
  PRODUCT_DETAIL: {
    id: number;
  };
  CART: undefined;
};

export type ProfileStackNavigatorParamList = {
  PROFILE: undefined;
  PRODUCT_DETAIL: {
    id: number;
  };
};

export type CartStackNavigatorParamList = {
  PROFILE: undefined;
  PRODUCT_DETAIL: {
    id: number;
  };
};

// PROPS
export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PRODUCT_DETAIL'
>;

export type FavoriteScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'FAVORITE'
>;

export type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PROFILE'
>;

export type CartScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CART'
>;
