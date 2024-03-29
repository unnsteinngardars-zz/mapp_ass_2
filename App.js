import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import RootStack from './navigator/rootStack';

export default class App extends React.Component {
	render() {
		return <RootStack />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
