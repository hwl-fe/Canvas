import React, { Context } from 'react';

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
    let _this = this
    let canvas = this.refs['canvas-demo-drawLine'] as HTMLCanvasElement
    var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.draw(ctx);
  }



  shouldComponentUpdate(nextProps: any, nextState: any, context: any) {
    return true;
  };

  componentWillReceiveProps(nextProps: any) {
  }

  componentDidUpdate(prevProps: any, prevState: any, context: any) {

  }

  handleChange() {
    let canvas = this.refs['canvas-demo-drawLine'] as HTMLCanvasElement;
    let range = this.refs['changeLetter'] as HTMLInputElement;
    var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.style.letterSpacing = range.value + 'px';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '32px sans-serif';
    this.draw(ctx);
  }

  wrapText(context: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth?: number, lineHeight?: any) {
    if (typeof text != 'string' || typeof x != 'number' || typeof y != 'number') {
      return;
    }
    var context = context;
    var canvas = context.canvas;

    if (typeof maxWidth == 'undefined') {
      maxWidth = maxWidth || 300;
    }
    if (typeof lineHeight == 'undefined') {
      var lh = window.getComputedStyle(canvas).lineHeight || window.getComputedStyle(document.body).lineHeight
      lineHeight = canvas && lh && parseInt(lh);
    }

    // 字符分隔为数组
    var arrText = text.split('');
    var line = '';

    for (var n = 0; n < arrText.length; n++) {
      var testLine = line + arrText[n];
      var metrics = context.measureText(testLine);
      console.log(metrics);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = arrText[n];
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
  };

  draw(ctx: CanvasRenderingContext2D) {
    // canvas.width = 1000;
    // canvas.height = 1000;    
    this.wrapText(ctx, '毕竟西湖六月中，春光不与四十同。接天莲叶无穷碧，映日荷花别样红。', 0, 100, 1000)

  }

  render() {
    const style = {
      width: "300px"
    }
    return (
      <div className="float">
        <canvas ref="canvas-demo-drawLine" className="canvas-demo" width="1000" height="500" style={{ "lineHeight": "32px" }}></canvas>
        <input ref="changeLetter" type="range" min="-10" max="30" step="1" defaultValue="12" style={style} onChange={this.handleChange.bind(this)}></input>
      </div >
    );
  }
}