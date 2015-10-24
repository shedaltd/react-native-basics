const React = require('react-native');
const {AppRegistry, StyleSheet, Navigator, Text, View} = React;
const Lessons = require('./lessons');
const AwesomeProject = React.createClass({
  render: function() {
    return (<Navigator
      initialRoute={{
        name: 'Home',
        component: Lessons
      }}
      sceneStyle={styles.container}
      renderScene={(route, navigator) => {
        const Component = route.component;
        return <Component navigator={navigator}/>
      }}
    />);
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
