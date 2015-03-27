'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var Hour = require('../components/Hour');

var Hours = React.createClass({

  getDefaultProps() {
    return {
      offset: 0
    }
  },

  render() {
    var marginTop = 300;

    if (this.props.offset <= 0) { marginTop = 300 }
    else if (this.props.offset > 300) marginTop = 0;
    else marginTop = 300 - this.props.offset;


    return (
      <View style={[styles.container, {marginTop: marginTop}]}>
        <ScrollView horizontal={true} style={styles.hourScroll} contentContainerStyle={styles.scrollContainer} automaticallyAdjustContentInsets={false}>
          <Hour time="Now" icon="&#61442;" temperature="36" />
          <Hour time="10AM" icon="&#61443;" temperature="37" />
          <Hour time="11AM" icon="&#61444;" temperature="38" />
          <Hour time="12PM" icon="&#61442;" temperature="36" />
          <Hour time="1PM" icon="&#61443;" temperature="37" />
          <Hour time="2PM" icon="&#61444;" temperature="38" />
          <Hour time="3PM" icon="&#61442;" temperature="36" />
          <Hour time="4PM" icon="&#61443;" temperature="37" />
          <Hour time="5PM" icon="&#61444;" temperature="38" />
          <Hour time="6PM" icon="&#61444;" temperature="38" />
          <Hour time="7PM" icon="&#61444;" temperature="38" />
          <Hour time="8PM" icon="&#61444;" temperature="38" />
        </ScrollView>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 300,
    flexDirection: 'column',
  },
  hourScroll: {
    borderColor: '#8c8e9a',
    borderWidth: 0.5,
    marginLeft: -1,
    marginRight: -1,
  },
  scrollContainer: {
    borderLeftWidth: 0,
    paddingLeft: 5,
    flex: 1,
    justifyContent: 'space-between',
  },
});

module.exports = Hours;
