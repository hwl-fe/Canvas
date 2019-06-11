import React from 'react';

interface Props {
  storeAction?: any;
  storeState?: any[]
}

// const logo1 = require('../view/logo.svg');

export default class CanvasTest_1 extends React.Component<Props, {}> {
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
    canvas.width = 1000;
    canvas.height = 1000;
    var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.save();

    ctx.fillStyle = "orange";
    ctx.fillRect(0, 0, 1000, 1000);

    ctx.globalCompositeOperation = (this.refs['globalCom'] as HTMLSelectElement).value;
    // 26种状态

    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 100, 100);


    ctx.globalAlpha = 0.5;
    ctx.fillStyle = "red";
    ctx.fillRect(50, 50, 100, 100);

  }

  handle() {
    let canvas = this.refs['canvas-demo-drawLine'] as HTMLCanvasElement
    this.draw(canvas);
  }

  render() {
    return (
      <div className="float">
        <select ref="globalCom" defaultValue="xor" onChange={this.handle.bind(this)}>
          <option value="xor">xor</option>
          <option value="source-over">source-over</option>
          <option value="source-in">source-in</option>
          <option value="source-out">source-out</option>
          <option value="source-atop">source-atop</option>
          <option value="destination-over">destination-over</option>
          <option value="destination-in">destination-in</option>
          <option value="destination-out">destination-out</option>
          <option value="destination-atop">destination-atop</option>
          <option value="lighter">lighter</option>
          <option value="copy">copy</option>
          <option value="multiply">multiply</option>
          <option value="screen">screen</option>
          <option value="overlay">overlay</option>
          <option value="darken">darken</option>
          <option value="lighten">lighten</option>
          <option value="color-dodge">color-dodge</option>
          <option value="color-burn">color-burn</option>
          <option value="hard-light">hard-light</option>
          <option value="soft-light">soft-light</option>
          <option value="difference">difference</option>
          <option value="exclusion">exclusion</option>
          <option value="hue">hue</option>
          <option value="saturation">saturation</option>
          <option value="color">color</option>
          <option value="luminosity">luminosity</option>
        </select>
        <canvas ref="canvas-demo-drawLine" className="canvas-demo" width="1000" height="500"></canvas>
      </div>
    );
  }
}