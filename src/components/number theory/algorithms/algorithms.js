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
  res_string.push("");
  res_string.push("Prime factors");
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

export function simpleMod(a, b, res_string) {
  return a - b * Math.floor(a / b);
}

export function powerMod(base, exponent, modulus, res_string) {
  res_string.push("");
  res_string.push("Power mod");
  if (modulus === 1) {
    res_string.push("0");
    return 0;
  }
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
  var modOfab = powerMod(a, (n - 1) / 2, n, res_string);

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
    res_string.push(n + " is not a composite odd number");
    return;
  }
  if (gcd(a, n) != 1) {
    res_string.push(a + " and " + n + " are not coprimes");
    return;
  }
  var modOfab = powerMod(a, (n - 1) / 2, n, res_string);
  var jacobi_sym = jacobi_symbol(a, n, res_string);
  console.log(jacobi_sym);

  //   if (jacobi_sym != 1 || jacobi_sym != 1) {
  //     res_string.push("jacobi symbol(a|b) not equal to 1 or -1");
  //     return;
  //   }
  var jacobi_sym_mod = simpleMod(jacobi_sym, n, []);
  console.log(jacobi_sym_mod);

  //   console.log(modOfab);
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

export function euler_criterion(a, n, res_string) {
  //   var p = powerMod();
  res_string.push("");
  res_string.push("Euler criterion");
  //   res_string.push("");
  res_string.push("a = " + a + " n = " + n);
  if (a < 0) {
    res_string.push("Base is negetive");
    return;
  }
  if (n % 2 == 0) {
    res_string.push(n + " is not a  odd number");
    return;
  }
  if (gcd(a, n) != 1) {
    res_string.push("gcd(" + String(a) + "," + String(n) + ")!= 1");
    return;
  }
  if (isPrime(n)) {
    res_string.push(n + " is a prime");
  } else {
    res_string.push(n + " is a composite");
  }

  var modOfab = powerMod(a, (n - 1) / 2, n, res_string);
  var jacobi_sym = jacobi_symbol(a, n, res_string);

  var jacobi_sym_mod = simpleMod(jacobi_sym, n, []);

  if (jacobi_sym_mod === "undefined" || modOfab != jacobi_sym_mod) {
    res_string.push("(a|b) mod n is not eqaul to a^((n-1)/2) mod n");
    return;
  }
  res_string.push("jacoby symbol(a|b) = " + jacobi_sym);
  res_string.push("(a|n)mod n= " + jacobi_sym_mod);
  res_string.push("a^((n-1)/2) mod n = " + modOfab);
  res_string.push(n + " passes Euler's criterion");
  if (!isPrime(n)) {
    res_string.push(n + " is also a Euler's psuedoprime");
  }
  return;
}

export function fermat_little_theorum(a, p, res_string) {
  res_string.push("");
  res_string.push("Fermat's little theorum");

  if (gcd(a, p) != 1) {
    res_string.push(String(a) + " and " + String(p) + " should be coprime");
    return;
  }
  if (!isPrime(p)) {
    res_string.push("p is not a prime number");
    res_string.push(a + " is not divisible by " + p);
    res_string.push("we check (((a ^ (p - 1)) mod p) === (1 mod p))");
    var modOfap = powerMod(a, p - 1, p, res_string);
    res_string.push("(a ^ p-1) mod p = " + modOfap);
    res_string.push("1 mod p = " + simpleMod(1, p, []));
    if (modOfap === simpleMod(1, p, [])) {
      res_string.push(
        p + " passes the fermat's little theorum though it is not a prime"
      );
    } else {
      res_string.push(p + " does not passes the fermat's little theorum ");
      res_string.push(
        "So we can say that, " +
          String(p) +
          " is definitely is composite number"
      );
    }
    // return;
  } else {
    if (a % p === 0) {
      res_string.push(a + " is divisible by " + p);
      res_string.push("we check ( ( a^p ) mod p ) === ( a mod p )");
      var modOfap = powerMod(a, p, p, res_string);
      res_string.push("(a ^ p) mod p = " + modOfap);
      res_string.push("a mod p = " + simpleMod(a, p, []));
      if (modOfap === simpleMod(a, p, [])) {
        res_string.push(
          p + " passes the fermat's little theorum as its a prime"
        );
      } else {
        res_string.push(p + " does not passes the fermat's little theorum");
      }
    } else {
      res_string.push(a + " is not divisible by " + p);
      res_string.push("we check (((a ^ (p - 1)) mod p) === (1 mod p))");
      var modOfap = powerMod(a, p - 1, p, res_string);
      res_string.push("(a ^ p-1) mod p = " + modOfap);
      res_string.push("1 mod p = " + simpleMod(1, p, []));
      if (modOfap === simpleMod(1, p, [])) {
        res_string.push(
          p + " passes the fermat's little theorum as its a prime"
        );
      } else {
        res_string.push(p + " does not passes the fermat's little theorum ");
      }
    }
  }
}

export function fermat_psuedoprime(a, p, res_string) {
  res_string.push("");
  res_string.push("Fermat's psuedoprime");
  if (isPrime(p) || p % 2 === 0) {
    res_string.push(p + " is not a composite odd number");
    return;
  }
  if (a <= 1) {
    res_string.push(a + " not greater than 1");
    return;
  }

  res_string.push("we check (((a ^ (p - 1)) mod p) === (1 mod p))");
  var modOfap = powerMod(a, p - 1, p, res_string);
  res_string.push("(a ^ p-1) mod p = " + modOfap);
  res_string.push("1 mod p = " + simpleMod(1, p, []));
  // res_string.push("a % p = " + (a % p));
  if (modOfap === simpleMod(1, p, [])) {
    res_string.push(p + " is a fermat's psuedoprime");
  } else {
    res_string.push(p + " is not fermat's psuedoprime");
  }
}

export function fermat_mod(a, exp, p, res_string) {
  res_string.push("");
  res_string.push("Calculating mod using fermat theorum");
  if (!isPrime(p)) {
    res_string.push(p + " is not prime");
    res_string.push("Fermat's little theorum cannot be applied");
    return;
  }
  if (exp < p - 1) {
    res_string.push(exp + " < " + p - 1);
    res_string.push("Fermat's little theorum cannot be applied");
    return;
  }

  res_string.push("By fermat's little theorum we know that");
  res_string.push("(a ^ (p - 1)) mod p = 1");

  res_string.push(
    "So, " + String(a) + "^" + String(p - 1) + " mod " + String(p) + " = 1"
  );

  var exp_rem = simpleMod(exp, p - 1, []);
  res_string.push(
    "We can say that " +
      String(a) +
      "^" +
      String(exp) +
      " mod " +
      String(p) +
      " = " +
      String(a) +
      "^" +
      String(exp_rem) +
      " mod " +
      String(p)
  );
  var res = powerMod(a, exp_rem, p, res_string);
}

export function euler_totient(n, res_string) {
  //add statements to phi function
  res_string.push("");
  res_string.push("Euler's totient");
  var result = n;
  for (var i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      while (n % i == 0) n = n / i;
      result = result - result / i;
    }
  }
  if (n > 1) result = result - result / n;
  res_string.push("phi = " + result);
  return result;
}

export function euler_fermat_theorum(a, n, res_string) {
  res_string.push("");
  res_string.push("Euler Fermat theorum");
  res_string.push("a = " + a + " n = " + n);
  if (a <= 0) {
    res_string.push(String(a) + " should be greater than 0");
    return;
  }
  if (gcd(a, n) != 1) {
    res_string.push(
      String(a) + " and " + String(n) + " should be relative prime"
    );
    return;
  }
  res_string.push("we check (((a ^ phi) mod n) === (1 mod n))");
  var phi = euler_totient(n, res_string);
  var modOfan = powerMod(a, phi, n, res_string);
  res_string.push(
    "So, " +
      String(a) +
      "^" +
      String(phi) +
      " mod " +
      String(n) +
      " = " +
      String(modOfan)
  );
  if (modOfan === simpleMod(1, n, [])) {
    res_string.push(
      String(a) + " and " + String(n) + " passes the Euler Fermat theorum"
    );
  } else {
    res_string.push(
      String(a) + " and " + String(n) + " do not pass the Euler Fermat theorum"
    );
  }
}

export function RHOfactorNumber(input, res_string) {
  res_string.push("");
  res_string.push("Pollard rho method for " + String(input));
  if (input == 1) {
    res_string.push("Input is 1 so answer is also 1");

    return;
  }
  if (isPrime(input)) {
    res_string.push("---->As " + input + " is prime : It is a prime factor");
    return;
  }
  var divisor = rho(input, f, res_string);
  res_string.push("Divisor = " + String(divisor));
  RHOfactorNumber(divisor, res_string);
  RHOfactorNumber(input / divisor, res_string);
}

function rho(input, func, res_string) {
  var num1 = 2,
    num2 = 2,
    divisor;
  if (input % 2 == 0) {
    res_string.push(String(input) + " is divisible by 2");
    return 2;
  }
  res_string.push("We perform rho iterations for " + String(input));
  do {
    var line = "num1 = func(" + String(num1) + ") mod " + String(input);
    num1 = func(num1) % input;
    line = line + " = " + String(num1);
    res_string.push(line);
    line = "num2 = func(func(" + String(num2) + ")) mod " + String(input);
    num2 = func(func(num2)) % input;
    line = line + " = " + String(num2);
    res_string.push(line);
    divisor = gcd(Math.abs(num1 - num2), input);
    res_string.push(
      "divisor = gcd(|" +
        String(num1) +
        "-" +
        String(num2) +
        "|," +
        String(input) +
        ") = " +
        String(divisor)
    );
    res_string.push(
      "-----------------------------------------------------------------------"
    );
  } while (divisor == 1);

  if (divisor == input) {
    res_string.push(String(divisor) + "==" + String(input));
    return rho(input, g, res_string);
  }

  res_string.push(String(input) + " is divisible by " + String(divisor));
  return divisor;
}

function f(x) {
  return x * x - 1;
}

function g(x) {
  return x * x + 1;
}

export function fermat_factorization(n, res_string) {
  res_string.push("");
  res_string.push("Fermat's Factorization");

  if (n <= 0) {
    res_string.push("Enter a positive number");
    return;
  }
  if (n % 2 == 0) {
    res_string.push("---> 2 , " + String(n / 2));
    return;
  }
  res_string.push("According to fermat we can represent a number as:");
  res_string.push("n=(a^2)-(b^2)");

  var a = Math.ceil(Math.sqrt(n));

  res_string.push(
    "we start from a=Ceil(sqrt(" + String(n) + ")) = " + String(a)
  );
  while (Math.sqrt(Math.pow(a, 2) - n) % 1 != 0) {
    res_string.push(
      String(a) + "^2 - " + String(n) + " is not a perfect sqaure"
    );
    a = a + 1;
  }
  res_string.push("factors found");
  var b = Math.sqrt(Math.pow(a, 2) - n);
  res_string.push("---> " + String(a - b) + " , " + String(a + b));
}
