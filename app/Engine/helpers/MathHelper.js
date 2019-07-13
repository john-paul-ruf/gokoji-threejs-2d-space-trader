class MathHelper {
  constructor() {

  }
}

MathHelper.random = function (max, min) {
 return Math.random() * (max - min) + min;
};