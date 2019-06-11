import React from 'react';

interface Props {
  storeAction?: any;
  storeState?: any[]
}

// const logo1 = require('../view/logo.svg');

export default class CanvasTest_2 extends React.Component<Props, {}> {
  /**
   *
   */
  constructor(props: Props, context: any) {
    super(props);
    this.state = {
      abc: '123'
    }
  }
  componentDidMount() {
    this.draw(this.refs['canvas-demo-2']);
  }

  // shouldComponentUpdate(nextProps: any, nextState: any, context: any) {
  //   return true;
  // };

  componentWillReceiveProps(nextProps: any) {
    console.log('receive');
    console.log(nextProps);
  }

  componentDidUpdate(prevProps: any, prevState: any, context: any) {
    console.log('componentDidUpdate');
    console.log(prevProps);
    console.log(this.props);
    console.log(prevState);
    console.log(this.state);

  }

  draw(canvas: any) {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
  onDecrement() {
    let { rm } = this.props.storeAction;
    let state = rm();
    this.setState({ abc: state });
  }
  onIncrement() {
    let { add } = this.props.storeAction;
    let state = add(Math.random());
    this.setState({ abc: state });
  }

  render() {
    let { storeState } = this.props;
    let state = '';
    if (storeState) {
      state = storeState.join('-')
    }
    return (
      <div className="float">
        <div className="layoutRoot">
          <div>{state}</div>
          <button onClick={this.onDecrement.bind(this)}>-</button>
          <button onClick={this.onIncrement.bind(this)}>+</button>
        </div>
        <canvas ref="canvas-demo-2" className="canvas-demo"></canvas>
      </div>
    );
  }
}