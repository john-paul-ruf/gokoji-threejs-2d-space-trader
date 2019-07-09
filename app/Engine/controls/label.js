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

    this.sprite.position.set(
      this.relativeX,
      this.relativeY,
      0
    );

    window.program.scene.add(this.sprite);
  }
}