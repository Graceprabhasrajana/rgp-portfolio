import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'
import { useRef } from 'react'

function FloatingSphere() {
  const sphereRef = useRef(null)

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta * 0.2
      sphereRef.current.rotation.y += delta * 0.35

      sphereRef.current.position.y =
        Math.sin(state.clock.elapsedTime) * 0.12
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={sphereRef}>
        <icosahedronGeometry args={[1.35, 2]} />

        <meshStandardMaterial
          color="#9875ff"
          metalness={0.7}
          roughness={0.25}
          wireframe
        />
      </mesh>

      <mesh scale={0.85}>
        <icosahedronGeometry args={[1.35, 2]} />
        <meshStandardMaterial
          color="#5130a8"
          metalness={0.8}
          roughness={0.3}
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.5} />

      <pointLight
        position={[3, 3, 4]}
        intensity={25}
        color="#9b85ff"
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={10}
        color="#4b9dff"
      />

      <Stars
        radius={35}
        depth={15}
        count={450}
        factor={2}
        saturation={0.4}
        fade
        speed={0.5}
      />

      <FloatingSphere />
    </>
  )
}

export default function Hero3D() {
  return (
    <div className="hero-3d">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}