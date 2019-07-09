class gameModel {
  constructor() {

  }

  init() {
    window.program = this;
    this.document = document;

    this.gameElement = this.document.getElementById("game");
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xAAAAAA);

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);

    this.camera.position.set(0, 2000, 0);
    this.camera.up = new THREE.Vector3(0, 1, 0);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth - 50, window.innerHeight - 50);

    this.camera.position.set(100, 100, 400);

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