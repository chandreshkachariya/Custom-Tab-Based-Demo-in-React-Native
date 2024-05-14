import React from "react";
import { Image, ImageBackground, ImageSourcePropType, Platform, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'

//CONSTANT & ASSETS
import { APP_ICONS } from '../assets';
import { STRINGS } from "../constants";
import { Text } from "react-native-paper";
import { getScaleSize } from "../constants/scaleSize";

function Tabbar(props: any) {


    function onPress(name: string, index: number) {
        props.navigation.navigate(name);
    }

    const images = [APP_ICONS.home, APP_ICONS.dollarSignSmall, APP_ICONS.racing, APP_ICONS.hitList, APP_ICONS.user]
    const imagesSelected = [APP_ICONS.homeSelected, APP_ICONS.dollarSignSmallSelected, APP_ICONS.racingSelected, APP_ICONS.hitListSelected, APP_ICONS.userSelected]
    const titles = [STRINGS.home, STRINGS.raceDayTips, STRINGS.racing, STRINGS.hitList, STRINGS.profile]
    return (
        <View >
            <View style={styles.tabContainer}>
                {props.state.routes.map((route: any, index: number) => {
                    return (
                        <TabItem
                            key={index}
                            onPress={() => onPress(route.name, index)}
                            title={titles[index]}
                            selected={props.state.index == index}
                            image={images[index]}
                            imageSelected={imagesSelected[index]} />
                    )
                })}
            </View>
            <SafeAreaView />
        </View >
    )
}

interface TabItemProps {
    title: string | undefined,
    onPress: () => void,
    selected: boolean,
    image: ImageSourcePropType
    imageSelected: ImageSourcePropType
}

function TabItem(props: TabItemProps) {

    return (
        <TouchableOpacity style={styles.tabItem} onPress={props.onPress}>
            {
                props.selected ?
                    <View style={{ margin: 2, alignItems: 'center' }}>
                        <Image style={styles.tabImage} source={props.imageSelected} />
                        <Text style={{fontSize: 10, paddingTop: 6, color: 'blue'}} 
                        numberOfLines={1} adjustsFontSizeToFit={true}>{props.title}</Text>
                    </View>
                    :
                    <View style={{ margin: 2, alignItems: 'center' }}>
                        <Image style={styles.tabImage} source={props.image} />
                        <Text style={{fontSize: 10, paddingTop: 6, color: 'black'}} 
                        numberOfLines={1} adjustsFontSizeToFit={true}>{props.title}</Text>
                    </View>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: getScaleSize(14),
        paddingHorizontal: getScaleSize(42),
        backgroundColor: 'white',
        marginBottom: Platform.OS == 'ios' ? getScaleSize(16) : getScaleSize(0),
        marginHorizontal: getScaleSize(16),
        borderRadius: getScaleSize(45)
    },
    tabContainer: {
        height: getScaleSize(54),
        flexDirection: 'row',
    },
    tabItem: {
        flex: 1.0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageView: {
        height: getScaleSize(42),
        width: getScaleSize(42),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabImage: {
        height: getScaleSize(20),
        width: getScaleSize(20),
    }
})

export default Tabbar