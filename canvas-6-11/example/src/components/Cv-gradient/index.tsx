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

    var gradient1 = ctx.createLinearGradient(0, 0, 200, 0);
    gradient1.addColorStop(0, "green");
    gradient1.addColorStop(0.2, "red");
    gradient1.addColorStop(1, "blue");
    ctx.fillStyle = gradient1;
    ctx.fillRect(10, 200, 500, 500);

    var gradient = ctx.createRadialGradient(100, 100, 100, 100, 100, 0);
    gradient.addColorStop(0, "white");
    gradient.addColorStop(1, "green");
    ctx.fillStyle = gradient;
    ctx.fillRect(10, 0, 200, 200);
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