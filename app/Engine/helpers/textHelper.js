class TextHelper {
  constructor() {

  }
}

TextHelper.createTextSprite = function (textElement) {
  var fontface = "Arial";

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  context.font = "Bold " + textElement.fontSize + "px " + fontface;

  // get size data (height depends only on font size)
  var metrics = context.measureText(textElement.text);
  var textWidth = metrics.width;

  // text color
  context.fillStyle = { r: 255, g: 100, b: 100, a: 0.8 };

  context.fillText(textElement.text, textWidth, textElement.fontSize);

  // canvas contents will be used for a texture
  var texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;

  var spriteMaterial = new THREE.SpriteMaterial({ map: texture, color: 0xffffff });
  var sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.set(100, 50, 1.0);

   return sprite;
}

