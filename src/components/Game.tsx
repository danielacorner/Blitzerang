import React from 'react'
import { useThree } from '@react-three/fiber'
import { EcctrlJoystick } from 'ecctrl'
import Player from './Player'
import DungeonLevel from './DungeonLevel'

const Game: React.FC = () => {
  const { camera } = useThree()

  return (
    <>
      <Player />
      <DungeonLevel />
      <EcctrlJoystick 
        joystickBaseProps={{ scale: 0.5 }}
        joystickStickProps={{ scale: 0.5 }}
        joystickHandleProps={{ scale: 0.5 }}
        buttonLargeProps={{ scale: 0.5 }}
        buttonSmallProps={{ scale: 0.5 }}
        buttonGroupProps={{
          position: [-1.25, -0.25, 0],
          scale: 0.5,
        }}
        camera={camera}
      />
    </>
  )
}

export default Game