/**
 * Styling in React Native is done using styleSheets although it can be done inline
 * The styles available in react native are a subset of those available in the browser, and different components also have access to different styles it can use
 *
 * The platform implements a faithful implementation of Flexbox and is the way you maintain layouts in react 
 *
 * Below are a set of layouts you should attempt to build as they occur frequently in practice, flexbox is by far the most complex part of styling react, but that doesn't emean you shouldnt be aware of whats available to the styling of your text/view/image components
 *
 * Styles for reference
 * ===================
 * https://facebook.github.io/react-native/docs/view.html
 * https://facebook.github.io/react-native/docs/image.html
 * https://facebook.github.io/react-native/docs/text.html
 * https://facebook.github.io/react-native/docs/transforms.html
 * https://facebook.github.io/react-native/docs/flexbox.html
 *
 * How to flexbox
 * ==============
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */
const React = require('react-native');
const {View, Text, StyleSheet, TouchableOpacity} = React;
const StylesAndLayout = React.createClass({
    getInitialState: function(){
        return {
            activeComponent: <CenterAlign/>
        };
    },
    render: function() {
        return (<View style={styles.container}>
            <View style={styles.tabs}>
                <TouchableOpacity onPress={() => this.setState({activeComponent: <CenterAlign/>})} style={styles.tab}>
                    <Text>Center Align</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({activeComponent: <TwoColumns/>})} style={styles.tab}>
                    <Text>Two Columns</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({activeComponent: <HeaderFooter/>})} style={styles.tab}>
                    <Text>Header+Footer</Text>
                </TouchableOpacity>
            </View>
            {this.state.activeComponent}
        </View>);
    }
});

const CenterAlign = React.createClass({
    render: function(){
        //TODO: Style this component
        return (<View>
            <Text>Center Text</Text>
        </View>);
    }
});

const TwoColumns = React.createClass({
    render: function(){
        //TODO: Style this component
        return (<View>
            <View>
                <Text>Column 1</Text>
            </View>
            <View>
                <Text>Column 2</Text>
            </View>
        </View>);
    }
});

const HeaderFooter = React.createClass({
    render: function(){
        //TODO: Style this component
        return (<View>
            <View><Text>Header</Text></View>
            <View><Text>Content</Text></View>
            <View><Text>Footer</Text></View>
        </View>);
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 20
    },
    tabs: {
        flexDirection: 'row'
    },
    tab: {
        margin: 10
    } 
    //TODO: Fill out Styles for the 3 components, HeaderFooter, TwoColumns, CenterAlign
});

module.exports = StylesAndLayout;
