class TextHelper {
  constructor() {

  }
}

TextHelper.createTextSprite = function (textElement) {
  var fontface = "Arial";
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  context.font = "Bold " + textElement.fontSize + "px " + fontface;

  context.fillStyle = { r: 255, g: 100, b: 100, a: 0.8 };

  context.fillText(textElement.text, 0, textElement.fontSize);

  var texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;

  var spriteMaterial = new THREE.SpriteMaterial({ map: texture });
  var sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.set(100, 50, 1.0);

  return sprite;
}

