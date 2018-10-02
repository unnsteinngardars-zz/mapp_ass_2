import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.hotpink
	},
	text: {
		fontSize: 36,
		marginLeft: 5,
		paddingTop: 5,
		paddingBottom: 5,
		color: Colors.white
	}
});

export default class ContactListItem extends React.Component {
	render() {
		const { title } = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.text}>{title}</Text>
			</View>
		);
	}
}

ContactListItem.propTypes = {
	title: PropTypes.string.isRequired
};
