import React from 'react';
import { FlatList } from 'react-native';
import { Container, Content, Text, H1, H2, H3, View } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Spacer from './Spacer';
import Feature from './Feature';

const data = [{
	title: 'Mixi Gaming',
	image: { uri: 'https://yt3.ggpht.com/a-/AJLlDp2wT64hhrNWQjMMDEwBnbHrTBa-Wn9xuhieLg=s900-mo-c-c0xffffffff-rj-k-no' },
	action: () => Actions.mixigaming(),
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

const _renderItem = ({ item }) => (
	<Content>
		<Feature
			title={item.title}
			image={item.image}
			action={item.action}
		/>
		<Spacer size={30} />
	</Content>
);

const keyExtractor = (item, index) => index;

const About = () => (
	<Container>
		<Content padder>
			<Spacer size={20} />
			<View>
				<FlatList
					numColumns={2}
					data={data}
					keyExtractor={keyExtractor}
					renderItem={_renderItem}
				/>
			</View>
		</Content>
	</Container>
);

export default About;
