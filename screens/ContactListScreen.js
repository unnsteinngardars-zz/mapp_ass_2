import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	SectionList,
	ActivityIndicator
} from 'react-native';

import ContactListItem from '../components/ContactListItem';
import ContactListHeader from '../components/ContactListHeader';
import ContactListFooter from '../components/ContactListFooter';

import data from '../ass2testdata.json';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	header: {
		flex: 1,
		marginLeft: 10,
		paddingTop: 10,
		paddingBottom: 10
	},
	item: {
		flex: 1,
		marginLeft: 10,
		paddingTop: 4,
		paddingBottom: 4
	}
});

export default class ContactListScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataById: {},
			sections: [],
			loaded: false
		};
	}

	componentDidMount() {
		let { sections, dataById } = this.convertData(data);
		this.sort(sections);
		this.setState({ sections: sections, dataById: dataById, loaded: true });
		console.log(sections);
	}

	/**
	 * Reduces an array to a dictionary of arrays by the letters of the alphabet
	 * @param {Array} data
	 */
	convertData(data) {
		let dataById = {};
		id = 1;
		// acc er fylki
		let sections = data.reduce((acc, item) => {
			var found = false;
			// create object to map items by ID
			item.id = id;
			dataById[id] = item;
			let key = item['name']['first_name'].charAt(0);
			let value = {
				id: id,
				name:
					item['name']['first_name'] + ' ' + item['name']['last_name']
			};
			for (var index in acc) {
				if (acc[index].title == key) {
					acc[index].data.push(value);
					found = true;
					break;
				}
			}
			if (!found) {
				let obj = { title: key, data: [] };
				obj.data.push(value);
				acc.push(obj);
			}
			id++;
			return acc;
		}, []);
		return { sections: sections, dataById: dataById };
	}

	/**
	 * Compare two objects by value of prop
	 * @param {string} prop
	 */
	compare(prop) {
		return (first, second) => {
			if (first[prop] < second[prop]) {
				return -1;
			} else if (first[prop] > second[prop]) {
				return 1;
			} else {
				return 0;
			}
		};
	}

	/**
	 * Sorts the sections array and each data array
	 * @param {Array} data
	 */
	sort(sections) {
		sections.sort(this.compare('title'));
		for (var i in sections) {
			sections[i].data.sort(this.compare('name'));
		}
	}

	toDetails(id) {
		this.props.navigation.navigate(
			'ContactDetailScreen',
			this.state.dataById[id]
		);
	}

	render() {
		const { sections } = this.state;

		if (this.state.loaded) {
			return (
				<View style={styles.container}>
					<ScrollView>
						<SectionList
							sections={sections}
							renderSectionHeader={({ section: { title } }) => (
								<View style={styles.header}>
									<ContactListHeader title={title} />
								</View>
							)}
							renderItem={({ item, index, section }) => (
								<View style={styles.item}>
									<ContactListItem
										passBackId={id => {
											this.toDetails(id);
										}}
										item={item}
									/>
								</View>
							)}
							keyExtractor={(item, index) => item + index}
						/>
					</ScrollView>
				</View>
			);
		} else {
			return <ActivityIndicator />;
		}
	}
}
