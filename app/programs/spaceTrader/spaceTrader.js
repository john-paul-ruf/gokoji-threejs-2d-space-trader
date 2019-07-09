class gameModel {
  constructor() {

  }

  init() {
    window.program = this;
    this.document = document;

    this.gameElement = this.document.getElementById("game");
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x00000);

    this.camera = new THREE.OrthographicCamera(- window.innerWidth / 2, window.innerWidth / 2, window.innerHeight / 2, - window.innerHeight / 2, -1, 10);
    this.camera.position.z = 10;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.mainMenu = new MainMenu(this);
    this.mainMenu.init();

    this.gameElement.appendChild(this.renderer.domElement);

    var update = function (game) {

    };

    var render = function (game) {
        game.renderer.render(game.scene, game.camera);
    };

    this.renderer.setAnimationLoop(() => {
      update(this);
      render(this);
    });
  }
}