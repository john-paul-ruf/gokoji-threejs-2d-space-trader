class GameModel {
  constructor() {

  }

  init() {
    window.program = this;
    this.document = document;
    this.clickables = [];

    this.document.addEventListener(
      "mousedown",
      event => {
        this.onClick(event);
      },
      false
    );

    this.gameElement = this.document.getElementById("game");
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x00000);

    this.camera = new THREE.OrthographicCamera(- window.innerWidth / 2, window.innerWidth / 2, window.innerHeight / 2, - window.innerHeight / 2, -1, 10);
    this.camera.position.z = 10;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.mainMenu = new MainMenu(this);
    this.mainMenu.init();
    this.clickables.push(this.mainMenu);

    this.gameElement.appendChild(this.renderer.domElement);

    var update = function (game) {
      if (window.program.playerShip) {
        window.program.playerShip.move();
      }
    };

    var render = function (game) {
      game.renderer.render(game.scene, game.camera);
    };

    this.renderer.setAnimationLoop(() => {
      update(this);
      render(this);
    });
  }

  onClick() {
    let mouse3D = new THREE.Vector3(event.clientX / window.innerWidth * 2 - 1, -event.clientY / window.innerHeight * 2 + 1, -1);
    mouse3D.unproject(window.program.camera);
    this.lastClick = mouse3D;
    _.forEach(this.clickables, c => { c.onClick(); });

    if (window.program.playerShip) {
      window.program.playerShip.setTarget(mouse3D);
    }
  }

  onGameStart() {
    const randomizeStar = function(star) {
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
    }



    this.playerShip = Ship.assemble({
      "key": "scout",
      "sprite": "ships/1/scout",
      "speed": 5,
      "turnAngleSpeed": 0.5
    });

    this.playerShip.init();
  }
}