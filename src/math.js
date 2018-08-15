export function add (a, b) {
  return a + b;
}

export function mul (a, b) {
  return a * b;
}

export function complex (n) {
  return [...Array (n).keys ()].map (index => ({
    id: index,
    name: `user ${index}`,
  }));
}
