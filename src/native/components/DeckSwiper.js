import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

const cards = [
	{
		text: 'Card One',
		name: 'One',
		image: { uri: 'https://yt3.ggpht.com/a-/AJLlDp2wT64hhrNWQjMMDEwBnbHrTBa-Wn9xuhieLg=s900-mo-c-c0xffffffff-rj-k-no' },
	},
	{
		text: 'Card One',
		name: 'One',
		image: { uri: 'http://liquipedia.net/commons/images/thumb/5/53/GIGABYTE_Marines_Logo.png/600px-GIGABYTE_Marines_Logo.png' },
	},
	{
		text: 'Card One',
		name: 'One',
		image: { uri: 'https://www.vnesport.com/wp-content/uploads/2017/05/ffq.png' },
	},
	{
		text: 'Card One',
		name: 'One',
		image: { uri: 'http://liquipedia.net/commons/images/e/e3/EVOS_ESPORTS_NewLogo.png' },
	},
];

class FFQGaming extends Component {
	_renderItem = (item) => (
		<Card style={{ elevation: 4 }}>
			<CardItem>
				<Left>
					<Thumbnail source={item.image} />
					<Body>
						<Text>{item.text}</Text>
						<Text note>NativeBase</Text>
					</Body>
				</Left>
			</CardItem>
			<CardItem cardBody>
				<Image style={{ height: 300, flex: 1 }} source={item.image} />
			</CardItem>
			<CardItem>
				<Icon name="heart" style={{ color: '#ED4A6A' }} />
				<Text>{item.name}</Text>
			</CardItem>
		</Card>
	);

	render() {
		return (
			<Container>
				<View>
					<DeckSwiper
						dataSource={cards}
						renderItem={this._renderItem}
					/>
				</View>
			</Container>
		);
	}
}

export default FFQGaming;
