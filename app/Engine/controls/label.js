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
    this.sprite = TextHelper.createTextSprite(this);
    window.program.scene.add(this.sprite);
  }
}