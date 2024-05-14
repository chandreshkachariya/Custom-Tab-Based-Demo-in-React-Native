

import React from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { APP_ICONS } from '../assets';

const DATA = [
  {
    id: 1,
    title: 'Contact Us',
    subTitle: 'Let us know how we can help',
    uri: APP_ICONS.mailIcon,
  },
  {
    id: 2,
    title: 'About',
    subTitle: 'Terms and Canditions',
    uri: APP_ICONS.info,
  },
  {
    id: 3,
    title: 'Login',
    subTitle: '',
    uri: APP_ICONS.logIn,
  },
];

export default function Profile() {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <FlatList
        ListHeaderComponent={() => (
          <Text
            style={{
              fontSize: 25,
              color: 'black',
              margin: 12,
              fontWeight: '700'
            }}>
            My Profile
          </Text>
        )}
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item: any)=> item.id}
      />
    </SafeAreaView>
  );
}


const Item = ({ item }: any) => (

  <Pressable onPress={() => itemClick(item)}>
    <View style={{ flexDirection: 'row', padding: 8, borderRadius: 8, borderColor: 'black' }}>
      <View style={{ margin: 8 }}>
        <Image
          source={item.uri}
          resizeMode="contain"
          style={{ width: 25, height: 44, backgroundColor: 'white' }}
        />
      </View >

      <View style={{ margin: 8, alignSelf: 'center', flex: 1 }}>
        <Text style={{ fontSize: 20 }}>{item.title}</Text>
        {
          item.subTitle != "" ? <Text>{item.subTitle}</Text> : null
        }
      </View >
    </View>
  </Pressable>
);

function itemClick(item: any) {
  switch (item.id) {
    case 1:
      console.warn("Press Contact Us")
      break;
    case 2:
      console.warn("Press About")
      break;
    case 3:
      console.warn("Press Login")
      break;
    default:
      console.warn("Press default")
      break;
  }
  // console.warn(item.id)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});