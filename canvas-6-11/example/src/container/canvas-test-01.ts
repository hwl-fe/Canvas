import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';
import * as storeAction from "../actions/store";
import CanvasTest from "../components/Cv-test";

function mapStateToProps(state: any) {
  console.log('mapStateProps');
  console.log(state);
  return {
    AppName: "Canvas-test",
    Author: "XianweiHuang",
    storeState: state.store
  };
}

function mapDispatchToProps(
  dispatch: Dispatch<storeAction.Opreate>
) {
  console.log('mapDispatchToProps');
  return {
    storeAction: bindActionCreators(storeAction, dispatch)
  };
}

function mergeProps(
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
)(CanvasTest)