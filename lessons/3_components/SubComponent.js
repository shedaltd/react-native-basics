const React = require('react-native');
const {View, Text} = React;

// This is how you define a Component in React, it has a render method which returns a UI-element
const SubComponent = React.createClass({
    render() {
        return (<View>
            <Text>SubComponent</Text>
        </View>);
    }
});
module.exports = SubComponent;
