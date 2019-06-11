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
    var img = new Image();
    //方式一：import tsIcon from '../images/typescript.jpeg';
    //方式二：const tsIcon = require('../images/typescript.jpeg');
    //使用方式一：<img src={tsIcon} alt="" />
    //使用方式二：<div style={{background: `url(${tsIcon}) no-repeat`}}></div>
    //使用方式三：const styles = { test: { background: `url(${tsIcon}) no-repeat center` }}render() { return ( <div style={styles.test}></div> )}
    img.src = logo;
    img.addEventListener('load', function (e) {
      // var ctx;
      var w = img.width,
        h = img.height;
      var offsetX = canvas.offsetLeft,
        offsetY = canvas.offsetTop;
      var mousedown = false;
      function layer(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'gray';
        ctx.fillRect(0, 0, w, h);
      }

      function eventDown(e: any) {
        e.preventDefault();
        mousedown = true;
      }

      function eventUp(e: any) {
        e.preventDefault();
        mousedown = false;
        var data = ctx.getImageData(0, 0, w, h).data;
        console.log(ctx.getImageData(0, 0, w, h))
        console.log(data)
        for (var i = 0, j = 0; i < data.length; i += 4) {
          if (data[i] && data[i + 1] && data[i + 2] && data[i + 3]) {
            j++;
          }
        }
        if (j <= w * h * 0.3) {
          alert('ok');
        }
      }

      function eventMove(e: any) {
        e.preventDefault();
        if (mousedown) {
          if (e.changedTouches) {
            e = e.changedTouches[e.changedTouches.length - 1];
          }
          var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0,
            y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;

          ctx.beginPath()
          ctx.arc(x, y, 20, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      canvas.width = w;
      canvas.height = h;
      canvas.style.backgroundImage = 'url(' + img.src + ')';
      ctx.fillStyle = 'transparent';
      ctx.fillRect(0, 0, w, h);
      layer(ctx);

      ctx.globalCompositeOperation = 'destination-out';
      //ctx.globalCompositeOperation = 'lighter';

      canvas.addEventListener('touchstart', eventDown);
      canvas.addEventListener('touchend', eventUp);
      canvas.addEventListener('touchmove', eventMove);
      canvas.addEventListener('mousedown', eventDown);
      canvas.addEventListener('mouseup', eventUp);
      canvas.addEventListener('mousemove', eventMove);
    });

  }

  render() {
    return (
      <div className="float">
        <canvas ref="canvas-demo-drawLine" className="canvas-demo" width="1000" height="500"></canvas>
      </div>
    );
  }
}