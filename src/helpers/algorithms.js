export function sieve(n) {
  var numbers = new Array(n);

  for (var i = 0; i < n; i++) {
    numbers[i] = true;
  }

  for (var i = 2; i < Math.sqrt(n); i++) {
    for (var j = i * i; j < n; j += i) {
      numbers[j] = false;
    }
  }

  var primes = [];
  for (var i = 2; i < n; i++) {
    if (numbers[i]) {
      primes.push(i);
    }
  }

  return primes;
}
export function factor(n, res_string) {
  var factors = [];
  var count = 0;

  while (!(n % 2 > 0)) {
    n = n >> 1;

    count++;
  }

  // if 2 divides it
  if (count > 0) {
    factors.push({ prime: 2, power: count });
    res_string.push("2 ^ " + count);
  }

  // check for all the possible
  // numbers that can divide it
  for (var i = 3; i <= Math.sqrt(n); i += 2) {
    count = 0;
    while (n % i == 0) {
      count++;
      n = n / i;
    }
    if (count > 0) {
      factors.push({ prime: i, power: count });
      res_string.push(i + " ^ " + count);
    }
  }

  // if n at the end is a prime number.
  if (n > 2) {
    factors.push({ prime: n, power: 1 });
    res_string.push(n + " ^ " + 1);
  }

  return factors;
}

export function gcd(a, b) {
  if (a < 0) {
    a = -a;
  }
  if (b < 0) {
    b = -b;
  }
  while (true) {
    if (b === 0) {
      return a;
    }
    a %= b;
    if (a === 0) {
      return b;
    }
    b %= a;
  }
}
export function isPrime(p) {
  var factors = factor(p, []);
  if (factors.length != 1) {
    return false;
  }
  return factors[0].power === 1;
}

export function simpleMod(a, b, res_string) {}

export function powerMod(base, exponent, modulus, res_string) {
  if (modulus === 1) return 0;
  var result = 1;

  res_string.push(
    "base = " + base + " exponent = " + exponent + " mod = " + modulus
  );
  res_string.push(" ");
  base = base % modulus;
  res_string.push(base + "%" + modulus + " = " + base);

  while (exponent > 0) {
    var line = "";
    if (exponent % 2 === 1) {
      result = (result * base) % modulus;
    }
    line = line + "result = " + String(result) + " ";
    exponent = exponent >> 1;
    line = line + "exponent = " + String(exponent) + " ";
    base = (base * base) % modulus;
    line = line + "base = " + String(base) + " ";

    res_string.push(line);
  }
  res_string.push(String(result));
  return result;
}

export function jacobi(a, res_string) {
  var b = new Object();
  b[0] = 1;
  b[1] = 1;
  b[2] = 1; // Array(1,1,1);
  var sign = a[0];
  var m = a[1];
  var n = a[2];
  if (sign > 0) res_string.push("= (" + m + "/" + n + ")");
  if (sign < 0) res_string.push("= -(" + m + "/" + n + ")");
  if (m > n - 1) {
    m = m % n;
    if (sign > 0) res_string.push("= (" + m + "/" + n + ")");
    if (sign < 0) res_string.push("= -(" + m + "/" + n + ")");
  }
  m = m % n;
  if (m == 0) {
    res_string.push("= 0");
    return 0;
  }
  if (m == 1) {
    if (sign > 0) {
      res_string.push("= 1");
      return 1;
    }
    res_string.push("= -1");
    return -1;
  }
  var J2n = 1;
  if (3 == n % 8 || 5 == n % 8) J2n = -1;
  if (0 == m % 2) {
    b[0] = J2n * sign;
    b[1] = m / 2;
    b[2] = n;
    return jacobi(b, res_string);
  }
  if (3 == n % 4 && 3 == m % 4) {
    b[0] = -sign;
    b[1] = n % m;
    b[2] = m;
    return jacobi(b, res_string);
  } else {
    b[0] = sign;
    b[1] = n % m;
    b[2] = m;
    return jacobi(b, res_string);
  }
  // return res_string
}

export function jacobi_symbol(m, n, res_string) {
  //   var res_string = [];
  res_string.push("");
  res_string.push("Jacobi symbol");
  //   res_string.push("");
  if (0 == n % 2) {
    res_string.push("The bottom number must be odd");
    return;
  }
  if (n < 0 || m < 0) {
    res_string.push("No negative numbers");
    return;
  }
  var a = new Object();
  a[0] = 1;
  a[1] = m;
  a[2] = n; // Array(1,m,n);

  var ans = jacobi(a, res_string);

  if (ans == 1 && n < 30000) {
    var res = false;
    for (var i = 1; i < n / 2; i++) {
      if (0 == (i * i - m) % n) {
        res = true;
        // console.log("A residue: " + m + " = " + i + "^2 mod " + n + " ");
        res_string.push("A residue: " + m + " = " + i + "^2 mod " + n + " ");
        break;
      }
    }
    if (res === false) res_string.push("Not a residue");
  }
  // return res_string
  return ans;
}

export function euler_psuedoprime(a, n, res_string) {
  //   var p = powerMod();
  res_string.push("");
  res_string.push("Euler psuedo prime");
  //   res_string.push("");
  res_string.push("a = " + a + " n = " + n);
  if (a < 0) {
    res_string.push("Base is negetive");
    return;
  }
  if (n % 2 == 0 || isPrime(n)) {
    res_string.push("n is not a composite odd number");
    return;
  }
  if (gcd(a, n) != 1) {
    res_string.push(a + " and " + n + " are not coprimes");
    return;
  }
  var modOfab = powerMod(a, (n - 1) / 2, n, []);

  //   console.log(modOfab);
  if (modOfab != 1 && modOfab != n - 1) {
    res_string.push("1 mod n or -1 mod n not eqaul to a^((n-1)/2) mod n");
    return;
  }

  res_string.push(
    "a^((n-1)/2) mod n = " + modOfab + " and = (1 mod n) or (-1 mod n)"
  );

  res_string.push(n + " is Euler psuedoprime to " + a);
  return;
}

export function jacobi_euler_psuedoprime(a, n, res_string) {
  //   var p = powerMod();
  res_string.push("");
  res_string.push("Jacobi-Euler psuedo prime");
  //   res_string.push("");
  res_string.push("a = " + a + " n = " + n);
  if (a < 0) {
    res_string.push("Base is negetive");
    return;
  }
  if (n % 2 == 0 || isPrime(n)) {
    res_string.push("n is not a composite odd number");
    return;
  }
  if (gcd(a, n) != 1) {
    res_string.push(a + " and " + n + " are not coprimes");
    return;
  }
  var modOfab = powerMod(a, (n - 1) / 2, n, []);
  var jacobi_sym = jacobi_symbol(a, n, res_string);
  if (jacobi_sym != 1 || jacobi_sym != 1) {
    res_string.push("jacobi symbol(a|b) not equal to 1 or -1");
    return;
  }
  var jacobi_sym_mod = powerMod(jacobi_sym, 1, n, []);

  //   console.log(modOfab);
  //   console.log(jacobi_sym);
  if (jacobi_sym_mod === "undefined" || modOfab != jacobi_sym_mod) {
    res_string.push("(a|b) mod n is not eqaul to a^((n-1)/2) mod n");
    return;
  }
  res_string.push("jacoby symbol(a|b) = " + jacobi_sym);
  res_string.push("(a|n)mod n= " + jacobi_sym_mod);
  res_string.push("a^((n-1)/2) mod n = " + modOfab);
  res_string.push(n + " is Euler psuedoprime to " + a);
  return;
}
