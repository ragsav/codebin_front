const math = require("mathjs");

export function mat_inv(matrix) {
  var inv = math.inv(math.matrix(matrix));
  //   console.log(inv.valueOf());
  return inv.valueOf();
}
