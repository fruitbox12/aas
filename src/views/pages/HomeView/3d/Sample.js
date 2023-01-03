import * as THREE from "three";
import React, { useEffect } from "react";
import { useSprings, a as animated } from "react-spring/three";

const number = 35;
const colors = ["#469BE4", "#C4C4C4", "#000000", "#0078FE", "lightblue"];

const random = (i) => {
   const r = Math.random();
   return {
      position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
      scale: [1 + r * 14, 1 + r * 14, 1],
      rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)],
      color: colors[Math.round(Math.random() * (colors.length - 1))],
   };
};

const data = new Array(number).fill().map(() => {
   return {
      args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
      color: colors[Math.round(Math.random() * (colors.length - 1))],
   };
});

function Content() {
   /**
    *
    * Creates the springs
    *
    */
   const [springs, set] = useSprings(number, (i) => ({
      from: random(i),
      to: random(i),
      config: { mass: 200, tension: 500, friction: 0 },
   }));
   /**
    *
    * This is how you allow for fast changing animations.
    * Change the color every 0.4 seconds while leaving the animation to follow through.
    *
    */
   useEffect(
      () =>
         void setInterval(() => {
            set((i) => ({
               from: springs[i].to,
               to: random(i),
               delay: i * 40,
            }));
         }, 500),
      [set, springs]
   );
   return data.map((d, index) => {
      // console.log(springs[index].color);
      return (
         <animated.mesh key={index} {...springs[index]} castShadow receiveShadow>
            <boxBufferGeometry attach="geometry" args={d.args} />
            <animated.meshStandardMaterial
               attach="material"
               color={d.color}
               roughness={0.75}
               metalness={0.5}
            />
         </animated.mesh>
      );
   });
}

function Lights() {
   return (
      <group>
         <pointLight intensity={0.3} />
         <ambientLight intensity={2} />
         <spotLight
            castShadow
            intensity={0.2}
            angle={Math.PI / 7}
            position={[150, 150, 250]}
            penumbra={1}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
         />
      </group>
   );
}

export default function Sample() {
   return (
      <React.Fragment>
         <Lights />
         <Content />
      </React.Fragment>
   );
}
