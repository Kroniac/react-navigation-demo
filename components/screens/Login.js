import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';

class Login extends Component {

  tabMenu = () => {
    this.props.navigation.navigate('FirstScreen');
  };

  render() {
    let list = this.props.items.map((item, key) => {
      return <Text key={key}>{item}</Text>;
    });
    return (
      <View style={styles.container}>
        <TextInput
          style={{ width: 200 }}
          placeholder="Enter something"
          onChangeText={val => this.props.onChange(val)}
          value={this.props.value}
        />
        <View>
          <Button title="Add" onPress={() => this.props.onAddItem()} />
          <Button title="Click Me" onPress={this.tabMenu} />
        </View>
        <View>{list}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  return {
    value: state.login.value,
    items: state.login.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: val => dispatch(actions.changeValue(val)),
    onAddItem: () => dispatch(actions.addItem())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
