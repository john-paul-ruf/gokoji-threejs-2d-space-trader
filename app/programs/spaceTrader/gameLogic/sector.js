class Sector extends Container {
  constructor() {
    super();
  }

  init() {
    this.color = Config.menuBackground;
    this.x = 0;
    this.y = 0;
    this.width = this.sectorSize;
    this.height = this.sectorSize;
    this.borderWidth = 5;
    this.borderColor = Config.menuBorders;

    super.init();


    this.stars = [];
    const starAmount = this.numberOfStars;
    for (let i = 0; i < starAmount; i++) {
      let star = new Star();
      star.init(this);
      this.stars.push(star);
      this.drawables.push(star);
    }

    this.minables = [];
    const minableAmount = MathHelper.random(this.maxMineables, this.minMineables);
    for (let i = 0; i < minableAmount; i++) {
      let mineable = new Mineable();
      mineable.init(this);
      this.minables.push(mineable);
      this.drawables.push(mineable);
    }

    setInterval(this.doChecks.bind(this), 10);
  }

  move() {
    _.forEach(this.minables, m => {
      m.move(this.minables);
    });
  }

  doChecks() {
    _.forEach(this.minables, m => {
      m.doBoundsCheck(this.sectorSize / 2, -this.sectorSize / 2);
    });
  }

  static assemble(data) {

    const sector = new Sector(data);
    Object.assign(sector, data);
    return sector;

  }
}