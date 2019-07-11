class TextHelper {
  constructor() {

  }
}

TextHelper.createTextSprite = function (textElement) {
  var div = window.document.createElement('div');
  div.style.color = new THREE.Color(textElement.textColor).getHexString();
  div.style.position = 'absolute';
  div.style.width = 100;
  div.style.height = 100;
  div.style.fontSize = textElement.fontSize;
  div.innerHTML = textElement.text;
  div.style.top = -1000;
  div.style.left = -1000; 
  window.document.getElementById("game").appendChild(div); 

  //from https://codepen.io/dxinteractive/pen/reNpOR?editors=0010
  //much thanks
  return {
    element: div,
    parent: false,
    position: new THREE.Vector3(0, 0, 0),
    setHTML: function (html) {
      this.element.innerHTML = html;
    },
    setParent: function (threejsobj) {
      this.parent = threejsobj;
    },
    updatePosition: function () {
      if (parent) {
        this.position.copy(this.parent.position);
      }
      var coords2d = this.get2DCoords(this.position, GameModel.camera);
      this.element.style.left = coords2d.x + 'px';
      this.element.style.top = coords2d.y + 'px';
    },
    get2DCoords: function (position, camera) {
      var vector = position.project(camera);
      vector.x = (vector.x + 1) / 2 * window.innerWidth;
      vector.y = -(vector.y - 1) / 2 * window.innerHeight;
      return vector;
    }
  };
};

