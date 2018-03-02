import React, { Component } from 'react';
import { Modal, TouchableHighlight, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Container, Button, View, Item, Input, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent'
	},
	view: {
		backgroundColor: 'grey',
		width: '90%',
		maxWidth: 300,
		height: 170,
		padding: 5,
		marginBottom: 100,
	},
	quantityContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
	}
});

class QuantityModal extends Component {
	state = {
		quantity: 0,
		test: 0,
	}

	// componentWillUpdate() {
	// 	Keyboard.addListener('keyboardWillShow', (e) => this._keyboardWillShow(e));
	// 	Keyboard.addListener('keyboardWillHide', (e) => this._keyboardWillHide(e));
	// }

	// componentWillUnmount() {
	// 	Keyboard.removeListener('keyboardWillShow');
	// 	Keyboard.removeListener('keyboardWillHide');
	// }

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	// _keyboardWillShow = (e) => {
	// 	this.setState({ test: 100 });
	// }

	// _keyboardWillHide = (e) => {
	// 	this.setState({ test: 0 });
	// }

	_dismissKeyboard = () => Keyboard.dismiss();

	_onCancel = () => {
		this.props.onCancel();
	}

	_handleIncrease = () => {
		this._dismissKeyboard();
		this.setState({
			quantity: parseFloat(this.state.quantity) + 1,
		});
	}

	_handleDecrease = () => {
		this._dismissKeyboard();
		this.setState({
			quantity: parseFloat(this.state.quantity) - 1,
		});
	}

	_handleInputChange = (value) => {
		this.setState({ quantity: value });
	}

	render() {
		console.log('asdasd', this.state.test);

		return (
			<Modal
				animationType="slide"
				transparent
				visible={this.props.active}
				onRequestClose={() => {
					alert('Modal has been closed.');
				}}
				ref={this._quantityModal}
			>
				<TouchableWithoutFeedback onPress={this._dismissKeyboard}>
					<Container style={styles.container}>
						<View
							style={styles.view}
						>
							<Text>Mixi Gaming</Text>
							<Text>So luong</Text>
							<View style={styles.quantityContainer}>
								<Button light onPress={this._handleDecrease}>
									<Icon name='remove' />
								</Button>
								<View style={{ flex: 1, maxWidth: 150 }}>
									<Item rounded>
										<Input
											keyboardType='numeric'
											selectTextOnFocus
											autoFocus
											value={String(this.state.quantity)}
											onChangeText={this._handleInputChange}
											style={{ fontSize: 24, fontWeight: '700', textAlign: 'center' }}
										/>
									</Item>
								</View>
								<Button light onPress={this._handleIncrease}>
									<Icon name='add' />
								</Button>
							</View>
							<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
								<Button danger onPress={this._onCancel}>
									<Text>Cancel</Text>
								</Button>
								<Button primary>
									<Text>Booking</Text>
								</Button>
							</View>
						</View>
					</Container>
				</TouchableWithoutFeedback>
			</Modal>
		);
	}
}

export default QuantityModal;
