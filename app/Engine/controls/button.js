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
    this.domElement = document.createElement('div');
    this.domElement .style.position = 'absolute';
    this.domElement .style.width = this.width;
    this.domElement .style.height = this.height;
    this.domElement .style.backgroundColor = this.color;
    this.domElement .innerHTML = this.text;
    this.domElement .style.top = this.relativeY + 'px';
    this.domElement .style.left = this.relativeX + 'px';
    document.body.appendChild(this.domElement);
  }
}