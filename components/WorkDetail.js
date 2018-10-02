import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: Colors.hotpink
	}
});

export default class WorkDetail extends Component {
	render() {
		const { data } = this.props;
		return (
			<View style={styles.container}>
				{Object.values(data).map(x => (
					<Text style={styles.text} key={x}>
						{x}
					</Text>
				))}
			</View>
		);
	}
}
