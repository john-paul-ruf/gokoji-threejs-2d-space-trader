class Label extends Drawable{
  constructor(container) {
    super();

    this.textSize = 14;

    this.text = '';
    this.textColor = undefined;

    this.container = container;
    this.alignment = 'left';
  }

  init() {
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