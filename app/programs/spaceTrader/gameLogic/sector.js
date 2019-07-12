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

    const randomizeStar = function (star) {
      star.y = Math.random() * (2500 - -2500) + -2500;
      star.x = Math.random() * (2500 - -2500) + -2500;
      star.z = 0;
    };

    this.stars = [];
    const starAmount = 500;
    for (let i = 0; i < starAmount; i++) {
      let star = new Drawable();
      star.width = 5;
      star.height = 5;
      star.borderWidth = 2;
      star.color = Config.starColor;
      star.borderColor = Config.starBorder;
      randomizeStar(star);
      star.init();
      this.stars.push(star);
      this.drawables.push(star);
    }

  }
}