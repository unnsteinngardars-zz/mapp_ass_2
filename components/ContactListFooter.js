import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.pink
	}
});

export default class ContactListItem extends React.Component {
	render() {
		return <View style={styles.container} />;
	}
}
