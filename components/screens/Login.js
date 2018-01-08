import React, { Component } from 'react';
import {
  ScrollView,
  Button,
  TextInput,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import * as actions from '../../store/actions/actions';

class Login extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => <Icon name="md-map" size={25} />,
      headerLeft: (
        <Icon
          name="md-list"
          size={25}
          style={{ padding: 20 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      )
    };
  };

  tabMenu = () => {
    this.props.navigation.navigate('FirstScreen');
  };

  onChangeHandler = val => {
    this.props.onChange(val);
  };

  onAddItemHandler = () => {
    this.props.onAddItem();
  };

  render() {
    let list = this.props.items.map((item, key) => {
      return <Text key={key}>{item}</Text>;
    });
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <TextInput
            style={{ width: 200 }}
            placeholder="Enter something"
            onChangeText={this.onChangeHandler}
            value={this.props.value}
          />
          <View>
            <Button title="Add" onPress={this.onAddItemHandler} />
            <Button title="Click Me" onPress={this.tabMenu} />
          </View>
          <View>{list}</View>
        </View>
      </ScrollView>
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
