const math = require("mathjs");

export function mat_inv(matrix) {
  try  {
        var inv = math.inv(math.matrix(matrix));
        //   console.log(inv.valueOf());
        return inv.valueOf();
  }  catch  (e)  {
        alert(e);;
  }
  
}

export function inverse(_A) {
  var temp,
    N = _A.length,
    E = [];

  for (var i = 0; i < N; i++) E[i] = [];

  for (i = 0; i < N; i++)
    for (var j = 0; j < N; j++) {
      E[i][j] = 0;
      if (i == j) E[i][j] = 1;
    }

  for (var k = 0; k < N; k++) {
    temp = _A[k][k];

    for (var j = 0; j < N; j++) {
      _A[k][j] /= temp;
      E[k][j] /= temp;
    }

    for (var i = k + 1; i < N; i++) {
      temp = _A[i][k];

      for (var j = 0; j < N; j++) {
        _A[i][j] -= _A[k][j] * temp;
        E[i][j] -= E[k][j] * temp;
      }
    }
  }

  for (var k = N - 1; k > 0; k--) {
    for (var i = k - 1; i >= 0; i--) {
      temp = _A[i][k];

      for (var j = 0; j < N; j++) {
        _A[i][j] -= _A[k][j] * temp;
        E[i][j] -= E[k][j] * temp;
      }
    }
  }

  for (var i = 0; i < N; i++) for (var j = 0; j < N; j++) _A[i][j] = E[i][j];
  return _A;
}
