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
    let snap1 = this.refs['snap1'] as HTMLElement;
    let snap2 = this.refs['snap2'] as HTMLElement;
    let snap3 = this.refs['snap3'] as HTMLElement;
    this.draw(canvas, video, snap1, snap2, snap3);
  }

  shouldComponentUpdate(nextProps: any, nextState: any, context: any) {
    return true;
  };

  componentWillReceiveProps(nextProps: any) {
  }

  componentDidUpdate(prevProps: any, prevState: any, context: any) {

  }

  draw(canvas: HTMLCanvasElement, videoarg: HTMLVideoElement, snap1: HTMLElement, snap2: HTMLElement, snap3: HTMLElement) {
    canvas.width = 800;
    canvas.height = 800;
    var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.rect(0, 0, 800, 800);
    ctx.stroke();

    const video = videoarg
    let videoObj = { "video": true };
    let errBack = function (error: any) {
      console.log("Video capture error: ", error.code);
    };

    video.onloadedmetadata = function (e) {
      // Do something with the video here.
      console.log(e);
    };
    // Put video listeners into place
    if (navigator.getUserMedia) { // Standard
      console.log('standard');
      // Deprecated technique: https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
      // Modern technique: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject
      navigator.getUserMedia(videoObj, function (stream) {
        video.srcObject = stream;
        video.play();
      }, errBack);
    }
    
    snap1.addEventListener("click", function () {
      // ctx.drawImage(video, 0, 0);
      ctx.drawImage(video, 200, 200);
      // ctx.drawImage(video, 0, 0, 1000, 1000);
    });
    snap2.addEventListener("click", function () {
      ctx.drawImage(video, 0, 0, 200, 200);
    });
    snap3.addEventListener("click", function () {
      ctx.drawImage(video, 100, 100, 640, 480, 0, 0, 800, 800);
    });
    // sx,sy 框的坐标 裁剪
    // sw,sh 框的宽高 裁剪
    // dx,dy 图像在canvas上的坐标
    // dw,dh 图像在canvas上的宽高
  }

  toDataUrl() {
    let img = this.refs['toDataURL'] as HTMLImageElement;
    let canvas = this.refs['canvas-demo-drawLine'] as HTMLCanvasElement;
    var org = canvas.toDataURL('image/jpeg', 1); //mimeType quality
    img.src = org;
  }

  toBlob() {
    let img = this.refs['toBlob'] as HTMLImageElement;
    let canvas = this.refs['canvas-demo-drawLine'] as HTMLCanvasElement;
    canvas.toBlob(function (blob) {
      img.src = URL.createObjectURL(blob);
    })
  }

  render() {
    const style = {
      display: 'flex',
    };
    return (
      <div className="float" style={style}>
        <div>
          <video ref="video"></video>
        </div>
        <div>
          <button ref="snap1">截图1</button>
          <button ref="snap2">截图2</button>
          <button ref="snap3">截图3</button>
        </div>
        <div>
          <canvas ref="canvas-demo-drawLine" className="canvas-demo" width="1000" height="500"></canvas>
        </div>
        <div>
          <button ref="toDataUrl" onClick={this.toDataUrl.bind(this)}>toDataUrl</button>
          <button ref="toBlob" onClick={this.toBlob.bind(this)}>toBlob</button>
        </div>
        <div>
          <img ref="toDataURL" />
          <img ref="toBlob" />
        </div>
      </div >
    );
  }
}