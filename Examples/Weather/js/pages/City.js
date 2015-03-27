'use strict';

var React = require('react-native');
var { View, StyleSheet, ScrollView } = React;

var Conditions = require('../components/Conditions'),
    Hours = require('../components/Hours'),
    Days = require('../components/Days');

var City = React.createClass({

  getInitialState() {
    return {
      offset: 0
    }
  },

  render() {
    return (
      <View style={styles.container}>
        <Conditions {...this.props} offset={this.state.offset} />
        <Hours offset={this.state.offset} />
        <Days />
      </View>
    );
    // <ScrollView
    //   // contentContainerStyle={}
    //   automaticallyAdjustContentInsets={false}
    //   showsHorizontalScrollIndicator={false}
    //   onScroll={this.onScroll}
    //   throttleScrollCallbackMS={16}
    // >
    // </ScrollView>
  },

  onScroll: function(e) {

    this.setState({
      offset: e.nativeEvent.contentOffset.y
    });
    console.log("Scroll", e.nativeEvent.contentOffset.y)
  }
});

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: 375,
    backgroundColor: '#1c2036',
  }
});

module.exports = City;
