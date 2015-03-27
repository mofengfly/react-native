'use strict';

var React = require('react-native');

var { StyleSheet, Text, View } = React;

var Hour = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.time}>{this.props.time}</Text>
        <Text style={styles.icon}>{this.props.icon}</Text>
        <Text style={styles.temperature}>{this.props.temperature}</Text>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    width: 56,
    alignItems: 'stretch',
    flex: 1,
  },
  time: {
    color: '#ffffff',
    flex: 1,
    fontSize: 13,
    textAlign: 'center',
  },
  temperature: {
    color: '#ffffff',
    flex: 1,
    textAlign: 'center',
    fontSize: 16
  },
  icon: {
    color: '#ffffff',
    fontFamily: 'WeatherIcons-Regular',
    textAlign: 'center',
    flex: 1,
  },
});

module.exports = Hour;
