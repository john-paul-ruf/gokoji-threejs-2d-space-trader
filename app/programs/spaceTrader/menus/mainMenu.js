class MainMenu extends Container {
  constructor(program) {
    super(program);
  }

  init() {

    this.color = Config.menuBackground;
    this.x = 50;
    this.y = 50;
    this.width = 400;
    this.height = 400;
    this.borderWidth = 3;
    this.borderColor = Config.menuBorders;
    this.rounding = 10;
    this.dropShadow = true;

    this.lblHeader = new Label(this);
    this.lblHeader.textColor = Config.menuText;
    this.lblHeader.y = 20;
    this.lblHeader.x = 0;
    this.lblHeader.width = 400;
    this.lblHeader.height = 50;
    this.lblHeader.text = "2D Space Trader";
    this.lblHeader.textSize = 26;
    this.lblHeader.alignment = 'center';

    this.btnStart = new Button(this);
    this.btnStart.textColor = Config.buttonText;
    this.btnStart.color = Config.buttonBackground;
    this.btnStart.y = 70;
    this.btnStart.x = 100;
    this.btnStart.width = 200;
    this.btnStart.height = 50;
    this.btnStart.text = "Start";
    this.btnStart.rounding = 10;
    this.btnStart.borderColor = Config.buttonBorders;
    this.btnStart.borderWidth = 1;
    this.btnStart.dropShadow = true;

    this.lblHeader.init();
    this.btnStart.init();

    this.clickables.push(this.btnStart);

    this.gameStartTransition = function () {
      this.container.visible = false;
    };

    this.btnStart.subscribe(this.gameStartTransition);
  }
}