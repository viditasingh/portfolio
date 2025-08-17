import { OrbitControls } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense, useMemo, useCallback } from "react";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  // Memoize camera settings for performance
  const cameraSettings = useMemo(() => ({
    position: [0, 0, 15],
    fov: 45,
    near: 0.1,
    far: 1000
  }), []);

  // Memoize OrbitControls settings
  const orbitControlsSettings = useMemo(() => ({
    enablePan: false,
    enableZoom: !isTablet,
    maxDistance: 20,
    minDistance: 5,
    minPolarAngle: Math.PI / 5,
    maxPolarAngle: Math.PI / 2,
    enableDamping: true,
    dampingFactor: 0.05
  }), [isTablet]);

  // Memoize group transform settings
  const groupSettings = useMemo(() => ({
    scale: isMobile ? 0.7 : 1,
    position: [0, -3.5, 0],
    rotation: [0, -Math.PI / 4, 0]
  }), [isMobile]);

  // Optimized fallback component
  const LoadingFallback = useCallback(() => (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshBasicMaterial color="#333" transparent opacity={0} />
    </mesh>
  ), []);

  return (
    <Canvas 
      camera={cameraSettings}
      dpr={[1, 2]} // Limit pixel ratio for performance
      performance={{ min: 0.5 }} // Performance scaling
      gl={{
        antialias: false, // Disable antialiasing for better performance
        alpha: true,
        powerPreference: "high-performance",
        stencil: false,
        depth: true
      }}
      shadows={false} // Disable shadows if not essential
      frameloop="demand" // Render only when needed
    >
      {/* Optimized ambient light */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      
      {/* OrbitControls with performance optimizations */}
      <OrbitControls {...orbitControlsSettings} />

      <Suspense fallback={<LoadingFallback />}>
        <OptimizedScene groupSettings={groupSettings} />
      </Suspense>
    </Canvas>
  );
};

// Separate component for the 3D scene to optimize re-renders
const OptimizedScene = ({ groupSettings }) => {
  return (
    <>
      <HeroLights />
      <Particles count={50} /> {/* Reduced particle count */}
      <group {...groupSettings}>
        <Room />
      </group>
    </>
  );
};

export default HeroExperience;
