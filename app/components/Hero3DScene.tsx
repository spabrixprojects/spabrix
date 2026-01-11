'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function GlassShape(props: any) {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta * 0.2;
            mesh.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <Float
            speed={2}
            rotationIntensity={1.5}
            floatIntensity={2}
        >
            <mesh ref={mesh} {...props}>
                <icosahedronGeometry args={[1, 0]} />
                <meshPhysicalMaterial
                    roughness={0}
                    transmission={0.99}
                    thickness={2}
                    ior={1.5}
                    envMapIntensity={1.5}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    color="#ffffff"
                    attenuationColor="#22d3ee" // Cyan tint inside
                    attenuationDistance={1.5}
                />
            </mesh>
        </Float>
    );
}

function FloatingCube({ position, color, scale }: { position: [number, number, number], color: string, scale: number }) {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta * 0.5;
            mesh.current.rotation.y += delta * 0.3;
        }
    })

    return (
        <Float speed={3} rotationIntensity={2} floatIntensity={1.5} position={position}>
            <mesh ref={mesh} scale={scale}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.2}
                    metalness={0.8}
                    envMapIntensity={2}
                />
            </mesh>
        </Float>

    )
}

function FloatingOctahedron({ position, color, scale }: { position: [number, number, number], color: string, scale: number }) {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.z += delta * 0.4;
        }
    })

    return (
        <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2} position={position}>
            <mesh ref={mesh} scale={scale}>
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.1}
                    metalness={0.5}
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </Float>

    )
}

export default function Hero3DScene() {
    return (
        <div className="w-full h-full">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />

                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={10} color="#06b6d4" />
                <spotLight position={[-10, -10, -5]} angle={0.15} penumbra={1} intensity={5} color="#3b82f6" />
                <pointLight position={[-10, -10, -10]} intensity={1} />

                {/* Environment for reflections */}
                <Environment preset="city" />

                {/* Objects */}
                <group position={[0, 0, 0]}>
                    <GlassShape scale={1.8} /> {/* Main Glass Object */}

                    {/* Satellite Objects */}
                    <FloatingCube position={[-2, 1.5, -1]} color="#06b6d4" scale={0.4} /> {/* Cyan Cube */}
                    <FloatingCube position={[2, -1, 0]} color="#3b82f6" scale={0.3} /> {/* Blue Cube */}
                    <FloatingOctahedron position={[-1.5, -1.5, 1]} color="#22d3ee" scale={0.5} />
                    <FloatingOctahedron position={[1.8, 1.8, -1]} color="#60a5fa" scale={0.3} />
                </group>

                {/* Soft shadow at the bottom? Maybe not needed for floating effect. 
             ContactShadows usually looks better on a 'floor'. Skipping for pure floating feel.
        */}

            </Canvas>
        </div>
    );
}
