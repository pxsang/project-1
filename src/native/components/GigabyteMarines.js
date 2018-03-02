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
	title: 'Booked',
	image: { uri: 'https://yt3.ggpht.com/a-/AJLlDp2wT64hhrNWQjMMDEwBnbHrTBa-Wn9xuhieLg=s900-mo-c-c0xffffffff-rj-k-no' },
	action: () => Actions.booked(),
}, {
	title: 'Gigabyte Marines',
	image: { uri: 'http://liquipedia.net/commons/images/thumb/5/53/GIGABYTE_Marines_Logo.png/600px-GIGABYTE_Marines_Logo.png' },
}, {
	title: 'FFQ Gaming',
	image: { uri: 'https://www.vnesport.com/wp-content/uploads/2017/05/ffq.png' },
}, {
	title: 'EVOS Gaming',
	image: { uri: 'http://liquipedia.net/commons/images/e/e3/EVOS_ESPORTS_NewLogo.png' },
}];

class GigabyteMarines extends Component {
	state = {

	}

	_renderItem = ({ item }) => (
		<Content>
			<Feature
				title={item.title}
				image={item.image}
				action={item.action}
			/>
			<Spacer size={30} />
		</Content>
	);

	keyExtractor = (item, index) => index;

	render() {
		return (
			<Container>
				<Content padder>
					<Spacer size={20} />
					<View>
						<FlatList
							numColumns={2}
							data={data}
							keyExtractor={this.keyExtractor}
							renderItem={this._renderItem}
						/>
					</View>
				</Content>
			</Container>
		);
	}
}

export default GigabyteMarines;
