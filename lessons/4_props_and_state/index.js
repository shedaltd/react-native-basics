/**
 * Data flow in react is managed in two ways
 * 1. State
 * 2. Props
 *
 * State is used to maintain a components internal state, for example a text input field that knows its own value
 * Props are used to control a component; style and onPress are examples of props
 *
 * In general if it is possible to make your component more generic by moving logic into the properties of the component as opposed to state, it should be done
 * By removing state completely from your component you can guarentee that your component is side-effect free, so it will render the same as long as the props are the same
 * By migrating state into props it opens up more possibilites for you component to be reused in the future
 *
 * The objective below is to refactor the children of this component into two components
 * "Display" and "Button"
 * this requires you to take advantage of props and refactor functionality into the props
 */
const React = require('react-native');
const {View, Text, TouchableOpacity} = React;
const PropsAndState = React.createClass({
    getInitialState: function(){
        return {
            counter: 1
        };
    },
    render: function() {
        return (<View>
            <Text>
                {this.state.counter}
            </Text>
            <TouchableOpacity onPress={() => this.setState({counter: this.state.counter + 1})}>
                <Text>
                    Increment
                </Text>
            </TouchableOpacity>
        </View>);
    }
});

module.exports = PropsAndState;
