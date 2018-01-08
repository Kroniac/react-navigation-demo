import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';

class FirstScreen extends Component {
  render() {
    let list = this.props.items.map((item, key) => (
      <Text key={key} style={styles.welcome}>
        {item}
      </Text>
    ));
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
          data={this.props.items}
          renderItem={item => <Text style={styles.welcome}>{item.item}</Text>}
          keyExtractor={(item, id) => id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
