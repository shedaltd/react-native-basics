/**
 * React + React-native have a variety of tools that make development simple
 *
 * With the IOS simulator Pressing <Cmd + D> will open the react-native dev tools
 *
 * Reload: Reloads the app <Cmd + R>
 * Enable Chrome Debugging: Causes the javascript code to be run in chrome, this makes it easy to debug our javascript code
 * Live Reload - Reloads app when the bundle changes, (our javascript code)
 * Start systrace - Records stack tract of the application in the simulator, awesome for performance testing
 * Show FPS monitor - displays current FPS of the app, this is split into two sections UI and JS
 *                         +UI is IOS stuff
 *                         +JS is the stuff we will write
 * Show Inspector - Layout inspector for the app, allows us to highlight things and see how the layout is working
 */

const React = require('react-native');
const {View, TouchableOpacity, Text, StyleSheet} = React;
const ToolsAndWorkflow = React.createClass({
    getInitialState: function () {
        return {
            i: 0,
            x: 34
        };
    },
    render: function() {
        console.log('Render Method');
        return (<View style={[styles.container, {backgroundColor: 'red'}]}>
            <Text>Text Content</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button}>
                    <Text>No</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Yes</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={this.lag}>
                <Text>Create UI LAG</Text>
            </TouchableOpacity>
            <Text>{this.state.i}</Text>
        </View>);
    },
    lag: function () {
        for(let i = 0; i < 99999; i++) {

            setTimeout(() => this.setState({i: i}));
        }
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        flex: 1,
        margin: 5
    },
    textCenter: {
        textAlign: 'center'
    }
});


module.exports = ToolsAndWorkflow;
