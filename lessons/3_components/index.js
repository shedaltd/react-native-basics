/**
 * React works by building a in memory representation of the view hierarchy, this is known as the Virtual DOM
 * This abstraction allows us to declaritively represent our views as a tree of functions

 *
 * Components are defined in JSX syntax, which is an extension of regular javascript syntax
 * http://facebook.github.io/react/
 *
 * In HTML the default components available mirror html, so div, span, section, html, body etc... all exist
 *
 * In react-native the default components must be imported from the libary.
 *
 * examples:
 * View - To layout elements correctly
 * Text - To display text
 * TouchableOpacity and TouchableHighlight - For buttons and touch interactions
 * Navigator - for a generic navigator between routes in our application
 *
 * An exhaustive list can be found on https://facebook.github.io/react-native/docs/getting-started.html
 */

const React = require('react-native');
const {View, Text} = React;

// In general yourself to 1 component per Javascript File and use require() to get them. This keeps your code concise and simpler to follow
const SubComponent = require('./SubComponent');

const name = 'Mike Ebinum!';
const Component = React.createClass({
    render() {
        
        return (
            <View>
                <Text>
                {/*TODO: Render your own name, if your names also Benedict Hobart feel free to delete this line*/}
                Hello {name}
            </Text>
            {this.renderSubComponent()}
        </View>);
    },
    renderSubComponent() {
        //TODO: Fill this in
        return <SubComponent />
    }
});

module.exports = Component;
