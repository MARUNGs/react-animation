import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

// styled -----
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
`;

function MotionValue() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  useEffect(
    () => rotateZ.onChange(() => console.log(rotateZ.get())),
    [rotateZ]
  );

  // 배경색상을 바꾸고 싶을 때는 rgb값으로 바꿀 것!
  const background = useTransform(
    x,
    [-800, 0, 800],
    [
      `linear-gradient(135deg, rgb(88, 61, 210), rgb(0, 238, 182))`,
      `linear-gradient(135deg, rgb(229, 100, 184), rgb(221, 0, 238))`,
      `linear-gradient(135deg, rgb(238, 186, 0), rgb(0, 238, 214))`,
    ]
  );

  return (
    <>
      <Wrapper style={{ background }}>
        <Box style={{ x, rotateZ }} drag="x" dragSnapToOrigin />
      </Wrapper>
    </>
  );
}

export default MotionValue;
