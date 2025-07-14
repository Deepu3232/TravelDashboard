// CanvasPath.jsx
import { useEffect, useRef } from 'react';

const UserPath = () => {
  const canvasRef = useRef(null);
  const positionsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        // Convert lat/lon to simple canvas coordinates
        const x = (longitude + 180) * (canvas.width / 360);
        const y = (90 - latitude) * (canvas.height / 180);

        positionsRef.current.push({ x, y });

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        positionsRef.current.forEach((point, i) => {
          if (i === 0) ctx.moveTo(point.x, point.y);
          else ctx.lineTo(point.x, point.y);
        });
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
        ctx.stroke();
      },
      (err) => {
        console.error('Geolocation error:', err);
      },
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div>
      <h3>User Path (Canvas)</h3>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ border: '1px solid black', maxWidth: '100%' }}
      />
    </div>
  );
};

export default UserPath;
