import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';
import * as storeAction from "../actions/store";
import CanvasTest from "../components/Cv-test1";

function mapStateToProps(state: any) {
  return {
    AppName: "Canvas-test",
    Author: "XianweiHuang",
    storeState: state.store
  };
}

function mapDispatchToProps(
  dispatch: Dispatch<storeAction.Opreate>
) {
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