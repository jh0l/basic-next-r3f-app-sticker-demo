import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Environment, AccumulativeShadows, RandomizedLight } from '@react-three/drei'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas shadows {...props} camera={{ position: [2, 2, 10], fov: 20 }}>
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <group position={[0.25, -1, 0]}>
        <Preload all />
        {children}
        {/* @ts-ignore */}
        <AccumulativeShadows temporal frames={100} scale={12} alphaTest={0.85} position={[0, 0.04, 0]}>
          {/* @ts-ignore */}
          <RandomizedLight amount={8} radius={10} ambient={0.5} position={[2.5, 5, -5]} bias={0.001} />
        </AccumulativeShadows>
      </group>
      {/* <Environment preset='city' background blur={0.7} /> */}
      <OrbitControls enablePan={false} makeDefault />
    </Canvas>
  )
}
