const React = require('react-native');
const {View, Text, TouchableOpacity, StyleSheet} = React;
const ReactMotion = require('react-motion/native');
const {Motion, spring} = ReactMotion;
const Animations = React.createClass({
    getInitialState: () => ({open: false}),
    render() {
        return (<View style={styles.container}>
            {/*TODO: Extend the component below so it doesn't just animate left and right, but up and down aswell.
                after that is done animate it so it will go to where the user clicks on the screen*/}
            <Motion style={{translateX: spring(this.state.open ? 200 : 0)}}>
                {({translateX}) => (
                    <View style={[styles.box, {transform: [{translateX}]}]}/>
                )}
            </Motion>
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
