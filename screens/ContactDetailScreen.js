import React from 'react';
import {
	StyleSheet,
	Image,
	Text,
	View,
	TouchableHighlight,
	Animated,
	Easing
} from 'react-native';
import HomeDetail from '../components/HomeDetail';
import WorkDetail from '../components/WorkDetail';

import Colors from '../constants/colors';

const styles = StyleSheet.create({
	center: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: Colors.white
	},
	avatarContainer: {
		flex: 2,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	buttonContainer: {
		flex: 1,
		alignItems: 'center'
	},
	contentContainer: {
		flex: 2,
		justifyContent: 'flex-start',
		alignItems: 'center'
		// paddingBottom: 20
	},
	avatar: {
		width: 200,
		height: 200,
		borderWidth: 2,
		borderColor: Colors.hotpink,
		borderRadius: 10
	},
	name: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
		marginTop: 10,
		color: Colors.hotpink,
		fontSize: 20
	},
	button: {
		marginBottom: 30,
		width: 200,
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: Colors.hotpink
	},
	buttonText: {
		padding: 20,
		color: Colors.white,
		fontSize: 16
	}
});

export default class ContactDetailScreen extends React.Component {
	constructor(props) {
		super(props);
		this.springValue = new Animated.Value(0.4);
		this.animatedValue = new Animated.Value(0);
		this.state = {
			buttonText: 'Show work info',
			displayHome: true // Show either home or work info
		};
	}

	componentDidMount = () => {
		this.spring();
		this.animate();
	};

	// Animation used for profile image
	spring = () => {
		this.springValue.setValue(0.4);
		Animated.spring(this.springValue, {
			toValue: 1,
			friction: 0.8
		}).start();
	};

	// Animation used for home/work info
	animate = () => {
		this.animatedValue.setValue(0);
		Animated.timing(this.animatedValue, {
			toValue: 1,
			duration: 2000,
			easing: Easing.linear
		}).start();
	};

	// On button pressed, switch component and button text
	buttonPressed = () => {
		this.animate();
		this.spring();
		const { displayHome } = this.state;
		if (displayHome) {
			this.setState({ buttonText: 'Show home info', displayHome: false });
		} else {
			this.setState({ buttonText: 'Show work info', displayHome: true });
		}
	};

	render() {
		const { avatar, name, work, home } = this.props.navigation.state.params;
		const { buttonText, displayHome } = this.state;
		const { first_name, last_name } = name;

		// Used for animation for home/work info
		const opacity = this.animatedValue.interpolate({
			inputRange: [0, 0.5, 1],
			outputRange: [0, 1, 1]
		});

		return (
			<View style={styles.container}>
				<View style={styles.avatarContainer}>
					<Animated.View
						style={{ transform: [{ scale: this.springValue }] }}
					>
						<Image
							style={styles.avatar}
							source={{
								uri: avatar
							}}
						/>
					</Animated.View>
				</View>
				<View style={styles.buttonContainer}>
					<Text style={styles.name}>
						{first_name} {last_name}
					</Text>
					<TouchableHighlight
						onPress={this.buttonPressed}
						underlayColor="white"
					>
						<View style={styles.button}>
							<Text style={styles.buttonText}>{buttonText}</Text>
						</View>
					</TouchableHighlight>
				</View>
				<View style={styles.contentContainer}>
					<Animated.View style={{ opacity, height: '40%' }}>
						{/* Boolean variable for displaying home or work info.  */}
						{displayHome ? (
							<HomeDetail data={home} />
						) : (
							<WorkDetail data={work} />
						)}
					</Animated.View>
				</View>
			</View>
		);
	}
}
