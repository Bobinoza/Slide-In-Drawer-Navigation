import React from "react";

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { 
  ProfileScreen, 
  MessageScreen, 
  ActivityScreen, 
  ListScreen, 
  ReportScreen, 
  StatisticScreen, 
  SignOutScreen 
} from './screens';

import SideBar from './components/SideBar';

const DrawerNavigator = createDrawerNavigator(
  {
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        title: "Profile",
        drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor} />
      }
    },
    MessageScreen: {
      screen: MessageScreen,
      navigationOptions: {
        title: "Message",
        drawerIcon: ({ tintColor }) => <Feather name="message-square" size={16} color={tintColor} />
      }
    },
    ActivityScreen: {
      screen: ActivityScreen,
      navigationOptions: {
        title: "Activities",
        drawerIcon: ({ tintColor }) => <Feather name="activity" size={16} color={tintColor} />
      }
    },
    ListScreen: {
      screen: ListScreen,
      navigationOptions: {
        title: "Lists",
        drawerIcon: ({ tintColor }) => <Feather name="list" size={16} color={tintColor} />
      }
    },
    ReportScreen: {
      screen: ReportScreen,
      navigationOptions: {
        title: "Reports",
        drawerIcon: ({ tintColor }) => <Feather name="bar-chart" size={16} color={tintColor} />
      }
    },
    StatisticScreen: {
      screen: StatisticScreen,
      navigationOptions: {
        title: "Statistics",
        drawerIcon: ({ tintColor }) => <Feather name="trending-up" size={16} color={tintColor} />
      }
    },
    SignOutScreen: {
      screen: SignOutScreen,
      navigationOptions: {
        title: "SignOut",
        drawerIcon: ({ tintColor }) => <Feather name="log-out" size={16} color={tintColor} />
      }
    }
  }, 
  {
    contentComponent: props => <SideBar {...props} />,

    drawerWidth: Dimensions.get("window").width * 0.95, // Definindo o tamanho da drawer
    hideStatusBar: true, // Oculta a barra de horário do android.

    contentOptions: {
      activeBackgroudColor: "red",
      activeTintColor: "#a300cc",
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontal: 8
      },
      itemStyle: {
        borderRadius: 4
      },
    }
  }
);

export default createAppContainer(DrawerNavigator);