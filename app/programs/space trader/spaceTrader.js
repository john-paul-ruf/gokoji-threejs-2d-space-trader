var utils = new utils();

class gameModel {
  constructor() {

  }

  init() {
    this.document = document;

    this.gameElement = this.document.getElementById("game");
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x333333);

    this.camera = new THREE.OrthographicCamera(
      0,
      0,
      window.innerWidth,
      window.innerHeight,
      0,
      1000
    );

    this.camera.position.set(0, 0, 0);
    this.camera.up = new THREE.Vector3(0, 1, 0);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );


    this.gameElement.appendChild(this.renderer.domElement);

    var update = function (game) {

    };

    var render = function (game) {
      if (game.gameReady) {
        game.renderer.render(game.scene, game.camera);
      }
    };

    this.renderer.setAnimationLoop(() => {
      update(this);
      render(this);
    });
  }
}