class Clickable extends Drawable {
  constructor() {
    super();
    this.clickHandlers = [];
  }

  clicked() {

    const canvasCoord = MathHelper.projectWorldToCanvas(window.cam.canvas, createVector(mouseX, mouseY, 0));

    if (canvasCoord.x > this.relativeX && canvasCoord.x < this.relativeX + this.width
      && canvasCoord.y > this.relativeY && canvasCoord.y < this.relativeY + this.height) {
      return true;
    }
    return false;
  }

  subscribe(fn) {
    this.clickHandlers.push(fn);
  }

  unsubscribe(fn) {
    this.clickHandlers = this.handlers.filter(
      function (item) {
        if (item !== fn) {
          return item;
        }
      }
    );
  }

  onClick() {

    this.clickHandlers.forEach((item) => {
      if (this.clicked()) {
        item.call(this);
      }
    });
  }
};
