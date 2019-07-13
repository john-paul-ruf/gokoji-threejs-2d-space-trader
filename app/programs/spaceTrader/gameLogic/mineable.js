class Mineable extends Drawable {
  constructor(container) {
    super();
  }

  init() {

    this.height = 64;
    this.width = 64;

    this.color = Config.mineableColor;
    this.borderColor = Config.mineableBorder;

    this.borderWidth = 6;
    this.randomizeMinable();

    this.rotationAxis = new THREE.Vector3(0, 0, 1);
    this.rotationAngle = 0.01;
    super.init();
  }

  randomizeMinable() {
    this.y = Math.random() * (2500 - -2500) + -2500;
    this.x = Math.random() * (2500 - -2500) + -2500;
    this.z = 0;
    this.speed = Math.random();
    this.direction = new THREE.Vector3(Math.random(), Math.random(), 0);
  }

  move() {
    let x = this.cube.position.x + this.direction.x * this.speed;
    let y = this.cube.position.y + this.direction.y * this.speed;
    let rotObjectMatrix = new THREE.Matrix4();
    rotObjectMatrix.makeRotationAxis(this.rotationAxis, this.rotationAngle);
    this.cube.matrix.multiply(rotObjectMatrix);
    this.cube.rotation.setFromRotationMatrix(this.cube.matrix);
    this.cube.position.set(x, y, 0);
  }
}