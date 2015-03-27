'use strict';

var React = require('react-native');
var {
  Bundler,
  StyleSheet,
  View,
  Text,
  StatusBarIOS,
  ScrollView
} = React;

var City = require('./pages/City');
var Carousel = require('./components/Carousel');

var Weather = React.createClass({

  componentDidMount() {
    StatusBarIOS.setStyle(StatusBarIOS.Style.lightContent);
  },

  render() {
    return (
      <Carousel width={375} indicatorColor="#ffffff">
        <City title="Boulder" />
        <City title="San Francisco" />
        <City title="New York" />
      </Carousel>
    );
  }
});

var styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  }
});


Bundler.registerComponent('Weather', () => Weather);

module.exports = Weather;
