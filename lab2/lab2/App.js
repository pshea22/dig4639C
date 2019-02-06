import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
constructor(props) {
super(props);
this.state = {text: '',isCorrect:true,isCorrect2:false};

this.onChange = this.onChange.bind(this);
this.onPress = this.onPress.bind(this);
}
onChange(event) {
console.log(event);
this.setState({text: event.target.text});

}

onPress() {
console.log("Pressed");
if(/[^a-zA-Z]/.test(this.state.text)){
this.setState({isCorrect: false});
}else {
this.setState({isCorrect: true});
this.setState({isCorrect2: true});

}
}

render() {
const helloMessage = <View style={styles.container} flexDirection="column" alignItems='stretch'>
<View>
<TextInput style={styles.textInput} value={this.state.text} onChangeText={(text) => this.setState({text})} placeholder="Enter your name">
</TextInput>
</View>
<TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
<Text style={styles.buttonText}>Submit</Text>
</TouchableOpacity>
{(!this.state.isValid) ? <Text style={styles.wrong}>This is invalid!</Text>: null}
</View>
const goodbyeMessage = <Text> Hey there {this.state.text}</Text>;
let message;
if (!this.state.isCorrect2) {
message = helloMessage
} else {
message = goodbyeMessage
}

return (
<View style={styles.container} flexDirection="column" alignItems='stretch'>
{message}
</View>
);
}

}

const styles = StyleSheet.create({
buttonText:
{
color:"white",
fontSize:40
},
buttonStyle:
{
justifyContent: 'center',
alignItems: 'center',
backgroundColor:'blue',
height:75,
margin:30,
},
textInput:
{
margin:30,
height:75,
fontSize:20
},
wrong:{
color:'red',
},

container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
});
