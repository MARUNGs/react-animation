import styled from "styled-components";
import { motion } from "framer-motion";

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
  drag: {
    // color에 관련된 값을 문자열이 아닌, 숫자값으로 부여하면 motion이 애니메이션 처리해준다.
    backgroundColor: "rgb(26, 188, 156)",
    transition: {
      duration: 10,
    },
  },
};

function GesturesAndDrag() {
  return (
    <>
      <Wrapper>
        {/* 
          while? ~액션을 하는동안 애니메이션을 어떻게 설정할것인지 처리해주는 prop 
          variants로 애니메이션을 관리하게 되면 삼항연산자로 처리할 수도 있다. 
          (문자열이 매칭되면 된다)
          ex. whileHover={condition ? "hover" : "click"}
        */}
        <Box
          drag
          variants={boxVars}
          whileHover="hover"
          whileTap="click"
          whileDrag="drag"
        />
      </Wrapper>
    </>
  );
}

export default GesturesAndDrag;
