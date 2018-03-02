import React, { Component } from 'react';
import { FlatList, Platform } from 'react-native';
import {
	Container, Content, Text, Header, Left, Button, Icon, Body, Title, Right, View,
	Form, Picker, Item as FormItem,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Spacer from './Spacer';
import Table from './Table';

const Item = Picker.Item;

const data = [{
	_id: '0',
	title: 'T1',
	group: 'grp0',
}, {
	_id: '1',
	title: 'T2',
	group: 'grp0',
}, {
	_id: '2',
	title: 'T3',
	group: 'grp0',
}, {
	_id: '3',
	title: 'T4',
	group: 'grp0',
}, {
	_id: '4',
	title: 'T1',
	group: 'grp1',
}, {
	_id: '5',
	title: 'T2',
	group: 'grp1',
}, {
	_id: '6',
	title: 'T3',
	group: 'grp1',
}, {
	_id: '7',
	title: 'T4',
	group: 'grp1',
}];

class MixiGaming extends Component {
	state = {
		selected: 'all',
	}

	onValueChange = (value) => {
		this.setState({
			selected: value
		});
	}

	handleTableClick = (id) => {
		console.log('id', id);
		Actions.gigabytemarines();
	}

	_renderHeader = (backAction) => (
		<Header style={{ backgroundColor: "#f44242" }}>
			<Left>
				<Button transparent onPress={backAction}>
					<Icon name="arrow-back" style={{ color: "#fff" }} />
				</Button>
			</Left>
			<Body style={{ flex: 3 }}>
				<Title style={{ color: "#fff" }}>Your Header</Title>
			</Body>
			<Right />
		</Header>
	);

	_renderItem = ({ item }) => {
		const itemSrc = {
			...item,
			id: item._id,
		};

		return (
			<Content>
				<Table
					item={itemSrc}
					onClick={this.handleTableClick}
					size={50}
				/>
				<Spacer size={30} />
			</Content>
		);
	}

	keyExtractor = (item, index) => index;

	getData = (dataSrc) => {
		if (this.state.selected === 'all') {
			return dataSrc;
		}

		return data.filter(item => item.group === this.state.selected);
	}

	render() {
		const dataRender = this.getData(data);

		return (
			<Container>
				<Content padder>
					<View>
						<Text>LOREM</Text>
						<Form>
							<Picker
								mode="dropdown"
								placeholder="Select One"
								note={false}
								selectedValue={this.state.selected}
								onValueChange={this.onValueChange}
							>
								<Item label="All" value="all" />
								<Item label="ATM Card" value="grp0" />
								<Item label="Debit Card" value="grp1" />
							</Picker>
						</Form>
					</View>
					<View>
						<Text>LOREM</Text>
						<FlatList
							numColumns={4}
							data={dataRender}
							keyExtractor={this.keyExtractor}
							renderItem={this._renderItem}
						/>
					</View>
				</Content>
			</Container >
		);
	}
}

export default MixiGaming;
