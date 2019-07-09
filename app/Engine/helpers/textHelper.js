class TextHelper {
  constructor() {

  }
}

TextHelper.createTextSprite = function (textElement) {
  var fontface = "Arial";

  const createRectangle = function (ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fill();
  };

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  context.font = "Bold " + textElement.fontSize + "px " + fontface;

  // get size data (height depends only on font size)
  var metrics = context.measureText(textElement.text);
  var textWidth = metrics.width;

  createRectangle(context, 0, 0, textWidth, textElement.fontSize * 1.4, 0);

  // text color
  context.fillStyle = textElement.textColor;

  context.fillText(textElement.text, 0, textElement.fontSize);

  // canvas contents will be used for a texture
  var texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;

  var spriteMaterial = new THREE.SpriteMaterial(
    { map: texture, useScreenCoordinates: false, alignment: textElement.alignment });
  var sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.set(100, 50, 1.0);

  sprite.position.set(
    textElement.relativeX,
    textElement.relativeY,
    0
  );

  return sprite;
}

