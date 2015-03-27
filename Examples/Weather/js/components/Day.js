'use strict';

var React = require('react-native');

var { StyleSheet, Text, View } = React;

var Day = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{this.props.name}</Text>
        <Text style={styles.icon}>{this.props.icon}</Text>
        <Text style={styles.max}>{this.props.max}</Text>
        <Text style={styles.min}>{this.props.min}</Text>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingTop: 8,
    paddingRight: 10
  },
  name: {
    color: '#ffffff',
    flex: 1,
    fontSize: 16,
  },
  icon: {
    color: '#ffffff',
    fontFamily: 'WeatherIcons-Regular',
    width: 100,
    textAlign: 'left',
    fontSize: 16,
  },
  max: {
    color: '#ffffff',
    width: 30,
    textAlign: 'center',
    fontSize: 16,
  },
  min: {
    width: 50,
    textAlign: 'center',
    fontSize: 16,
    color: '#8c8e9a',
  },
});

module.exports = Day;
