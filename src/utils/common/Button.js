import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
	return (
		<TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
		<Text style={styles.textStyle}>{children}</Text>
		</TouchableOpacity>
		)
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
	textStyle:{
		alignSelf: 'center',
		color: '#007aff' ,
		fontSize:16, 
		paddingTop: 10,
		paddingBottom: 10,
		fontWeight:'600'
	}
}

export { Button };