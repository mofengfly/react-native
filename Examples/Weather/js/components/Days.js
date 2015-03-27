'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
} = React;

var Day = require('../components/Day');

var Hours = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Day name="Friday"    icon="&#61452;" max="54" min="34" />
        <Day name="Saturday"  icon="&#61452;" max="41" min="28" />
        <Day name="Sunday"    icon="&#61452;" max="37" min="28" />
        <Day name="Monday"    icon="&#61453;" max="55" min="36" />
        <Day name="Tuesday"   icon="&#61453;" max="52" min="30" />
        <Day name="Wednesday" icon="&#61453;" max="45" min="30" />
        <Day name="Thursday"  icon="&#61453;" max="48" min="36" />
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    height: 200
  },
});

module.exports = Hours;
