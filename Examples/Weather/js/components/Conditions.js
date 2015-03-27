'use strict';

var React = require('react-native');

var { StyleSheet, Text, View } = React;

var Conditions = React.createClass({
  getDefaultProps() {
    return {
      offset: 0
    }
  },

  render() {
    var opacity = 1,
        height = 300;

    if (this.props.offset <= 0) { opacity = 1; }
    else if (this.props.offset > 65) opacity = 0;
    else opacity = (1 - (this.props.offset/65));

    if (this.props.offset <= 0) { height = 300 }
    else if (this.props.offset > 150) height = 150;
    else height = 150 + ((1 - (this.props.offset/130)) * 150);


    return (
      <View style={[styles.top, {height: height}]}>
        <Text style={styles.icon}>&#61442;</Text>
        <Text style={styles.city}>{this.props.title}</Text>
        <Text style={styles.conditions}>Mostly Clear</Text>
        <View style={[styles.temperature, {opacity: opacity}]}>
          <Text style={styles.temperatureTxt}>37</Text>
          <Text style={styles.deg}>&deg;</Text>
        </View>
        <View style={styles.today}>
          <Text style={styles.day}>Thursday</Text>
          <Text style={styles.day2}>Today</Text>
        </View>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  top: {
    height: 300,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  icon: {
    fontFamily: 'WeatherIcons-Regular',
    color: 'rgba(255,255,255,0.05)',
    fontSize: 180,
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: 'transparent',
    top: 30,
    left: 0,
    right: 0,
    bottom: 0
  },
  city: {
    fontSize: 32,
    fontFamily: 'HelveticaNeue',
    marginBottom: 0,
    color: '#ffffff',
  },
  conditions: {
    fontSize: 18,
    marginBottom: 0,
    color: '#ffffff',
  },
  temperature: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  temperatureTxt: {
    fontSize: 100,
    fontFamily: "HelveticaNeue-UltraLight",
    color: '#ffffff',
  },
  deg: {
    fontSize: 45,
    color: '#ffffff',
    fontFamily: 'HelveticaNeue-Thin',
    lineHeight: 67
  },
  today: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 5,
    left: 20
  },
  day: {
    paddingRight: 8,
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  day2: {
    color: '#8c8e9a',
    fontSize: 16,
  },
});

module.exports = Conditions;
