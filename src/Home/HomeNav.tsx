import React, {useContext, useEffect, useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Appbar, Avatar, Badge} from "react-native-paper";
import {Dimensions, Image, TouchableOpacity, View} from "react-native";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {I18n} from "aws-amplify";

import {HomeNavigation} from "../../types";
import Home from "./Home";
import HomeBlinkStates from "../../contexts/HomeBlink/HomeBlinkStates";
import SendBlink from "./SendBlink";
import Packages from "./Packages";
import RequestBlink from "./RequestBlink";
import {themeDefault} from "../../constants/Colors";
import MBContext from "../../contexts/MoneyBlinks/MBContext";

/*import RegisterNav from "./Registers/RegisterNav";
 DownloadBlink from "./DownloadBlink";
import CompletedRequestBlink from "./CompletedRequestBlink";
import ConfirmBlink from "./ConfirmBlink";
import NotificationNav from "../../screens/Notifications/NotificationNav";
import HaveCode from "./HaveCode";
import MBContext from "../../contexts/MoneyBlinks/MBContext";
import ConfirmStandBy from "./ConfirmStandBy";
import CashMoney from "./CashMoney";
import UpCashMoney from "./UpCashMoney";
import DownCashMoney from "./DownCashMoney";*/

const {width} = Dimensions.get('window');

const Stack = createStackNavigator<HomeNavigation>();

// @ts-ignore
export default function HomeNav({navigation}) {
    const { notifications, updateNotifications, handleUpdateNotifications }: any = useContext(MBContext);
    const [notificationInt, setNotificationInt] = useState<number>(0);

    useEffect(() => {
        if (notifications || updateNotifications) {
            handleUpdateNotifications(null);
            setNotificationInt(notifications.filter((notification: any) => !notification.isRead).length);
        }
    }, [notifications, updateNotifications]);

    return (
        <HomeBlinkStates>
            <Stack.Navigator
                screenOptions={{
                    header: ({scene, previous, navigation}) => {
                        const {options} = scene.descriptor;
                        const title =
                            options.headerTitle !== undefined
                                ? options.headerTitle
                                : options.title !== undefined
                                ? options.title
                                : scene.route.name;
                        const iconRight: string = options.headerBackAccessibilityLabel ?
                            options.headerBackAccessibilityLabel : 'bell';

                        return (
                            <Appbar.Header style={{
                                backgroundColor: '#52C1E0'
                            }}>
                                {previous ? (
                                    <Appbar.BackAction color="#FFFFFF"
                                                       onPress={navigation.goBack}
                                    />
                                ) : (
                                    <TouchableOpacity
                                        style={{marginLeft: 10}}
                                        onPress={() => {
                                            ((navigation as any) as DrawerNavigationProp<{}>).openDrawer();
                                        }}
                                    >
                                        <Avatar.Icon
                                            size={48}
                                            icon={(props) => <MaterialCommunityIcons
                                                name="menu" {...props}/>}
                                            style={{
                                                backgroundColor: '#52C1E0',
                                            }}
                                            color="#FFFFFF"
                                        />
                                    </TouchableOpacity>
                                )}
                                {
                                    scene.route.name === 'Home' && (
                                        <Image source={require('../../assets/images/home-text-mb.png')}
                                               style={{
                                                   width: (width - 120),
                                                   resizeMode: "contain"
                                               }}/>
                                    )
                                }
                                {
                                    scene.route.name !== 'Home' && (
                                        <Appbar.Content
                                            title={title}
                                            titleStyle={{
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                                color: '#FFFFFF'
                                            }}
                                        />
                                    )
                                }
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('NotificationNav')}>
                                    <Avatar.Icon
                                        icon={iconRight}
                                        color="#FFFFFF"
                                        style={{
                                            backgroundColor: 'transparent',
                                            zIndex: 1
                                        }}
                                        size={48}/>
                                    {
                                        notificationInt > 0 && (
                                            <Badge style={{
                                                position: 'absolute',
                                                marginTop: 5,
                                                right: 5,
                                                zIndex: 5,
                                                backgroundColor: themeDefault.colors.error
                                            }}>
                                                {notificationInt}
                                            </Badge>
                                        )
                                    }
                                </TouchableOpacity>
                            </Appbar.Header>
                        );
                    },
                }}
                headerMode="screen"
                initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}/>
                <Stack.Screen
                    name="SendBlink"
                    options={{
                        title: I18n.get('TITLE_SEND_BLINK'),
                        headerBackAccessibilityLabel: 'account-cash'
                    }}
                    component={SendBlink}/>
                <Stack.Screen
                    name="RequestBlink"
                    options={{
                        title: I18n.get('RECEIVED_BLINK_END_TITLE'),
                        headerBackAccessibilityLabel: 'cash'
                    }}
                    component={RequestBlink}/>
                <Stack.Screen
                    name="Packages"
                    options={{
                        title: I18n.get('TITLE_PACKAGES'),
                        headerBackAccessibilityLabel: 'gift'
                    }}
                    component={Packages}/>
              
              
            </Stack.Navigator>
        </HomeBlinkStates>
    );
}
