export class canvObject {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  rotation: number;
  borderWidth: number;
  borderColor: string;
  fill: boolean | number;
  fillColor: string;
  /**
   *
   */
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.rotation = 0;
    this.borderWidth = 2;
    this.borderColor = '#000000';
    this.fill = false;
    this.fillColor = '#ff0000';
  }
  update() {
    if (!this.ctx) {
      throw new Error('你没有指定ctx对象。');
    }
    var ctx = this.ctx //将全局的ctx赋值给局部
    ctx.save();
    ctx.lineWidth = this.borderWidth;
    ctx.strokeStyle = this.borderColor;
    ctx.fillStyle = this.fillColor;
    ctx.translate(this.x, this.y);
    if (this.rotation)
      ctx.rotate(this.rotation * Math.PI / 180);
    if (this.draw)
      this.draw(ctx);
    if (this.fill)
      ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
  draw(ctx: CanvasRenderingContext2D) {
  }
};

export class Line extends canvObject {
  fill: boolean;
  start: Array<number>;
  end: Array<number>;
  /**
   *
   */
  constructor(ctx: CanvasRenderingContext2D) {
    super(ctx);
    this.fill = false;
    this.start = [0, 0];
    this.end = [0, 0];
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo.apply(ctx, this.start as any);
    ctx.lineTo.apply(ctx, this.end as any);
    ctx.closePath();
  }
}

export class Circle extends canvObject {
  radius: number;
  /**
   *
   */
  constructor(ctx: CanvasRenderingContext2D) {
    super(ctx);
    this.ctx = ctx;
    this.radius = 0;
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, 2 * Math.PI, true);
    ctx.closePath();
  }
}