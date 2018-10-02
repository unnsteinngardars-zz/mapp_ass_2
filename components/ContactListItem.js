import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-swipeable';
import PropTypes from 'prop-types';
import Colors from '../constants/colors';
import Fonts from '../constants/fonts';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white
	},
	text: {
		fontFamily: Fonts.contactItem,
		fontSize: 16,
		padding: 10,
		color: Colors.lightpink,
		fontWeight: 'bold'
	},
	leftSwipeItem: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingRight: 10,
		backgroundColor: Colors.hotpink
	},
	deleteText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: Colors.white
	}
});

export default class ContactListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			swipeable: null,
			leftActionActivated: false
		};
	}

	leftButtons(id) {
		return [
			<View style={[styles.leftSwipeItem]}>
				<TouchableHighlight
					onPress={() => {
						this.props.delete(id);
						this.swipeable.recenter();
					}}
					underlayColor={Colors.white}
				>
					<Text style={styles.deleteText}>Delete</Text>
				</TouchableHighlight>
			</View>
		];
	}

	render() {
		const { item } = this.props;
		return (
			<View style={styles.container}>
				<Swipeable
					onRef={ref => (this.swipeable = ref)}
					leftButtons={this.leftButtons(item.id)}
					leftButtonWidth={100}
					leftActionActivationDistance={200}
					onLeftActionActivate={() =>
						this.setState({ leftActionActivated: true })
					}
					onLeftActionDeactivate={() =>
						this.setState({ leftActionActivated: false })
					}
				>
					<TouchableHighlight
						underlayColor={Colors.white}
						onPress={() => {
							this.props.passBackId(item.id);
						}}
					>
						<Text style={styles.text}>{item.name}</Text>
					</TouchableHighlight>
				</Swipeable>
			</View>
		);
	}
}

ContactListItem.propTypes = {
	passBackId: PropTypes.func.isRequired,
	delete: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired
};
