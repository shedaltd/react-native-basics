const React = require('react-native');
const {View, Text, TextInput} = React;

// This is how you define a Component in React, it has a render method which returns a UI-element
const SubComponent = React.createClass({
    render() {
        return (<View>
            <Text>SubComponent</Text>
             <TextInput
    style={{height: 40, width: 60, borderColor: 'gray', borderWidth: 1}}
    onChangeText={(text) => this.setState({text})}
    keyboardType={'numeric'}
  />
        </View>);
    }
});
module.exports = SubComponent;
