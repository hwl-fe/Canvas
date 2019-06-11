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
    canvas.height = 500;
    var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(200, 20);
    ctx.lineTo(200, 200);
    ctx.closePath();
    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle = "#ccddee";
    // 圆心 半径 开始角度 结束角度 顺/逆
    ctx.arc(200, 200, 100, 0 * Math.PI, Math.PI, true) //逆时针
    // ctx.lineTo(300, 300);
    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.arc(200, 200, 90, 0, 1.5 * Math.PI, false) //顺时针
    // ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arcTo(200, 400, 100, 300, 30);
    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle = "orange";
    ctx.rect(200, 200, 5, 5);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "orange";
    ctx.rect(200, 400, 5, 5);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "orange";
    ctx.rect(100, 300, 5, 5);
    ctx.stroke();

    // ctx.beginPath();
    // ctx.fillStyle = "black";
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "green";
    ctx.fillRect(140, 300, 100, 100);
    ctx.strokeRect(160, 360, 100, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="gray";
    ctx.ellipse(200, 200, 60, 100, 0.5 * Math.PI, 0, Math.PI, true);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(500, 500);
    ctx.quadraticCurveTo(600, 600, 550, 650);
    ctx.stroke();

    ctx.strokeStyle = "orange";
    ctx.beginPath();
    ctx.rect(500, 500, 5, 5);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(600, 600, 5, 5);
    ctx.strokeStyle = "orange";
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(550, 650, 5, 5);
    ctx.strokeStyle = "orange";
    ctx.stroke();

    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(500, 500);
    ctx.bezierCurveTo(800, 600, 510, 700, 600, 800);
    ctx.stroke();

    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    ctx.rect(500, 500, 5, 5);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(800, 600, 5, 5);
    ctx.strokeStyle = "blue";
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(510, 700, 5, 5);
    ctx.strokeStyle = "blue";
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(600, 800, 5, 5);
    ctx.strokeStyle = "blue";
    ctx.stroke();

    // ctx.stroke();

    // ctx.strokeRect(120, 300, 5, 5);

    // ctx.closePath();
    // ctx.stroke();

    // ctx.lineTo(20, 200);
    // ctx.lineTo(20, 20);

    // ctx.lineWidth = 5;
    // ctx.strokeStyle = "red";
    // ctx.fillStyle = "black";
    // ctx.strokeStyle = "red";
    ctx.lineCap = "round";//butt-round-square
    ctx.lineJoin = "miter";//miter-bevel-round
    ctx.stroke();
  }

  render() {
    const style = {
      width: "300px",
      height: "300px"
    }
    return (
      <div className="float">
        <canvas ref="canvas-demo-drawLine"></canvas>
      </div>
    );
  }
}