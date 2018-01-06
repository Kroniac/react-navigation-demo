import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class FirstScreen extends Component {
  render() {
    let list = this.props.items.map((item, key) => (
      <Text key={key} style={styles.welcome}>
        {item}
      </Text>
    ));
    return <View style={styles.container}>{list}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

const mapStateToProps = state => {
  return {
    items: state.login.items
  };
};

export default connect(mapStateToProps)(FirstScreen);
