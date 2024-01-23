import React from 'react';
import {Image, View} from 'react-native';
import {
  HomeScreen,
  ProductDetailScreen,
  FavoriteScreen,
  ProfileScreen,
  CartScreen,
} from './src/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  FavoriteStackNavigatorParamList,
  HomeStackNavigatorParamList,
  ProfileStackNavigatorParamList,
} from './src/types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();
const FavoriteStack =
  createNativeStackNavigator<FavoriteStackNavigatorParamList>();
const ProfileStack =
  createNativeStackNavigator<ProfileStackNavigatorParamList>();

const linking = {
  prefixes: ['awesomeproject://'],
  config: {
    initialRouteName: 'Home' as const,
    screens: {
      Home: 'home',
      PRODUCT_DETAIL: `product_detail/:id`,
      FAVORITE: `favorite`,
    },
  },
};

function HomeTab() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerStyle: {backgroundColor: 'black'}}}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerTintColor: 'white'}}
      />

      <HomeStack.Screen
        name="PRODUCT_DETAIL"
        component={ProductDetailScreen}
        options={{
          headerTintColor: 'black',
          headerStyle: {backgroundColor: 'white'},
        }}
      />

      <HomeStack.Group screenOptions={{presentation: 'modal'}}>
        <HomeStack.Screen
          name="CART"
          component={CartScreen}
          options={{
            headerTintColor: 'black',
            headerStyle: {backgroundColor: 'white'},
          }}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}

function FavoriteTab() {
  return (
    <FavoriteStack.Navigator
      initialRouteName="FAVORITE"
      screenOptions={{headerStyle: {backgroundColor: 'black'}}}>
      <FavoriteStack.Screen
        name="FAVORITE"
        component={FavoriteScreen}
        options={{headerTintColor: 'white'}}
      />

      <FavoriteStack.Screen
        name="PRODUCT_DETAIL"
        component={ProductDetailScreen}
        options={{
          headerTintColor: 'black',
          headerStyle: {backgroundColor: 'white'},
        }}
      />

      <FavoriteStack.Screen
        name="CART"
        component={CartScreen}
        options={{
          headerTintColor: 'black',
          headerStyle: {backgroundColor: 'white'},
        }}
      />
    </FavoriteStack.Navigator>
  );
}

function ProfileTab() {
  return (
    <ProfileStack.Navigator
      initialRouteName="PROFILE"
      screenOptions={{headerStyle: {backgroundColor: 'black'}}}>
      <ProfileStack.Screen
        name="PROFILE"
        component={ProfileScreen}
        options={{headerTintColor: 'white'}}
      />

      <ProfileStack.Screen
        name="PRODUCT_DETAIL"
        component={ProductDetailScreen}
        options={{
          headerTintColor: 'black',
          headerStyle: {backgroundColor: 'white'},
        }}
      />
    </ProfileStack.Navigator>
  );
}

function homeTabBarIcon(focused: boolean) {
  return (
    <View>
      <Image
        source={require('./src/assets/icons/home.png')}
        width={25}
        height={25}
        tintColor={focused ? 'white' : 'black'}
      />
    </View>
  );
}

function favoriteTabBarIcon(focused: boolean) {
  return (
    <View>
      <Image
        source={require('./src/assets/icons/favorite.png')}
        width={25}
        height={25}
        tintColor={focused ? 'white' : 'black'}
      />
    </View>
  );
}

function profileTabBarIcon(focused: boolean) {
  return (
    <View>
      <Image
        source={require('./src/assets/icons/profile.png')}
        width={25}
        height={25}
        tintColor={focused ? 'white' : 'black'}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#4A4B51'},
        }}>
        <Tab.Screen
          name="HomeTab"
          component={HomeTab}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => homeTabBarIcon(focused),
          }}
        />

        <Tab.Screen
          name="FavoriteTab"
          component={FavoriteTab}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => favoriteTabBarIcon(focused),
          }}
        />

        <Tab.Screen
          name="ProfileTab"
          component={ProfileTab}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => profileTabBarIcon(focused),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
