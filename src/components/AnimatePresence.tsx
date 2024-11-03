import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// styled -----
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100px;
  font-size: 22px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
`;

// const boxVars = {
//   initial: {
//     opacity: 0,
//     scale: 0,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     rotateZ: 360,
//   },
//   leaving: {
//     opacity: 0,
//     scale: 0,
//     y: 20,
//   },
// };

const box = {
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
};

function AnimatePresenceBox() {
  // const [show, setShow] = useState(false);
  // const toggleSetShow = () => setShow((prev) => !prev);

  // AnimatePresence 사용 시, 컴포넌트가 visible 상태여야 animate를 적용할 수 있다.
  // AnimatePresence 내부에는 조건문이 존재해야 한다.
  // exit : 컴포넌트가 사라질때 적용되는 애니메이션
  // custom: variants에 데이터를 보낼 수 있게 해주는 prop
  //        custom prop을 사용하게되면 variant object를 리턴함수로 변경해야 한다.
  // exitBeforeEnter(mode="wait"): 이전 컴포넌트의 exit와 현재 컴포넌트의 initial, animate 애니메이션을 동시에 수행할 것인지, 기다릴 것인지에 대한 prop

  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    setBack(false);
  };
  const prevPlease = () => {
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
    setBack(true);
  };

  return (
    <>
      <Wrapper>
        <AnimatePresence mode="wait">
          <Box
            key={visible}
            variants={box}
            initial="entry"
            animate="center"
            exit="exit"
            custom={back}
          >
            {visible}
          </Box>
          {/* {show ? (
            <Box
              variants={boxVars}
              initial="initial"
              animate="visible"
              exit="leaving"
            />
          ) : null} */}
        </AnimatePresence>
        <button onClick={nextPlease}>next</button>
        <button onClick={prevPlease}>prev</button>
      </Wrapper>
    </>
  );
}

export default AnimatePresenceBox;
