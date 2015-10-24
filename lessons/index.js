const React = require('react-native');
const LESSONS_DATA = require('./lesson-data');
const {TouchableOpacity, ListView, Text, StyleSheet} = React;

const Lessons = React.createClass({
    getInitialState: function () {
        let lessons = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
        const lessonIndexes = [];
        for (var i = 0; i < LESSONS_DATA.length; i++) {
          lessonIndexes.push(i);
        };
        return {
          lessons: lessons.cloneWithRows(lessonIndexes)
        }
      },
      render: function () {
        return (<ListView
            contentContainerStyle={styles.container}
            dataSource={this.state.lessons}
            renderRow={(lessonNumber) => (<TouchableOpacity onPress={() => this.props.navigator.push(LESSONS_DATA[lessonNumber])}>
              <Text>
                  {LESSONS_DATA[lessonNumber].name}
              </Text>
            </TouchableOpacity>)}>
        </ListView>);
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


module.exports = Lessons;
