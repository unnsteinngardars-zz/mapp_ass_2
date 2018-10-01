import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default class HomeDetail extends Component {
	render() {
		const { data } = this.props;
		return (
			<View style={styles.container}>
				{/* Map through all values in props recieved.  */}
				{Object.values(data).map(x => (
					<Text style={styles.container} key={x}>
						{x}
					</Text>
				))}
			</View>
		);
	}
}
