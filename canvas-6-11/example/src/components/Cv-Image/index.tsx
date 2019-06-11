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
    let video = this.refs['video'] as HTMLVideoElement
    let snap = this.refs['snap'] as HTMLElement
    this.draw(canvas, video, snap);
  }

  shouldComponentUpdate(nextProps: any, nextState: any, context: any) {
    return true;
  };

  componentWillReceiveProps(nextProps: any) {
  }

  componentDidUpdate(prevProps: any, prevState: any, context: any) {

  }

  draw(canvas: HTMLCanvasElement, videoarg: HTMLVideoElement, snaparg: HTMLElement) {
    canvas.width = 1000;
    canvas.height = 1000;
    var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.save();
  }

  render() {
    return (
      <div className="float">
        <canvas ref="canvas-demo-drawLine" className="canvas-demo" width="1000" height="500"></canvas>
      </div>
    );
  }
}