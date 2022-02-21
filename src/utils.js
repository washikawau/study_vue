
function range(start, stop, step = 1) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  )
}

function gcd(a, b) {
  if (b > a) return gcd(b, a)
  if (b == 0) return a
  return gcd(b, a % b)
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b)
}

export default {
  range,
  gcd,
  lcm,
}

