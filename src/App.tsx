import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky, OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import Game from './components/Game'
import UI from './components/UI'

function App() {
  return (
    <div className="w-full h-screen">
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
        <Sky sunPosition={[100, 20, 100]} />
        <ambientLight intensity={0.3} />
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
        <Physics>
          <Suspense fallback={null}>
            <Game />
          </Suspense>
        </Physics>
        <OrbitControls />
      </Canvas>
      <UI />
    </div>
  )
}

export default App