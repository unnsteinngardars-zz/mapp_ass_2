import { createStackNavigator } from 'react-navigation';

import ContactListScreen from '../screens/ContactListScreen';
import ContactDetailScreen from '../screens/ContactDetailScreen';

const RootStack = createStackNavigator(
	{
		ContactList: ContactListScreen,
		ContactDetail: ContactDetailScreen
	},
	{
		initialRouteName: 'ContactList'
	}
);

export default RootStack;
