import React from 'react';
import { View, Text, Platform, StatusBar } from 'react-native';
import AddEntry from './components/AddEntry';
import History from './components/History';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { purple, white } from './utils/colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const HistoryStack = createStackNavigator({
  History: History,
});

HistoryStack.navigationOptions = {
  tabBarLabel: 'History',
  tabBarIcon: ({ tintColor }) => <Ionicons name="ios-bookmarks" size={30} color={tintColor} />,
};

const AddEntryStack = createStackNavigator({
  AddEntry: AddEntry,
});

AddEntryStack.navigationOptions = {
  tabBarLabel: 'AddEntry',
  tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" size={30} color={tintColor} />,
};

// const Tabs =
//   Platform.OS === 'ios'
//     ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
//     : createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);

const MainTabNavigator = createBottomTabNavigator({
  HistoryStack,
  AddEntryStack,
});

const AppNavigator = createSwitchNavigator({
  Main: MainTabNavigator,
});

// const Tabs = TabNavigator(
//   {
//     History: {
//       screen: History,
//       navigationOptions: {
//         tabBarLabel: 'History',
//         tabBarIcon: ({ tintColor }) => (
//           <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
//         ),
//       },
//     },
//     AddEntry: {
//       screen: AddEntry,
//       navigationOptions: {
//         tabBarLabel: 'Add Entry',
//         tabBarIcon: ({ tintColor }) => (
//           <FontAwesome name="plus-square" size={30} color={tintColor} />
//         ),
//       },
//     },
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: Platform.OS === 'ios' ? purple : white,
//       style: {
//         height: 56,
//         backgroundColor: Platform.OS === 'ios' ? white : purple,
//         shadowRadius: 6,
//         shadowOpacity: 1,
//         shadowColor: 'rgba(0,0,0,0.24)',
//         shadowOffset: {
//           width: 0,
//           height: 3,
//         },
//       },
//     },
//   },
// );

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <View style={{ height: 20 }} />
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
