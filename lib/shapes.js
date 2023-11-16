// shapes.js

class Circle {
  constructor(color) {
    this.color = color;
  }

  generateSVG(text, textColor) {
    const circleSVG = `<circle cx="150" cy="100" r="80" fill="${this.color}" />
      <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>`;

    return this.wrapWithSVG(circleSVG);
  }

  wrapWithSVG(content) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${content}</svg>`;
  }
}

class Triangle {
  constructor(color) {
    this.color = color;
  }

  generateSVG(text, textColor) {
    const triangleSVG = `<polygon points="150,20 280,180 20,180" fill="${this.color}" />
      <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>`;

    return this.wrapWithSVG(triangleSVG);
  }

  wrapWithSVG(content) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${content}</svg>`;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }

  generateSVG(text, textColor) {
    const squareSVG = `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />
      <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>`;

    return this.wrapWithSVG(squareSVG);
  }

  wrapWithSVG(content) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${content}</svg>`;
  }
}

module.exports = { Circle, Triangle, Square };
