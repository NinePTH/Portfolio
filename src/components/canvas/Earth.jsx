import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Earth = () => {
  // const earth = useGLTF('./planet/scene.gltf')
  const earth = useGLTF('./secret_area-52__room/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={12.5} />
      <pointLight intensity={5} />
      {/* <spotLight
        position={[0, 0, 0]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      /> */}
      <primitive
        object={earth.scene}
        // scale={2.5}
        scale={0.75}
        position-y={0}
        // rotation-y={0}
      />
    </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov:45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
        />

        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;