class Container extends Drawable {
  constructor() {
    super();
    this.drawables = [];
    this.clickables = [];
  }

  init() {
    super.init();
  };

  onClick() {
    if (this.visible) {
      _.forEach(this.clickables, c => { c.onClick(); });
    }
  }

  get relativeX() {

    if (this.owner instanceof Container) {
      return this.owner.relativeX + this.x;
    }

    return this.x;
  }

  get relativeY() {
    if (this.owner instanceof Container) {
      return this.owner.relativeY + this.y;
    }

    return this.y;
  }
}