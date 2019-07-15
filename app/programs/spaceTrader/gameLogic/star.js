class Star extends Drawable {
  constructor() {
    super();
  }

  init(sector) {
    this.width = 5;
    this.height = 5;
    this.borderWidth = 2;
    this.color = Config.starColor;
    this.borderColor = Config.starBorder;
    this.randomizeStar(sector);
    super.init();
  }

  randomizeStar(sector) {
    this.y = MathHelper.random(sector.sectorSize / 2, -sector.sectorSize / 2);
    this.x = MathHelper.random(sector.sectorSize / 2, -sector.sectorSize / 2);
    this.z = 0;
  };
}

