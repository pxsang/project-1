import React, { Component } from 'react';
import { FlatList, Platform, Modal, TouchableOpacity } from 'react-native';
import {
	Container, Content, Text, Header, Left, Button, Icon, Body, Title, Right, View,
	Form, Picker, Item as FormItem, List, ListItem, Thumbnail,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Spacer from './Spacer';
import Table from './Table';
import QuantityModal from './QuantityModal';
import utils from '../../helpers/utils';

const Item = Picker.Item;

const data = [{
	_id: '0',
	name: 'Nghêu hấp sả ớt',
	price: 70000,
	image: { uri: 'https://media.cooky.vn/recipe/g2/14731/s640/recipe14731-635690259216203970.jpg' },
}, {
	_id: '1',
	name: 'Mực tươi nướng muối ớt',
	price: 80000,
	image: { uri: 'https://media.cooky.vn/images/muc-muoi-ot-640.jpg' },
}, {
	_id: '2',
	name: 'Bò nướng ngói',
	price: 120000,
		image: { uri: 'https://media.cooky.vn/images/bo-nuong-ngoi.jpg' },
}, {
	_id: '3',
	name: 'Càng ghẹ rang muối',
	price: 50000,
	image: { uri: 'https://media.cooky.vn/recipe/g1/4307/s/recipe4307-635885626556793960.jpg' },
}, {
	_id: '4',
	name: 'Ếch chiên nước mắm',
	price: 60000,
	image: { uri: 'https://media.cooky.vn/images/10-mon-an-nhau4.jpg' },
}, {
	_id: '5',
	name: 'Rau củ luộc với kho quẹ',
	price: 50000,
	image: { uri: 'https://media.cooky.vn/images/10-mon-an-nhau6.jpg' },
}, {
	_id: '6',
	name: 'Chân gà muối chiên giòn',
	price: 50000,
	image: { uri: 'https://media.cooky.vn/images/10-mon-an-nhau8.jpg' },
}, {
	_id: '7',
	name: 'Hải sản nướng mỡ hành',
	price: 70000,
	image: { uri: 'https://media.cooky.vn/recipe/g1/1070/s/recipe1070-635555475454752697.jpg' },
}, {
	_id: '8',
	name: 'Lòng non xào dưa cải chua',
	price: 50000,
	image: { uri: 'https://media.cooky.vn/images/10-mon-an-nhau11.jpg' },
}, {
	_id: '9',
	name: 'Mì xào giòn hải sản',
	price: 70000,
	image: { uri: 'https://media.cooky.vn/recipe/g1/816/s/recipe816-635533764465117735.jpg' },
}];

class FFQGaming extends Component {
	state = {
		selected: 'key3',
		activeDeckSwiperModal: false,
		activeQuantityModal: false,
	}

	onValueChange = (value) => {
		this.setState({
			selected: value
		});
	}

	handleTableClick = (id) => console.log('id', id);

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

	_onPress = () => {
		Actions.deckswiper();
	}

	_onToggleQuantityModal = () => {
		console.log('zzzzzz');
		this.setState({
			activeQuantityModal: !this.state.activeQuantityModal,
		});
	}

	keyExtractor = (item, index) => index;

	formatMoney = (price) => {
		return utils.formatMoney(price);
	}

	render() {
		return (
			<Container>
				<Content>
					<List>
						{data.map(item => (
							<ListItem key={item._id}>
								<TouchableOpacity onPress={this._onToggleQuantityModal} style={{ flex: 1 }}>
									<View style={{ flex: 1, flexDirection: 'row' }}>
										<Thumbnail square size={50} source={item.image} />
										<Body style={{ alignItems: 'flex-start', paddingLeft: 10 }}>
											<Text style={{ fontWeight: '600' }}>{item.name}</Text>
											<Text>{this.formatMoney(item.price)}</Text>
										</Body>
										<Button transparent info onPress={this._onPress}>
											<Text>View</Text>
										</Button>
									</View>
								</TouchableOpacity>
							</ListItem>
						))}
					</List>
				</Content>
				<QuantityModal
					active={this.state.activeQuantityModal}
					onCancel={this._onToggleQuantityModal}
				/>
			</Container >
		);
	}
}

export default FFQGaming;
