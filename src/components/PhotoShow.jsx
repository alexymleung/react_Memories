import { useEffect, useState } from "react";
import "../css/PhotoShow.css";
import { photoData } from "../data/photoshowdata";

function PhotoShow() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      setIsAnimating(true);

      // Start next photo 500ms before current animation completes (at 4500ms)
      setTimeout(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % photoData.length);
      }, 4500); // Start next photo at 4.5s (500ms before completion)

      // Complete current animation at 5000ms
      setTimeout(() => {
        setIsAnimating(false);
      }, 5000); // Total animation time: 5s
    };

    const timer = setTimeout(startAnimation, 1000); // Start first animation after 1s

    return () => clearTimeout(timer);
  }, [currentPhotoIndex]);

  const currentPhoto = photoData[currentPhotoIndex];

  // Use custom start position if specified, otherwise use random grid position
  const getStartPosition = () => {
    const { startX, startY } = currentPhoto;

    if (startX !== null && startY !== null) {
      // Use percentage-based positioning - convert to grid coordinates for CSS calc
      // CSS expects grid coordinates (0-9 for X, 0-8 for Y) but we want percentage positioning
      return {
        startX: startX,
        startY: startY,
        isPercentage: true,
      };
    } else {
      // Fallback to random grid position
      const gridX = Math.floor(Math.random() * 10); // 0-9 columns
      const gridY = Math.floor(Math.random() * 9); // 0-8 rows
      return {
        startX: gridX,
        startY: gridY,
        isPercentage: false,
      };
    }
  };

  const startPos = getStartPosition();

  return (
    <div className="photo-show">
      <div className={`photo-container ${isAnimating ? "animating" : ""}`}>
        <img
          src={`/src/assets/${currentPhoto.path}`}
          alt="Slideshow"
          className="animated-photo"
          style={{
            "--start-grid-x": startPos.startX,
            "--start-grid-y": startPos.startY,
            "--is-percentage": startPos.isPercentage ? 1 : 0,
          }}
        />
      </div>
    </div>
  );
}

export default PhotoShow;
