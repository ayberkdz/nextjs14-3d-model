// app/components/ThreeDScene.js

"use client"; // Bu satırı ekleyin

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

const Model = () => {
  const gltf = useGLTF('/model.glb'); // Model yolunu doğru belirttiğinizden emin olun
  const modelRef = useRef();

  useFrame(({ mouse }) => {
    if (modelRef.current) {
      modelRef.current.rotation.x = mouse.y * Math.PI;
      modelRef.current.rotation.y = mouse.x * Math.PI;
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} />;
};

export default function ThreeDScene() {
  return (
    <Canvas>
      <ambientLight />
      <Model />
    </Canvas>
  );
}