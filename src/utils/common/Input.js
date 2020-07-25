import React from 'react';
import { Text, View, TextInput} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {

	const { labelStyle, inputStyle, containerStyle} = styles;
	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
		);
}

const styles = {
	buttonStyle:{
		flex:1, 
		alignSelf: 'stretch',
		backgroundColor: '#fff', 
		borderRadius: 5, 
		borderWidth: 1, 
		borderColor: '#007aff', 
		marginLeft: 5, 
		marginRight: 5,
	}, 
	inputStyle:{
		color: '#000', 
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight:23, 
		flex:2,
	},
	labelStyle:{
		fontSize: 18,
		paddingLeft:20,
		flex:1,
	},
	containerStyle:{
		height: 40, 
		flex:1, 
		flexDirection: 'row',
		alignItems:'center'
	},
	textStyle:{
		alignSelf: 'center',
		color: '#007aff' ,
		fontSize:16, 
		paddingTop: 10,
		paddingBottom: 10,
		fontWeight:'600'
	}
};

export { Input };