class Label extends Drawable {
  constructor(container) {
    super();

    this.fontSize = 14;

    this.text = '';
    this.textColor = undefined;

    this.container = container;
    this.alignment = 'left';
  }

  init() {
    this.borderWidth = 0;
    super.init();
    this.text = TextHelper.createTextSprite(this);
    this.text.setParent(this.cube);
    this.text.updatePosition({ x: this.x, y: this.y, z: 0 }, GameModel.camera);
    this.cube.material.transparent = true;
    this.cube.material.opacity = 0;
    _.forEach(this.cube.children, c => {
      c.material.transparent = true;
      c.material.opacity = 0;
      }
    );
  }
}