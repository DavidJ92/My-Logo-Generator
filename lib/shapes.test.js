const { Circle, Triangle, Square } = require('./shapes');

test('Circle SVG generation', () => {
  const circle = new Circle('red');
  const svg = circle.generateSVG();
  // Add assertions to test SVG content here
});

test('Triangle SVG generation', () => {
  const triangle = new Triangle('blue');
  const svg = triangle.generateSVG();
  // Add assertions to test SVG content here
});

test('Square SVG generation', () => {
  const square = new Square('green');
  const svg = square.generateSVG();
  // Add assertions to test SVG content here
});
