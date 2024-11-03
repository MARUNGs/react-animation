import styled from "styled-components";
import { motion } from "framer-motion";
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
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
`;

function LayerBox() {
  const [click, setClick] = useState(false);
  const onClick = () => {
    setClick((prev) => !prev);
  };

  // layout: css나 style는 상태값에 따라 바뀔 수 있고,
  // 그 변화는 motion이 캐치하여 애니메이션화할 수 있다.

  // layoutId: motion에게 두 개의 컴포넌트 Circle를 하나의 컴포넌트라고 알릴 수 있다.
  // 즉, 서로 다른 컴포넌트이지만 id값이 동일하면 그 둘을 연결시켜주어 부드러운 애니메이션이 보여지도록 처리한다.
  // 근본적으로 서로 다른 컴포넌트이므로 style을 다르게 줄 수 있다.
  return (
    <>
      <Wrapper onClick={onClick}>
        <Box>
          {!click ? (
            <Circle layoutId="circle" style={{ borderRadius: "50px" }} />
          ) : null}
        </Box>
        <Box>
          {click ? (
            <Circle layoutId="circle" style={{ borderRadius: "0", scale: 2 }} />
          ) : null}
        </Box>
      </Wrapper>
    </>
  );
}

export default LayerBox;
