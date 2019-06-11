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

    ctx.font = "48px serif";
    ctx.textAlign = "left";
    ctx.textBaseline = 'alphabetic';
    ctx.direction = "rtl";
    ctx.fillStyle = "green";
    ctx.fillText("Hello world", 10, 100);

    ctx.strokeStyle = "blue";
    ctx.strokeText("Hello world", 10, 150);

    // textBaseline
    // top
    // 文本基线在文本块的顶部。
    // hanging
    // 文本基线是悬挂基线。
    // middle
    // 文本基线在文本块的中间。
    // alphabetic
    // 文本基线是标准的字母基线。
    // ideographic
    // 文字基线是表意字基线；如果字符本身超出了alphabetic 基线，那么ideograhpic基线位置在字符本身的底部。
    // bottom
    // 文本基线在文本块的底部。 与 ideographic 基线的区别在于 ideographic 基线不需要考虑下行字母。


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