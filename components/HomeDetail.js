import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
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

export default class HomeDetail extends Component {
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

HomeDetail.propTypes = {
	data: PropTypes.object.isRequired
};
