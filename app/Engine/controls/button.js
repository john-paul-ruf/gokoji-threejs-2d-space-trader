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
      0,
      0,
      0
    );

    this.cube.add(this.sprite);
  }
}