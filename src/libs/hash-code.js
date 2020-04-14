const hash = function (s) {
  return s.split("").reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
};

const absoluteNumber = (number) => (number >= 0 ? number : number * -1);

const hashCode = (s) => {
  const code = hash(s);
  return absoluteNumber(code);
};

export { hashCode };
