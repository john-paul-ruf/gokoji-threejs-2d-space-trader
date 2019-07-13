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
    this.speed = Math.random() * (5 - -3) + -3;
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

  doIntersect(object) {
    if (this !== object) {

      const localPoints = [];
      let localBox = new THREE.Box2();
      _.forEach(this.cube.geometry.vertices,
        v => {
          localPoints.push(this.cube.localToWorld(new THREE.Vector3(v.x, v.y, v.z)));
        });
      localBox.setFromPoints(localPoints);

      const objectPoints = [];
      let objectBox = new THREE.Box2();
      _.forEach(object.cube.geometry.vertices,
        v => {
          objectPoints.push(object.cube.localToWorld(new THREE.Vector3(v.x, v.y, v.z)));
        });
      objectBox.setFromPoints(objectPoints);

      if (localBox.intersectsBox(objectBox)) {
        //FROM: https://www.gamasutra.com/view/feature/131424/pool_hall_lessons_fast_accurate_.php?page=3
        let myCenter = this.cube.localToWorld(new THREE.Vector3(this.cube.position.x, this.cube.position.y, this.cube.position.z));
        let objectCenter = this.cube.localToWorld(new THREE.Vector3(object.cube.position.x, object.cube.position.y, object.cube.position.z));

        let n = myCenter.sub(objectCenter);
        n.normalize();
        let a1 = this.direction.clone().multiply(n);
        let a2 = object.direction.clone().multiply(n);
        let t1 = a1.sub(a2);
        t1.multiplyScalar(2);
        t1.divideScalar(this.width + object.width); //exchanging size for mass
        let optimizedP = t1;

        let t2 = this.direction.clone().sub(optimizedP.clone());
        t2.multiplyScalar(object.width);
        t2.multiply(n);
        this.direction = t2.normalize();

        let t3 = this.direction.clone().add(optimizedP.clone());
        t3.multiplyScalar(object.width);
        t3.multiply(n);
        this.direction = t3.normalize();
      }
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