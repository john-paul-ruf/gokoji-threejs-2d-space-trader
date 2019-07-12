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

    super.init();
  }

  randomizeMinable() {
    this.y = Math.random() * (2500 - -2500) + -2500;
    this.x = Math.random() * (2500 - -2500) + -2500;
    this.z = 0;
  };
}