import {Canvas} from '@react-three/fiber'


export default function ThreeD(){
    return (
        <Canvas>
            <mesh>
                <boxGeometry/>
                <meshStandardMaterial/>
            </mesh>
        </Canvas>
    )
}