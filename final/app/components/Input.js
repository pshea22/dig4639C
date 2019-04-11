import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { inputPlaceholder } from '../utils/Colors';

const Input = ({ inputValue, onChangeText, onDoneAddItem }) => (
	<TextInput
		style={styles.input}
		value={inputValue}
		onChangeText={onChangeText}
		placeholder="Enter Item"
		placeholderTextColor={inputPlaceholder}
		multiline={true}
		underlineColorAndroid="transparent"
		selectionColor={'black'}
		maxLength={30}
		returnKeyType="done"
		autoCorrect={false}
		blurOnSubmit={true}
		onSubmitEditing={onDoneAddItem}
	/>
);

const styles = StyleSheet.create({
	input: {
		paddingTop: 10,
		paddingRight: 15,
		fontSize: 34,
		color: 'black',
		fontWeight: '500'
	}
});

export default Input;
