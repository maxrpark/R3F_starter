import { Environment, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

const Experience: React.FC = () => {
  const { color: ambientColor, intensity: ambientIntensity } = useControls(
    "Ambient Light",
    {
      intensity: { value: 1.5, step: 0.01, min: 0, max: 10 },
      color: "#ffffff",
    }
  );
  return (
    <>
      <OrbitControls />
      <ambientLight color={ambientColor} intensity={ambientIntensity} />
      <Environment preset='apartment' />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default Experience;
