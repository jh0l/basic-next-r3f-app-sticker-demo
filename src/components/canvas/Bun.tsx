import { Decal, useGLTF, useTexture } from '@react-three/drei'

export default function Bun(props) {
  const { nodes } = useGLTF('/model.gltf')
  return (
    <mesh castShadow receiveShadow geometry={nodes.bunny.geometry} {...props} dispose={null}>
      <meshStandardMaterial color='#A69' />
      <Sticker url='/D64aIWkXoAAFI08.png' position={[0, 0.7, 0.85]} rotation={Math.PI * 1.2} scale={0.35} />
    </mesh>
  )
}

function Sticker({ url, ...props }) {
  const emoji = useTexture(url)
  return (
    <Decal {...props}>
      <meshPhysicalMaterial
        transparent
        polygonOffset
        polygonOffsetFactor={-10}
        map={emoji}
        map-flipY={false}
        map-anisotropy={16}
        iridescence={1}
        iridescenceIOR={1}
        iridescenceThicknessRange={[0, 1400]}
        roughness={1}
        clearcoat={0.5}
        metalness={0.75}
        toneMapped={false}
      />
    </Decal>
  )
}
