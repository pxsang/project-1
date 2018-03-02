import React, { Component } from 'react';
import { FlatList, Platform, Modal, TouchableOpacity } from 'react-native';
import {
	Container, Content, Text, Header, Left, Button, Icon, Body, Title, Right, View,
	Form, Picker, Item as FormItem, List, ListItem, Thumbnail,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Spacer from './Spacer';
import Table from './Table';
import Feature from './Feature';
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

class Booked extends Component {
	state = {

	}

	keyExtractor = (item, index) => index;

	formatMoney = (price) => {
		return utils.formatMoney(price);
	}

	render() {
		return (
			<Container>
				<View style={{ height: 35, backgroundColor: 'grey' }}>
					<Text style={{ fontSize: 18, fontWeight: '900', textAlign: 'center', lineHeight: 35 }}>T1: 1.234.567 VND</Text>
				</View>
				<Content padder>
					<Text>Booked</Text>
					<List>
						{data.map(item => (
							<ListItem key={item._id}>
								<Thumbnail square size={50} source={item.image} />
								<Body style={{ alignItems: 'flex-start', paddingLeft: 10 }}>
									<Text style={{ fontWeight: '600' }}>{item.name}</Text>
									<View>
										<Text>{this.formatMoney(item.price)}</Text>
										<View>
											<Text>SL:</Text>
										</View>
									</View>
								</Body>
							</ListItem>
						))}
					</List>
				</Content>
			</Container>
		);
	}
}

export default Booked;
