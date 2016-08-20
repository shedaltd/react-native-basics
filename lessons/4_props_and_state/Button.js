const React = require('react-native');
const {View, Text, TouchableOpacity} = React;

const Button = React.createClass({
    render: function() {

        return (
          <TouchableOpacity onPress={this.props.onPress}>
            <Text>
                Increment
            </Text>
        </TouchableOpacity>);
    }
});

module.exports = Button;
