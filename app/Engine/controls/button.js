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
    this.sprite = TextHelper.createTextSprite(this);

    this.sprite.position.set(
      this.relativeX + this.width / 2,
      this.relativeY + this.height / 2,
      0
    );

    window.program.scene.add(this.sprite);
  }
}