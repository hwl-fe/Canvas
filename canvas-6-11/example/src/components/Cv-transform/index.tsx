import React from 'react';
import { any } from 'prop-types';

interface Props {
  storeAction?: any;
  storeState?: any[]
}

interface Element {
  srcObject: any;
}

// const logo1 = require('../view/logo.svg');

export default class Canvas_Video extends React.Component<Props, {}> {
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
    let canvas = this.refs['canvas-demo-drawLine'] as HTMLCanvasElement
    this.draw(canvas);
  }

  shouldComponentUpdate(nextProps: any, nextState: any, context: any) {
    return true;
  };

  componentWillReceiveProps(nextProps: any) {
  }

  componentDidUpdate(prevProps: any, prevState: any, context: any) {

  }

  draw(canvas: HTMLCanvasElement) {
    canvas.width = 800;
    canvas.height = 800;
    var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    // ctx.save();

    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 100, 100);
    ctx.save();

    ctx.transform(1, 2, 0, 0.5, 0, 100);
    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, 100, 100);
    ctx.restore();

    // ctx.transform(1, 1, 0, 1, 0, 200);
    // ctx.fillStyle = 'red';
    // ctx.fillRect(10, 10, 100, 100);
    // ctx.restore();
  }

  render() {
    const style = {
      display: 'flex',
    };
    return (
      <div className="float" style={style}>
        <div>
          <canvas ref="canvas-demo-drawLine" className="canvas-demo" width="1000" height="500"></canvas>
        </div>
      </div >
    );
  }
}