function getNthFib(n) {
  let a = 0,
    b = 1;

  for (let i = 1; i < n; i++) {
    const c = a + b;

    a = b;
    b = c;
  }

  return a;
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
