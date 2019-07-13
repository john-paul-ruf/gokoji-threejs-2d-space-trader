class Sector extends Container {
  constructor() {
    super();
  }

  init() {
    this.color = Config.menuBackground;
    this.x = 0;
    this.y = 0;
    this.width = 5000;
    this.height = 5000;
    this.borderWidth = 5;
    this.borderColor = Config.menuBorders;

    super.init();


    this.stars = [];
    const starAmount = 500;
    for (let i = 0; i < starAmount; i++) {
      let star = new Star();
      star.init();
      this.stars.push(star);
      this.drawables.push(star);
    }

    this.minables = [];
    const minableAmount = 70;
    for (let i = 0; i < minableAmount; i++) {
      let mineable = new Mineable();
      mineable.init();
      this.minables.push(mineable);
      this.drawables.push(mineable);
    }

    setInterval(this.doChecks.bind(this), 100);
  }

  move() {
    _.forEach(this.minables, m => {
      m.move();
    });
  }

  doChecks() {
    _.forEach(this.minables, m => {
      m.doBoundsCheck(2500, -2500);
    });

    _.forEach(this.minables, m => {
      _.forEach(this.minables, t => {
        m.doIntersect(t);
      });
    });
  }
}