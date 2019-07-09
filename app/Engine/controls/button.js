class Button extends Clickable {
  constructor(container) {
    super();

    this.textSize = 14;

    this.text = '';
    this.textColor = undefined;

    this.container = container;
  }

  init() {
    super.draw();

    if (!this.domElement || (this.domElement && this.domElement.text != this.text)) {
      this.domElement = document.createElement('div');
      text2.style.position = 'absolute';
      text2.style.width = this.width;
      text2.style.height = this.height;
      text2.style.backgroundColor = this.color;
      text2.innerHTML = this.text;
      text2.style.top = this.relativeY + 'px';
      text2.style.left = this.relativeX + 'px';
      document.body.appendChild(this.domElement);
    }
  }
}