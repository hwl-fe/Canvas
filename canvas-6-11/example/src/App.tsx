import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import './App.css';
import LayoutRoot from './view/LayoutRoot';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import * as actionTypes from "./actions/store";

interface Props {
  AppName?: string;
  Author?: string;
  onIncrement?: () => void;
  onDecrement?: () => void;
  Test?: any[];
}
export class App extends React.Component {
  /**
   *
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      testApp: {
        name: "canvas-test-state"
      }
    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
        <LayoutRoot></LayoutRoot>
      </div>
    );
  }
}

export function mapStateToProps(state: any) {
  return {
    AppName: "Canvas-test",
    Author: "XianweiHuang",
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<actionTypes.Opreate>
) {
  return {
    onIncrement: () => {
      dispatch(actionTypes.add());
    },
    onDecrement: () => {
      dispatch(actionTypes.rm());
    }
  };
}

export function mergeProps(
  stateProps: Object,
  dispatchProps: Object,
  ownProps: Object
) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(App)
