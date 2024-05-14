import React from "react";
import { Image, ImageBackground, ImageSourcePropType, Platform, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'

//CONSTANT & ASSETS
import { APP_ICONS } from "../../assets";
import { AppColors, STRINGS, getScaleSize } from "../constants";



function Tabbar(props: any) {


    function onPress(name: string, index: number) {
        props.navigation.navigate(name);
    }

    const images = [APP_ICONS.home, APP_ICONS.product, APP_ICONS.productreturn, APP_ICONS.profile]
    const titles = [STRINGS.home, STRINGS.smart_home, STRINGS.play, STRINGS.more]
    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                {props.state.routes.map((route: any, index: number) => {
                    return (
                        <TabItem
                            key={index}
                            onPress={() => onPress(route.name, index)}
                            title={titles[index]}
                            selected={props.state.index == index}
                            image={images[index]} />
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
}

function TabItem(props: TabItemProps) {

    return (
        <TouchableOpacity style={styles.tabItem} onPress={props.onPress}>
            {
                props.selected ?
                    <ImageBackground style={styles.imageView} source={APP_ICONS.selectcircle}>
                        <Image style={styles.tabImage} source={props.image} />
                    </ImageBackground>
                    :
                    <Image style={styles.tabImage} source={props.image} />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: getScaleSize(14),
        paddingHorizontal: getScaleSize(42),
        backgroundColor: AppColors.buttunGradiant,
        marginBottom: Platform.OS == 'ios' ? getScaleSize(16) : getScaleSize(0),
        marginHorizontal: getScaleSize(16),
        borderRadius: getScaleSize(45)
    },
    tabContainer: {
        height: getScaleSize(42),
        flexDirection: 'row'
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