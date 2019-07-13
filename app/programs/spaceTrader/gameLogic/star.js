class Star extends Drawable {
  constructor() {
    super();
  }

  init() {
    this.width = 5;
    this.height = 5;
    this.borderWidth = 2;
    this.color = Config.starColor;
    this.borderColor = Config.starBorder;
    this.randomizeStar();
    super.init();
  }

  randomizeStar() {
    this.y = MathHelper.random(2500, -2500);
    this.x = MathHelper.random(2500, -2500);
    this.z = 0;
  };
}

