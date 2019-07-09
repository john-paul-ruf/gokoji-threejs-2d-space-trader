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
    this.dropShadow = true;

    this.lblHeader = new Label(this);
    this.lblHeader.textColor = Config.menuText;
    this.lblHeader.y = 140;
    this.lblHeader.x = -100;
    this.lblHeader.width = 600;
    this.lblHeader.height = 75;
    this.lblHeader.text = "2D Space Trader";
    this.lblHeader.fontSize = 72;
    this.lblHeader.alignment = 'center';

    this.btnStart = new Button(this);
    this.btnStart.textColor = Config.buttonText;
    this.btnStart.color = Config.buttonBackground;
    this.btnStart.y = 70;
    this.btnStart.x = 50;
    this.btnStart.width = 200;
    this.btnStart.height = 50;
    this.btnStart.text = "Start";
    this.btnStart.borderColor = Config.buttonBorders;
    this.btnStart.borderWidth = 2;
    this.btnStart.fontSize = 32;
    this.btnStart.dropShadow = true;


    super.init();
    this.lblHeader.init();
    this.btnStart.init();

    this.clickables.push(this.btnStart);

    this.gameStartTransition = function () {
      this.container.visible = false;
    };

    this.btnStart.subscribe(this.gameStartTransition);
  }
}