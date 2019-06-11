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
    this.draw.bind(this);
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
    var context = canvas.getContext('2d') as CanvasRenderingContext2D;
    var width = canvas.width, height = canvas.height;
    // 动画执行的帧数
    var start = 0, frames = 200;
    // 过渡颜色 蓝色 到 红色
    var fr = parseInt((this.refs['fr'] as HTMLInputElement).value);
    var fg = parseInt((this.refs['fg'] as HTMLInputElement).value);
    var fb = parseInt((this.refs['fb'] as HTMLInputElement).value);
    var from = [fr, fg, fb];
    var tr = parseInt((this.refs['tr'] as HTMLInputElement).value);
    var tg = parseInt((this.refs['tg'] as HTMLInputElement).value);
    var tb = parseInt((this.refs['tb'] as HTMLInputElement).value);
    var to = [tr, tg, tb];
    // 动画算法，这里使用Cubic.easeOut算法
    var cubicEaseOut = function (t: any, b: any, c: any, d: any) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    };
    // 绘制方法
    var drawinner = function () {
      context.clearRect(0, 0, width, height);
      // 计算此时r, g, b数值
      var r = cubicEaseOut(start, from[0], to[0] - from[0], frames);
      var g = cubicEaseOut(start, from[1], to[1] - from[1], frames);
      var b = cubicEaseOut(start, from[2], to[2] - from[2], frames);
      // 可以确定色值
      context.fillStyle = 'rgb(' + [r, g, b].join() + ')';
      context.arc(width / 2, height / 2, height / 2, 0, 2 * Math.PI);
      context.fill();
      // 持续变化
      start++;
      if (start <= frames) {
        requestAnimationFrame(drawinner);
      }
    };
    drawinner();
  }

  handle() {
    let canvas = this.refs['canvas-demo-drawLine'] as HTMLCanvasElement;
    this.draw(canvas);
  }

  render() {
    return (
      <div className="float">
        <span>from</span>
        <input ref="fr" className="text-center" type="number" min="0" max="255" defaultValue="255" />
        <input ref="fg" className="text-center" type="number" min="0" max="255" defaultValue="0" />
        <input ref="fb" className="text-center" type="number" min="0" max="255" defaultValue="0" />
        <br />
        <span>to</span>
        <input ref="tr" className="text-center" type="number" min="0" max="255" defaultValue="0" />
        <input ref="tg" className="text-center" type="number" min="0" max="255" defaultValue="0" />
        <input ref="tb" className="text-center" type="number" min="0" max="255" defaultValue="255" />
        <br />
        <button onClick={this.handle.bind(this)}>color change</button>
        <br />
        <canvas ref="canvas-demo-drawLine" className="canvas-demo" width="1000" height="500"></canvas>
      </div>
    );
  }
}