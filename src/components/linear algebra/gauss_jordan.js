/**
 * Gauss-Jordan elimination
 */

var linear = (function () {
  /**
   * Used internally to solve systems
   * If you want to solve A.x = B,
   * choose data=A and mirror=B.
   * mirror can be either an array representing a vector
   * or an array of arrays representing a matrix.
   */
  function Mat(data, mirror) {
    // Clone the original matrix
    this.data = new Array(data.length);
    for (var i = 0, cols = data[0].length; i < data.length; i++) {
      this.data[i] = new Array(cols);
      for (var j = 0; j < cols; j++) {
        this.data[i][j] = data[i][j];
      }
    }

    if (mirror) {
      if (typeof mirror[0] !== "object") {
        for (var i = 0; i < mirror.length; i++) {
          mirror[i] = [mirror[i]];
        }
      }
      this.mirror = new Mat(mirror);
    }
    console.log("constructor");
    console.log(this.mirror);
  }

  /**
   * Swap lines i and j in the matrix
   */
  function swap(data, mirror, i, j) {
    var tmp_m = mirror[i];
    mirror[i] = mirror[j];
    mirror[j] = tmp_m;

    var tmp_d = data[i];
    data[i] = data[j];
    data[j] = tmp_d;
  }

  /**
   * Multiply line number i by l
   */
  function multline(data, mirror, i, l) {
    mirror[i] *= l;

    var line = data[i];
    for (var k = line.length - 1; k >= 0; k--) {
      line[k] *= l;
    }
  }

  /**
   * Add line number j multiplied by l to line number i
   */
  function addmul(data, mirror, i, j, l) {
    mirror[i] += mirror[j] * l;
    var lineI = data[i],
      lineJ = data[j];
    for (var k = lineI.length - 1; k >= 0; k--) {
      lineI[k] = lineI[k] + l * lineJ[k];
    }
  }

  /**
   * Tests if line number i is composed only of zeroes
   */
  function hasNullLine(data, i) {
    for (var j = 0; j < data[i].length; j++) {
      if (data[i][j] !== 0) {
        return false;
      }
    }
    return true;
  }

  function gauss(data, mirror) {
    var pivot = 0,
      lines = data.length,
      columns = data[0].length,
      nullLines = [];

    for (var j = 0; j < columns; j++) {
      // Find the line on which there is the maximum value of column j
      var maxValue = 0,
        maxLine = 0;
      for (var k = pivot; k < lines; k++) {
        var val = data[k][j];
        if (Math.abs(val) > Math.abs(maxValue)) {
          maxLine = k;
          maxValue = val;
        }
      }
      if (maxValue === 0) {
        // The matrix is not invertible. The system may still have solutions.
        nullLines.push(pivot);
      } else {
        // The value of the pivot is maxValue
        multline(data, mirror, maxLine, 1 / maxValue);
        swap(data, mirror, maxLine, pivot);
        for (var i = 0; i < lines; i++) {
          if (i !== pivot) {
            addmul(data, mirror, i, pivot, -data[i][j]);
          }
        }
      }
      pivot++;
    }

    // Check that the system has null lines where it should
    for (var i = 0; i < nullLines.length; i++) {
      if (!hasNullLine(mirror, nullLines[i])) {
        throw new Error("singular matrix");
      }
    }
    console.log("gauss");
    console.log(mirror);
    return mirror;
  }

  /**
   * Solves A.x = b
   * @param A
   * @param b
   * @return x
   */
  exports.solve = function solve(A, b) {
    var result = gauss(A, b);
    if (result.length > 0 && result[0].length === 1) {
      // Convert Nx1 matrices to simple javascript arrays
      for (var i = 0; i < result.length; i++) result[i] = result[i][0];
    }
    return result;
  };

  function identity(n) {
    var id = new Array(n);
    for (var i = 0; i < n; i++) {
      id[i] = new Array(n);
      for (var j = 0; j < n; j++) {
        id[i][j] = i === j ? 1 : 0;
      }
    }
    return id;
  }

  /**
   * invert a matrix
   */
  exports.invert = function invert(A) {
    return new gauss(A, identity(A.length));
  };

  return exports;
})();

if (typeof module.exports === "object") module.exports = linear;
