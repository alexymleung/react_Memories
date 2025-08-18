const fs = require("fs");
const path = require("path");

const template = `import React from "react";
import "./Plate.css";

function PLATE_NUM() {
  return (
    <div className="photo-plate">
      <h2>Plate PLATE_NUM</h2>
      <div className="plate-content">
        <img
          src="/assets/JL/images/IMAGE_PATH"
          alt="Plate PLATE_NUM"
          className="plate-image"
        />
        <div className="plate-description">
          <p>Description of the photo goes here.</p>
          <p>Additional details about this plate.</p>
        </div>
      </div>
    </div>
  );
}

export default PLATE_NUM;
`;

// Image paths extracted from photos.html
const imagePaths = [
  "f0981205_003ar.jpg", // Plate 1
  "f0981211_002ar.jpg", // Plate 2
  "f0990101_222ar.jpg", // Plate 3
  // ... (add all 49 image paths)
];

for (let i = 1; i <= 49; i++) {
  const plateNum = i;
  const paddedNum = plateNum.toString().padStart(2, "0");
  const fileName = `Plate${paddedNum}.jsx`;
  const imagePath = imagePaths[plateNum - 1] || `plate${paddedNum}.jpg`;

  const content = template
    .replace(/PLATE_NUM/g, plateNum)
    .replace("IMAGE_PATH", imagePath);

  fs.writeFileSync(path.join(__dirname, fileName), content);
}

console.log("Generated 49 plate components");
