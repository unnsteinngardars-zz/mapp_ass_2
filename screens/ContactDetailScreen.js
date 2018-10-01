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

const styles = StyleSheet.create({
	center: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	upperContainer: {
		justifyContent: 'flex-end',
		alignItems: 'center',
		height: '60%'
	},
	avatar: {
		width: 200,
		height: 200,
		borderWidth: 2,
		borderColor: '#E81274',
		borderRadius: 10
	},
	name: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
		marginTop: 10,
		color: '#000000',
		fontSize: 20
	},
	button: {
		marginBottom: 30,
		width: 200,
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: '#E81274'
	},
	buttonText: {
		padding: 20,
		color: '#000000',
		fontSize: 16
	}
});

export default class ContactDetailScreen extends React.Component {
	constructor(props) {
		super(props);
		this.springValue = new Animated.Value(0.4);
		this.animatedValue = new Animated.Value(0);
		this.state = {
			ButtonText: 'Show work info',
			DisplayHome: true // Show either home or work info
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
		const { DisplayHome } = this.state;
		if (DisplayHome) {
			this.setState({ ButtonText: 'Show home info', DisplayHome: false });
		} else {
			this.setState({ ButtonText: 'Show work info', DisplayHome: true });
		}
	};

	render() {
		//const { avatar, name, work, home} = this.props;
		// console.log(this.props);
		// let obj = {
		// 	name: { first_name: 'Kaylyn', last_name: 'Taillant' },
		// 	avatar:
		// 		'https://robohash.org/quialiasaliquid.bmp?size=250x250&set=set1',
		// 	work: {
		// 		email: 'ktaillant0@psu.edu',
		// 		phone_number: '632-570-5642',
		// 		address: '99 Linden Plaza',
		// 		job_title: 'Engineer II',
		// 		department: 'Research and Development',
		// 		company_name: 'Topicstorm'
		// 	},
		// 	home: {
		// 		email: 'ktaillant0@wikispaces.com',
		// 		phone_number: '563-779-8844',
		// 		address: '15715 Miller Plaza'
		// 	}
		// };

		const { avatar, name, work, home } = this.props;
		const { first_name: firstName, last_name: lastName } = name;
		const { ButtonText, DisplayHome } = this.state;

		// Used for animation for home/work info
		const opacity = this.animatedValue.interpolate({
			inputRange: [0, 0.5, 1],
			outputRange: [0, 1, 1]
		});

		return (
			<View>
				<View style={styles.upperContainer}>
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
					<Text style={styles.name}>
						{firstName} {lastName}
					</Text>
					<TouchableHighlight
						onPress={this.buttonPressed}
						underlayColor="white"
					>
						<View style={styles.button}>
							<Text style={styles.buttonText}>{ButtonText}</Text>
						</View>
					</TouchableHighlight>
				</View>
				<Animated.View style={{ opacity, height: '40%' }}>
					{/* Boolean variable for displaying home or work info.  */}
					{DisplayHome ? (
						<HomeDetail data={home} />
					) : (
						<WorkDetail data={work} />
					)}
				</Animated.View>
			</View>
		);
	}
}
