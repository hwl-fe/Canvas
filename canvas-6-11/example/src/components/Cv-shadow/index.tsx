import React from 'react';
import { default as logo } from '../../view/logo.svg';

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
    let canvas = this.refs['canvas-demo-drawLine'] as HTMLCanvasElement;
    this.draw(canvas);
  }

  shouldComponentUpdate(nextProps: any, nextState: any, context: any) {
    return true;
  };

  componentWillReceiveProps(nextProps: any) {
  }

  componentDidUpdate(prevProps: any, prevState: any, context: any) {

  }

  draw(canvas: HTMLCanvasElement, ) {
    canvas.width = 1000;
    canvas.height = 1000;
    var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.save();

    ctx.shadowColor = "blue";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    ctx.fillStyle = "green";
    ctx.fillRect(400, 400, 200, 200);

  }

  render() {
    return (
      <div className="float">
        <canvas ref="canvas-demo-drawLine" className="canvas-demo" width="1000" height="500"></canvas>
      </div>
    );
  }
}