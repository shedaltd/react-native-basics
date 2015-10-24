const React = require('react-native');
const LESSONS_DATA = require('./lesson-data');
const {TouchableOpacity, ListView, Text} = React;

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
            dataSource={this.state.lessons}
            renderRow={(lessonNumber) => (<TouchableOpacity onPress={() => this.props.navigator.push(LESSONS_DATA[lessonNumber])}>
              <Text>
                  {LESSONS_DATA[lessonNumber].name}
              </Text>
            </TouchableOpacity>)}>
        </ListView>);
      }
});

module.exports = Lessons;
