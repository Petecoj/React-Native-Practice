import React, { Component } from 'react';
import { View } from 'react-native';

const styles = {
  top: {
    backgroundColor: 'red',
    flex: 1,
  },

  middle: {
    flex: 1,
    backgroundColor: 'orange',
  },

  bottom: {
    backgroundColor: 'green',
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: 'black',
  },
};

class FlexPractice extends Component {
    static navigationOptions = {
      title: 'Flex',
    }

    render() {
      const {
        container,
        top,
        middle,
        bottom,
      } = styles;
      return (
        <View style={container}>
          <View style={top} />
          <View style={middle} />
          <View style={bottom} />
        </View>
    );
}
}

export default FlexPractice;