import React from 'react';
import {Text, View} from 'react-native';


const CardSelection = (props) => {
	return (
		<View style={styles.containerStyles}>
		{props.children}
		</View>
		);
}

const styles = {
	containerStyles : {
		borderBottomWidth: 1,
		padding: 5, 
		backgroundColor : '#fff', 
		justifyContent: 'flex-start', 
		flexDirection : 'row', 
		borderColor : '#ddd', 
		position : 'relative',
	}
}
export { CardSelection };