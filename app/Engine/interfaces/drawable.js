class Drawable {
  constructor() {
    this.mouseOverhandlers = [];
    this.x = 0;
    this.y = 0;
    this.height = 100;
    this.width = 100;
    this.borderWidth = 0;
    this.dropShadow = false;
    this.dropShadowOffset = 5;
    this.color = undefined;
    this.borderColor = undefined;
    this.visible = true;
  }

  init() {
    var outerGeometry = new THREE.PlaneGeometry(
      this.width,
      this.height
    );
    var outerMaterial = new THREE.MeshBasicMaterial({
      color: this.borderColor
    });
    var outerCube = new THREE.Mesh(outerGeometry, outerMaterial);

    var geometry = new THREE.PlaneGeometry(
      this.width - this.borderWidth,
      this.height - this.borderWidth
    );
    var material = new THREE.MeshBasicMaterial({ color: this.color });
    var cube = new THREE.Mesh(geometry, material);

    outerCube.add(cube);

    outerCube.position.set(
      this.x,
      this.y,
      0
    );

    this.cube = outerCube;
    window.program.scene.add(outerCube);
    this.cube.updateMatrix();
  }
};