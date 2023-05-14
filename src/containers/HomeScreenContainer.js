/**
 * Copyright (c) 2023 Xiaxi Shen
 */

import React from "react";
import { connect } from "react-redux";
import Home from "../screens/HomeScreen";

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTask: (task) => dispatch({type: 'ADD_TASK', payload: task}),
    onRemoveTask: (taskId) => dispatch({type: 'REMOVE_TASK', payload: taskId})
  };
};

const HomeScreenContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeScreenContainer;
