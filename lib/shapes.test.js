const { Circle, Triangle, Square } = require('./shapes');

// Test for Circle SVG generation
test('Circle SVG generation - Matching Expected SVG', () => {
  const circle = new Circle('red');
  const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="80" fill="red" /><text x="50%" y="50%" text-anchor="middle" fill="black" font-size="48">ABC</text></svg>`;
  const svg = circle.generateSVG('ABC', 'black');
  expect(svg.replace(/\s+/g, '')).toEqual(expectedSVG.replace(/\s+/g, ''));
});

// Test for Triangle SVG generation
test('Triangle SVG generation - Matching Expected SVG', () => {
  const triangle = new Triangle('blue');
  const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="150,20 280,180 20,180" fill="blue" /><text x="50%" y="50%" text-anchor="middle" fill="black" font-size="48">DEF</text></svg>`;
  const svg = triangle.generateSVG('DEF', 'black');
  expect(svg.replace(/\s+/g, '')).toEqual(expectedSVG.replace(/\s+/g, ''));
});

// Test for Square SVG generation
test('Square SVG generation - Matching Expected SVG', () => {
  const square = new Square('green');
  const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="50" y="50" width="200" height="100" fill="green" /><text x="50%" y="50%" text-anchor="middle" fill="black" font-size="48">GHI</text></svg>`;
  const svg = square.generateSVG('GHI', 'black');
  expect(svg.replace(/\s+/g, '')).toEqual(expectedSVG.replace(/\s+/g, ''));
});
