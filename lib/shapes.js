class Circle {
  constructor(color) {
    this.color = color;
  }

  // Method to generate SVG content for a circle with text
  generateSVG(text, textColor) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <circle cx="150" cy="100" r="80" fill="${this.color}" />
      <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="48" >${text}</text>
    </svg>`;
  }
}

class Triangle {
  constructor(color) {
    this.color = color;
  }

  // Method to generate SVG content for a triangle with text
  generateSVG(text, textColor) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <polygon points="150,20 280,180 20,180" fill="${this.color}" />
      <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
    </svg>`;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }

  // Method to generate SVG content for a square with text
  generateSVG(text, textColor) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
      <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
    </svg>`;
  }
}

module.exports = { Circle, Triangle, Square };
