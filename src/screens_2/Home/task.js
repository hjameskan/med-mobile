/**
 * Copyright (c) 2023 Xiaxi Shen
 */

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Title from './title';
import Content from './content';

/**
 * A React Native class component that renders a task item with a title and content.
 *
 * Props:
 * - time (string): The time of day that the task is scheduled for (e.g. 'MORNING').
 *
 * State:
 * - showContent (boolean): A flag that indicates whether the task content should be visible or hidden.
 *
 * Methods:
 * - toggle(): A method that toggles the visibility of the task content when the user taps the title.
 *
 */
export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
    };
  }

  toggle = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}));
  };
  render() {
    return (
      <View style={styles.items}>
        <Title text={this.props.time} toggleContent={this.toggle} />
        {this.state.showContent && <Content />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    // textAlign: 'center',
    justifyContent: 'center',

    marginBottom: 20,
  },
  date: {
    fontSize: 30,
  },
  items: {
    marginTop: 20,
  },
});
