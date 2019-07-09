class Drawable {
  constructor() {
    this.mouseOverhandlers = [];
    this.x = 0;
    this.y = 0;
    this.height = 100;
    this.width = 100;
    this.borderWidth = 0;
    this.rounding = 0;
    this.dropShadow = false;
    this.dropShadowOffset = 5;
    this.color = undefined;
    this.borderColor = undefined;
    this.visible = true;
  }

  init() {
    if (this.visible) {
      var geometry = new THREE.PlaneGeometry(this.width, this.height, 32);
      var material = new THREE.MeshBasicMaterial({ color: this.color, side: THREE.DoubleSide });
      var plane = new THREE.Mesh(geometry, material);
      scene.add(plane);
    }
  }

  get relativeX() {
    return this.container ? this.container.relativeX + this.x : this.x;
  }

  get relativeY() {
    return this.container ? this.container.relativeY + this.y : this.y;
  }

};