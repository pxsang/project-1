import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Card, CardItem, Body, H3, List, ListItem, Text, View } from 'native-base';
import ErrorMessages from '../../constants/errors';
import Error from './Error';
import Spacer from './Spacer';

class Feature extends Component {
	static propTypes = {
		image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
		title: PropTypes.string,
		action: PropTypes.func,
		size: PropTypes.number,
	}

	static defaultProps = {
		image: require('../../images/app-icon.png'),
		title: 'Lorem',
		size: 90,
	}

	render() {
		const { image, title, action, size } = this.props;

		return (
			<TouchableOpacity onPress={action}>
				<View style={{ display: 'flex', alignItems: 'center' }}>
					<Image source={image} style={{ width: size, height: size }} />
					<Spacer size={10} />
					<Text style={{ fontSize: 16, fontWeight: '900' }}>{title}</Text>
				</View>
			</TouchableOpacity>
		);
	}
};

export default Feature;
