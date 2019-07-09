class TextHelper {
  constructor() {

  }
}

TextHelper.createTextSprite = function (textElement) {
  var fontface = "Arial";
  var canvas = document.createElement('canvas');

  canvas.width = textElement.width;
  canvas.height = textElement.height;

  var context = canvas.getContext('2d');
  context.font = "Bold " + textElement.fontSize + "px " + fontface;

  var metrics = context.measureText(textElement.text);
  var textWidth = metrics.width;

  //------------- Paint the Text onto canvas ----------------
  context.fillStyle = "rgba(0,0,0,1)";
  context.fillText(textElement.text, 0, textElement.fontSize);

  var texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;

  var spriteMaterial = new THREE.SpriteMaterial({ map: texture });
  var sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.set(100, 50, 1.0);

  return sprite;
};

