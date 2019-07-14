class Mineable extends Drawable {
  constructor(container) {
    super();
  }

  init() {
   
    this.height = 128;
    this.width = 128;

    this.color = Config.mineableColor;
    this.borderColor = Config.mineableBorder;

    this.borderWidth = 6;
    this.randomizeMinable();

    this.rotationAxis = new THREE.Vector3(0, 0, 1);
    this.rotationAngle = MathHelper.random(0.05, -0.05);
    this.colisionTimer = 0;

    super.init();
  }

  randomizeMinable() {
    this.y = MathHelper.random(2500, -2500);
    this.x = MathHelper.random(2500, -2500);
    this.z = 0;
    this.speed = MathHelper.random(5, 3);
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

    if (this.colisionTimer > 0) {
      this.colisionTimer --;
    }
  }

  doIntersect(object) {
    if (this !== object && this.colisionTimer >= 0 && object.colisionTimer >= 0) {

      const localPoints = [];
      let localBox = new THREE.Box2();
      _.forEach(this.cube.geometry.vertices,
        v => {
          localPoints.push(this.cube.localToWorld(new THREE.Vector3(v.x, v.y, v.z)));
        });
      localBox.setFromPoints(localPoints);

      const objectPoints = [];
      _.forEach(object.cube.geometry.vertices,
        v => {
          objectPoints.push(object.cube.localToWorld(new THREE.Vector3(v.x, v.y, v.z)));
        });

      _.forEach(objectPoints, p => {
        if (localBox.containsPoint(p)) {
          //FROM: https://www.gamasutra.com/view/feature/131424/pool_hall_lessons_fast_accurate_.php?page=3
          let myCenter = this.cube.localToWorld(new THREE.Vector3(this.cube.position.x, this.cube.position.y, this.cube.position.z));
          let objectCenter = this.cube.localToWorld(new THREE.Vector3(object.cube.position.x, object.cube.position.y, object.cube.position.z));

          let n = myCenter.sub(objectCenter);
          n.normalize();
          let a1 = this.direction.clone().multiply(n);
          let a2 = object.direction.clone().multiply(n);
          let t1 = a1.sub(a2);
          t1.multiplyScalar(2);
          let optimizedP = t1.normalize();

          let t2 = this.direction.clone().sub(optimizedP.clone());
          t2.multiply(n);
          t2.multiplyScalar(-1);

          let t3 = this.direction.clone().add(optimizedP.clone());
          t3.multiply(n);
          t3.multiplyScalar(-1);

          object.direction = t2.normalize();
          this.direction = t3.normalize();

          let tempSpeed = this.speed;
          this.speed = object.speed;
          object.speed = tempSpeed;

          this.colisionTimer = Config.colisionTimeoutMax;
          object.colisionTimer = Config.colisionTimeoutMax;
        }
      });
    }
  }

  doBoundsCheck(max, min) {
    const boundsCheck = new THREE.Vector3(this.cube.position.x, this.cube.position.y, this.cube.position.z);
    if (boundsCheck.y > max ||
      boundsCheck.y < min) {
      this.direction.reflect(new THREE.Vector3(0, 1, 0));
    }

    if (boundsCheck.x > max ||
      boundsCheck.x < min) {
      this.direction.reflect(new THREE.Vector3(1, 0, 0));
    }
  }
}