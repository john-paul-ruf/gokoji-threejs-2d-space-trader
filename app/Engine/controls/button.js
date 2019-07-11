class Button extends Clickable {
  constructor(container) {
    super(program);

    this.textSize = 36;

    this.text = '';
    this.textColor = undefined;

    this.container = container;
  }

  init() {
    super.init();
    this.text = TextHelper.createTextSprite(this);
    this.text.setParent(this.cube);
    this.text.updatePosition({ x: this.x, y: this.y, z: 0 }, GameModel.camera);
    this.cube.text = this.text;
  }
}