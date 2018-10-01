import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default class WorkDetail extends Component {
	render() {
		const { data } = this.props;
		return (
			<View style={styles.container}>
				{Object.values(data).map(x => (
					<Text key={x}>{x}</Text>
				))}
			</View>
		);
	}
}
