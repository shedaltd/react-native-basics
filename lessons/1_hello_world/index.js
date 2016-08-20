/**
 * This example provides the basic structure of a React component
 *
 * All react components must have a render method that returns a Virtual DOM node
 * These elements represent a view in a native application or a DOM element on the web
 *
 * Note:
 * React Elements can be created in a number of different ways.
 * During these lessons we will only be using React.createClass({});
 */
const React = require('react-native');
const {View, Text} = React;
const HelloWorld = React.createClass({
    render: function() {
        //TODO: Fill in with a text element containing the words HELLO WORLD!
        return (<View>
                <Text>Hey guys welcome to react again</Text>
        </View>);
    }
});

module.exports = HelloWorld;
