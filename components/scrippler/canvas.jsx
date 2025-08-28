import React, { useEffect, useRef } from "react";

const DynamicViewport = ({ imageUrl, focusPath, scale = 1.05 }) => {
  const canvasRef = useRef(null);
  const imgRef = useRef(null); // keep image loaded once
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!focusPath.length) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Load image once
    if (imgRef.current) {
      const img = new Image();
      img.src = imageUrl;
      imgRef.current = img;
    }

    const img = imgRef.current;

    // Start at image center
    let current = { x: 0, y: 0 };
    const smoothFactor = 0.05;

    let currentScale = 1;
    const maxScale = scale;
    let scaleStep = 0;

    img.onload = () => {
      // Compute starting scale to fit entire image
      currentScale = Math.min(canvas.width / img.width, canvas.height / img.height);
      scaleStep = (maxScale - currentScale) / 200;

      // Compute image center as start point
      current.x = img.width / 2;
      current.y = img.height / 2;

      let targetIndex = 0; // first focus point
      const animate = () => {
        const target = focusPath[targetIndex];

        // Smoothly move toward target
        current.x += (target.x - current.x) * smoothFactor;
        current.y += (target.y - current.y) * smoothFactor;

        // Gradually zoom in a bit
        if (currentScale < maxScale) currentScale += scaleStep;

        const offsetX = current.x - canvas.width / 2 / currentScale;
        const offsetY = current.y - canvas.height / 2 / currentScale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          offsetX,
          offsetY,
          canvas.width / currentScale,
          canvas.height / currentScale,
          0,
          0,
          canvas.width,
          canvas.height
        );

        // Continue animating until close enough to target
        if (
          Math.abs(current.x - target.x) > 0.5 ||
          Math.abs(current.y - target.y) > 0.5
        ) {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      };

      animate();
    };

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [imageUrl, focusPath, scale]);

  return <canvas ref={canvasRef} width={1036} height={430} style={{ border: "2px solid #000" }} />;
};

export default DynamicViewport;
