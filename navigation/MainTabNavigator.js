import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import NewsScreen from '../screens/NewsScreen';
import CameraScreen from '../screens/CameraScreen';
import ItemScreen from '../screens/ItemScreen';
import DetailScreen from '../screens/DetailScreen';

const config = Platform.select({
  
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail:DetailScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <Ionicons name="ios-home" size={28} color="#697184" />
  ),
};

HomeStack.path = '';

const ItemStack = createStackNavigator(
  {
    Item: ItemScreen,
  },
  config
);

ItemStack.navigationOptions = {
  tabBarLabel: 'Last Scan',
  tabBarIcon: ({ focused }) => (
    <Ionicons name="ios-shirt" size={28} color="#697184" />
  ),
};

ItemStack.path = '';











const FavoriteStack = createStackNavigator(
  {
    Favorites: FavoritesScreen,
  },
  config
);

FavoriteStack.navigationOptions = {
  tabBarLabel: 'Favorites',
  tabBarIcon: ({ focused }) => (
    <Ionicons name="md-heart-empty" size={28} color="#697184" />
  ),
};

FavoriteStack.path = '';


const NewsStack = createStackNavigator(
  {
    News: NewsScreen,
  },
  config
);

NewsStack.navigationOptions = {
  tabBarLabel: 'News',
  tabBarIcon: ({ focused }) => (
    <Ionicons name="ios-information-circle-outline" size={28} color="#697184" />
  ),
};

NewsStack.path = '';



const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';


const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <Ionicons name="ios-options" size={28} color="#697184" />
  ),
};

SettingsStack.path = '';

const CameraStack = createStackNavigator(
  {
    Camera: CameraScreen,
    Item:ItemScreen
  },
  config
);

CameraStack.navigationOptions = {
  
  tabBarLabel: 'Scan',
  tabBarIcon: ({ focused }) => (
    <Ionicons name="ios-camera" size={28} color="#697184" />
  ),
};

CameraStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  FavoriteStack,
  CameraStack,
 NewsStack,
 SettingsStack,
 },
 {
  tabBarOptions : {
    activeTintColor:'#697184',
    style: {
      backgroundColor: '#d8cfd0',
    }
  }
 
});



tabNavigator.path = '';

export default tabNavigator;
