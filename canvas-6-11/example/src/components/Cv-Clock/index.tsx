import React, { Context } from 'react';
import { canvObject, Line, Circle } from './CanvasObject'

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



  draw(ctx: CanvasRenderingContext2D) {
    var canvas = ctx.canvas;
    // 圆盘
    const circle = new Circle(ctx);
    circle.x = 100;
    circle.y = 100
    circle.radius = 90;
    circle.fill = true;
    circle.borderWidth = 2;
    circle.fillColor = '#ffffff';
    // 时针
    var hour = new Line(ctx);
    hour.ctx = ctx;
    hour.x = 100;
    hour.y = 100;
    hour.borderColor = "#000000";
    hour.borderWidth = 10;
    hour.rotation = 0;
    hour.start = [0, 20];
    hour.end = [0, -50];
    // 分针
    var minute = new Line(ctx);
    minute.ctx = ctx;
    minute.x = 100;
    minute.y = 100;
    minute.borderColor = "#333333";
    minute.borderWidth = 7;
    minute.rotation = 0;
    minute.start = [0, 20];
    minute.end = [0, -70];
    //秒针
    var seconds = new Line(ctx);
    seconds.ctx = ctx;
    seconds.x = 100;
    seconds.y = 100;
    seconds.borderColor = "#ff0000";
    seconds.borderWidth = 4;
    seconds.rotation = 0;
    seconds.start = [0, 20];
    seconds.end = [0, -80];
    //中心圆 固定时分秒
    var center = new Circle(ctx);
    center.ctx = ctx;
    center.x = 100;
    center.y = 100;
    center.radius = 5;
    center.fill = true;
    center.borderColor = 'orange';

    var ls: any[] = [];
    for (var i = 0, cache; i < 12; i++) {
      //刻度
      cache = ls[i] = new Line(ctx);
      cache.ctx = ctx;
      cache.x = 100;
      cache.y = 100;
      cache.borderColor = "orange";
      cache.borderWidth = 2;
      cache.rotation = i * 30;
      cache.start = [0, 70];
      cache.end = [0, 80];
    }
    setInterval(function () {
      // 清除画布
      ctx.clearRect(0, 0, 200, 200);
      // 填充背景色
      ctx.fillStyle = 'orange';
      ctx.fillRect(0, 0, 200, 200);
      // 表盘
      circle.update();
      // 刻度
      for (var i = 0; cache = ls[i++];) {
        cache.update();
      }
      // 时针
      hour.rotation = (new Date()).getHours() * 30;
      hour.update();
      // 分针
      minute.rotation = (new Date()).getMinutes() * 6;
      minute.update();
      // 秒针
      seconds.rotation = (new Date()).getSeconds() * 6;
      seconds.update();
      // 中心圆
      center.update();
    }, 1000);
  }



  render() {
    const style = {
      width: "300px"
    }
    return (
      <div className="float">
        <canvas ref="canvas-demo-drawLine" className="canvas-demo" width="1000" height="500" style={{ "lineHeight": "32px" }}></canvas>
      </div >
    );
  }
}