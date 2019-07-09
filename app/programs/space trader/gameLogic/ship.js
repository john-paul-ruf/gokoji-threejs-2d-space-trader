class Ship {
  constructor() {

  }

  fire() {

  }

  move(dt) {

    const target = new Victor(this.sprite.targetX, this.sprite.targetY);
    const current = new Victor(this.sprite.x, this.sprite.y);
    const distance = current.distance(target);


    if (distance > 10) {
      let direction = new Victor(target.x - current.x, target.y - current.y);
      direction = direction.norm();
      let angle = direction.angle() - this.forward.angle();

      if (angle < 0) {
        angle += Math.PI * 2;
      }

      if (angle > 0.05) {
        if (angle < Math.PI) {
          this.forward = this.forward.rotate(this.turnAngleSpeed * dt);
        } else {
          this.forward = this.forward.rotate(-this.turnAngleSpeed * dt);
        }

        this.sprite.x = this.sprite.x + this.forward.x * this.turnSpeed * dt;
        this.sprite.y = this.sprite.y + this.forward.y * this.turnSpeed * dt;

      } else {
        this.sprite.x = this.sprite.x + this.forward.x * this.speed * dt;
        this.sprite.y = this.sprite.y + this.forward.y * this.speed * dt;
      }

      this.sprite.rotation = this.forward.angle();
    }
  }

  static assemble(data) {

    const ship = new Ship();
    Object.assign(ship, data);
    ship.turnSpeed = ship.speed;
    ship.forward = new Victor(0, 16);
    ship.sprite.targetX = 0;
    ship.sprite.targetY = 0;
    return ship;

  }
}