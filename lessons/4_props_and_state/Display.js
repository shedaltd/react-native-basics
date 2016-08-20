const React = require('react-native');
const {View, Text} = React;

const Display = React.createClass({
    render: function() {
        const toDisplay = this.props.toDisplay ?  this.props.toDisplay : 'Default';
        return (<Text>
            {toDisplay}
        </Text>);
    }
});

module.exports = Display;