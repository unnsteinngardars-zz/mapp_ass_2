import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-swipeable';
import Colors from '../constants/colors';
import Fonts from '../constants/fonts';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.lightpink
	},
	text: {
		fontFamily: Fonts.contactItem,
		fontSize: 16,
		padding: 10,
		color: Colors.white
	}
});

export default class ContactListItem extends React.Component {
	render() {
		const { item } = this.props;
		return (
    <View style={styles.container}>
        <Swipeable>
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
