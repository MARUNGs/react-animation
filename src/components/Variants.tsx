import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// styled과 애니메이션을 동시에 적용할 수 있다.
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  border-radius: 40px;
  place-self: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
`;

// const myVars = {
//   start: { scale: 0 }, // initial
//   end: { scale: 1, rotateZ: 360, transition: { type: "spring", bounce: 0.8 } }, // animate
// };

const boxVars = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      // 자식요소에 접근하여 애니메이션 설정이 가능하다.
      delayChildren: 0.5,
      // 자식요소 애니메이션의 시차를 설정할 수 있다.
      staggerChildren: 0.1,
    },
  },
};

const circleVars = {
  start: {
    opacity: 0,
    y: -10, // x,y 설정은 motion에서만 사용가능
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

// main
function App() {
  return (
    <>
      <Wrapper>
        <Box variants={boxVars} initial="start" animate="end">
          {/* initial, animate prop값이 동일하면 생략할 수 있다. 기본적으로 부모요소의 props를 물려받기 때문이다. */}
          <Circle variants={circleVars} />
          <Circle variants={circleVars} />
          <Circle variants={circleVars} />
          <Circle variants={circleVars} />
        </Box>
      </Wrapper>
    </>
  );
}

export default App;
