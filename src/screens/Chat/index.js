import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import ChatScreen from './ChatScreen'

class Chat extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ChatScreen/>
            </View>
        );
    }
}
export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});