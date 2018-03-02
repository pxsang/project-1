import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Card, CardItem, Body, H3, List, ListItem, Text, View } from 'native-base';
import ErrorMessages from '../../constants/errors';
import Error from './Error';
import Spacer from './Spacer';

class Table extends Component {
	static propTypes = {
		image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
		title: PropTypes.string,
		action: PropTypes.func,
		size: PropTypes.number,
	}

	static defaultProps = {
		title: 'Lorem',
		size: 50,
	}

	_handlePress = () => {
		this.props.onClick(this.props.item.id);
	}

	render() {
		const { item: { id, image, title }, onClick, size } = this.props;

		return (
			<TouchableOpacity onPress={this._handlePress}>
				<View style={{ display: 'flex', alignItems: 'center' }}>
					<Image source={require('../../images/table.png')} style={{ width: size, height: size }} />
					<Spacer size={10} />
					<Text style={{ fontSize: 14, fontWeight: '700' }}>{title}</Text>
				</View>
			</TouchableOpacity>
		);
	}
};

export default Table;
