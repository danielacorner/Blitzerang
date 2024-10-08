import React from 'react'
import { useTexture } from '@react-three/drei'

const DungeonLevel: React.FC = () => {
  const texture = useTexture('https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/textures/floors/FloorsCheckerboard_S.jpg')
  texture.wrapS = texture.wrapT = 1000
  texture.repeat.set(100, 100)

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

export default DungeonLevel