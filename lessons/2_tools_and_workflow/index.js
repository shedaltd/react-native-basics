const React = require('react-native');
const {View, Text} = React;
const HelloWorld = React.createClass({
    render: function() {
        return (<View>
            <Text>
                Hello World
            </Text>
        </View>);
    }
});

module.exports = HelloWorld;