/**
 * React works by building a in memory representation of the view hierarchy, this is known as the Virtual DOM
 * This abstraction allows us to declaritively represent our views as a tree of functions
 *
 *
 * Components are defined in JSX syntax, which is an extension of regular javascript syntax
 * http://facebook.github.io/react/
 *
 * In HTML the default components available mirror html, so div, span, section, html, body etc... all exist
 *
 * In react-native the default components must be imported from the libary examples include:
 *
 * View - To layout elements correctly
 * Text - To display text
 * TouchableOpacity and TouchableHighlight - For buttons and touch interactions
 * Navigator - for a generic navigator between routes in our application
 *
 * An exhaustive list can be found on https://facebook.github.io/react-native/docs/getting-started.html
 *
 * Fix the code below to render the 'subcomponent'
 */

const React = require('react-native');
const {View, Text} = React;

// This is how you define a Component in React, it has a render method which returns a UI-element
// const SubComponent = React.createClass({
//     render() {
//         return (<View>
//             <Text>SubComponent</Text>
//         </View>);
//     }
// });

const Components = React.createClass({
    render() {
        return (<View>
            <Text>
                Hello World
            </Text>
            {this.renderSubComponent()}
        </View>);
    }

    renderSubComponent() {
        return <SubComponent/>;
    }
});

module.exports = Components;
