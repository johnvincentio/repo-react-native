/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const MainNavigator = createStackNavigator(
	{
		Home: HomeScreen,
		Details: DetailsScreen
	},
	{
		initialRouteName: 'Home'
	}
);

const App = createAppContainer(MainNavigator);

export default App;
