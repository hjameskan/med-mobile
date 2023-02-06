import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import { addTodo, deleteTodo } from '../redux/actions';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Novo Nordisk</Text>
      <Text>Medication Management App</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
    return {
      todo_list: state.todos.todo_list,
    }
  }

const mapDispatchToProps = { addTodo, deleteTodo }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StartScreen);
