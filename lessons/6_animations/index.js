const React = require('react-native');
const {View, Text, TouchableOpacity, StyleSheet} = React;
const ReactMotion = require('react-motion/native');
const {Motion, spring} = ReactMotion;
const Animations = React.createClass({
    render() {
        return (<View style={styles.container}>
            {/*TODO: Add a onPress listener and animate the box to the location of the touch using the transform style*/}
        </View>);
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0E8',
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        padding: 20
    },
    box: {
        backgroundColor: '#80B5C7',
        height: 50,
        width: 50,
        borderRadius: 5
    }
});
module.exports = Animations;
