import styled from "styled-components";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

// styled -----
const Wrapper = styled(motion.div)`
  height: 200vh;
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

function Scroll() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  // useEffect(
  //   () => rotateZ.onChange(() => console.log(rotateZ.get())),
  //   [rotateZ]
  // );

  const background = useTransform(
    x,
    [-800, 0, 800],
    [
      `linear-gradient(135deg, rgb(88, 61, 210), rgb(0, 238, 182))`,
      `linear-gradient(135deg, rgb(229, 100, 184), rgb(221, 0, 238))`,
      `linear-gradient(135deg, rgb(238, 186, 0), rgb(0, 238, 214))`,
    ]
  );

  const { scrollY, scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  useEffect(() => {
    scrollY.onChange(() => console.log(scrollY.get(), scrollYProgress.get()));
  }, [scrollY, scrollYProgress]);

  return (
    <>
      <Wrapper style={{ background }}>
        <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
      </Wrapper>
    </>
  );
}

export default Scroll;
