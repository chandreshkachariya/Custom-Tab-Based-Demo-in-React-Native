/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "../Tab_Based_Demo/Components/HomeScreen";
import RaceDayTips from './Components/RaceDayTips';
import Racing from './Components/Racing';
import HitList from './Components/HitList';
import Profile from './Components/Profile';
import Tabbar from './Components/Tabbar';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => (
        <Tabbar {...props} />
      )}>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name="Race Day Tips" component={RaceDayTips} />
        <Tab.Screen name="Racing" component={Racing} />
        <Tab.Screen name="Hit List" component={HitList} />
        <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}} />
      </Tab.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Image
                    source={focused ? require("./assets/tab/home_selected.png") : require("./assets/tab/home.png")}
                    resizeMode="contain"
                    style={{ width: 22 }}
                  />
                </View>
              );
            },
          }} />
        <Tab.Screen name="Race Day Tips" component={RaceDayTips} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={focused ? require("./assets/tab/dollar-sign-small_selected.png") : require("./assets/tab/dollar-sign-small.png")}
                  resizeMode="contain"
                  style={{ width: 22 }}
                />
              </View>
            );
          },
        }} />
        <Tab.Screen name="Racing" component={Racing} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={focused ? require("./assets/tab/racing_selected.png") : require("./assets/tab/racing.png")}
                  resizeMode="contain"
                  style={{ width: 22 }}
                />
              </View>
            );
          },
        }} />
        <Tab.Screen name="Hit List" component={HitList} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={focused ? require("./assets/tab/hitList_selected.png") : require("./assets/tab/hitList.png")}
                  resizeMode="contain"
                  style={{ width: 22 }}
                />
              </View>
            );
          },
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={focused ? require("./assets/tab/user_selected.png") : require("./assets/tab/user.png")}
                  resizeMode="contain"
                  style={{ width: 25 }}
                />
              </View>
            );
          },
        }} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
