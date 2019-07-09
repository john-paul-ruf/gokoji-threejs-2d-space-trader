class Button extends Clickable {
  constructor(container) {
    super(program);

    this.textSize = 14;

    this.text = '';
    this.textColor = undefined;

    this.container = container;
  }

  init() {
    super.init();
    this.sprite = TextHelper.createTextSprite(this);
    window.program.scene.add(this.sprite);
  }
}