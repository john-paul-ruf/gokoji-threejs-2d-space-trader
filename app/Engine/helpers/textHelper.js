class TextHelper {
  constructor() {

  }
}

TextHelper.createTextSprite = function (textElement) {
  const fontface = "Arial";
  const canvas = document.createElement('canvas');

  canvas.width = textElement.width;
  canvas.height = textElement.height;

  const context = canvas.getContext('2d');
  context.font = "Bold " + textElement.fontSize + "px " + fontface;

  context.width = textElement.width;
  context.height = textElement.height;

  const c = new THREE.Color(textElement.textColor);
  context.fillStyle = "#" + c.getHexString();
  context.fillText(textElement.text, 0, textElement.fontSize);

  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;

  var spriteMaterial = new THREE.SpriteMaterial({ map: texture });
  var sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.set(100, 50, 1.0);
  sprite.center.set(0.5, 0.5);
  return sprite;
};

