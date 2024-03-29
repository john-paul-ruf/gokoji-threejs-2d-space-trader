class Ship extends Drawable {
  constructor() {
    super();
  }

  init() {
    this.width = 32;
    this.height = 32;
    this.dt = 0;
    super.init();
  }

  move() {

    const current = new THREE.Vector2(this.cube.position.x, this.cube.position.y);
    const distance = current.distanceTo(this.target);


    if (distance > 10) {
      this.dt += 0.0005;
      let direction = new THREE.Vector2(this.target.x - current.x, this.target.y - current.y);
      direction = direction.normalize();
      let angle = direction.angle() - this.forward.angle();
      let rotationAngle = angle;
      if (angle < 0) {
        angle += Math.PI * 2;
      }

      if (angle > 0.05) {
        if (angle < Math.PI) {
          this.forward = this.forward.rotateAround(new THREE.Vector2(0, 0), this.turnAngleSpeed * this.dt);
        } else {
          this.forward = this.forward.rotateAround(new THREE.Vector2(0, 0), -this.turnAngleSpeed * this.dt);
        }

        let x = this.cube.position.x + this.forward.x * this.turnSpeed * this.dt;
        let y = this.cube.position.y + this.forward.y * this.turnSpeed * this.dt;

        this.cube.position.set(x, y, 0);

      } else {
        let x = this.cube.position.x + this.forward.x * this.speed * this.dt;
        let y = this.cube.position.y + this.forward.y * this.speed * this.dt;

        this.cube.position.set(x, y, 0);
      }


      let rotObjectMatrix = new THREE.Matrix4();
      rotObjectMatrix.makeRotationAxis(this.rotationAxis, rotationAngle * this.dt);
      this.cube.matrix.multiply(rotObjectMatrix);
      this.cube.rotation.setFromRotationMatrix(this.cube.matrix);


      window.program.camera.position.set(this.cube.position.x, this.cube.position.y, this.cube.position.z);
    }
  }

  setTarget(vector) {
    this.target = vector;
    this.dt = 0;
  }

  static assemble(data) {

    const ship = new Ship();
    Object.assign(ship, data);
    ship.turnSpeed = ship.speed;
    ship.forward = new THREE.Vector2(0, 16);
    ship.target = new THREE.Vector2(0, 16);
    ship.rotationAxis = new THREE.Vector3(0, 0, 1);
    return ship;

  }
}