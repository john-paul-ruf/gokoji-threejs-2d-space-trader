class Clickable extends Drawable {
  constructor() {
    super();
    this.clickHandlers = [];
  }

  clicked() {
    let screenCords = _.clone(window.program.lastClick);
    screenCords = new THREE.Vector2(screenCords.x, screenCords.y);

    let hitBox = new THREE.Box2();
    let points = [];
    _.forEach(this.cube.geometry.vertices, v => {
      points.push(this.cube.localToWorld(new THREE.Vector3(v.x, v.y, v.z)));
    });

    hitBox.setFromPoints(points);

    if (hitBox.containsPoint(screenCords)) {
      return true;
    }
    return false;
  }

  subscribe(fn) {
    this.clickHandlers.push(fn);
  }

  unsubscribe(fn) {
    this.clickHandlers = this.handlers.filter(
      function (item) {
        if (item !== fn) {
          return item;
        }
      }
    );
  }

  onClick() {

    this.clickHandlers.forEach((item) => {
      if (this.clicked()) {
        item.call(this);
      }
    });
  }
};
