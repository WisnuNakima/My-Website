import { useEffect, useState } from 'react';

/**
 * InteractiveRobot - 3D robot that follows cursor
 */
export default function InteractiveRobot() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate rotation based on mouse position
      // Center is 0, edges are ±20deg
      const x = ((clientY / innerHeight) - 0.5) * -40; // Vertical tilt
      const y = ((clientX / innerWidth) - 0.5) * 40;   // Horizontal rotation
      
      setRotation({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="robot-container"
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
      }}
    >
      {/* Robot Body */}
      <div className="robot-body">
        {/* Head */}
        <div className="robot-head">
          {/* Screen */}
          <div className="robot-screen">
            <div className="screen-glow"></div>
          </div>
          {/* Eyes */}
          <div className="robot-eyes">
            <div className="robot-eye left"></div>
            <div className="robot-eye right"></div>
          </div>
          {/* Antenna */}
          <div className="robot-antenna"></div>
        </div>
        
        {/* Neck */}
        <div className="robot-neck"></div>
        
        {/* Torso */}
        <div className="robot-torso">
          <div className="robot-detail"></div>
        </div>
      </div>
    </div>
  );
}
