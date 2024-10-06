"use client";

import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

export default function ThreeDScene() {
  const [loading, setLoading] = useState(true);

  const Model = () => {
    const { scene } = useGLTF('/model.glb', true, {
      onLoad: () => setLoading(false),
      onError: () => console.error("Model yüklenirken hata oluştu"),
    });

    return <primitive object={scene} scale={0.5} />;
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      {loading && <LoadingSpinner />}
      <Canvas style={{ display: loading ? 'none' : 'block' }}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Model />
      </Canvas>
    </div>
  );
}