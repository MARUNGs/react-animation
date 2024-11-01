import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

// styled -----
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
`;

const BiggerBox = styled(motion.div)`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

// motion -----
const boxVars = {
  hover: {
    scale: 1.5,
    rotateZ: 90,
  },
  click: {
    scale: 1,
    borderRadius: "100px",
  },
  /*
  drag: {
    // color에 관련된 값을 문자열이 아닌, 숫자값으로 부여하면 motion이 애니메이션 처리해준다.
    backgroundColor: "rgb(26, 188, 156)",
    transition: {
      duration: 10,
    },
  },
  */
};

function GesturesAndDrag() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Wrapper>
        {/* 
          while? ~액션을 하는동안 애니메이션을 어떻게 설정할것인지 처리해주는 prop 
          variants로 애니메이션을 관리하게 되면 삼항연산자로 처리할 수도 있다. 
          (문자열이 매칭되면 된다)
          ex. whileHover={condition ? "hover" : "click"}
        */}
        <BiggerBox ref={biggerBoxRef}>
          <Box
            // drag="x": x축만 드래그 가능 // drag="y": y축만 드래그 가능
            drag
            // dragConstraints: 드래그가 허용되는 영역
            // ref 개념을 이용하여 처리가능(ref: 특정 요소와 바인딩할 수 있는 prop)
            dragConstraints={biggerBoxRef}
            // 드래그 이후 다시 정중앙으로 돌려보내기
            // dragSnapToOrigin
            // dragElastic: 당기는 힘(default: 0.5) 0 ~ 1 설정가능
            dragElastic={0.5}
            variants={boxVars}
            whileHover="hover"
            whileTap="click"
            whileDrag="drag"
          />
        </BiggerBox>
      </Wrapper>
    </>
  );
}

export default GesturesAndDrag;
