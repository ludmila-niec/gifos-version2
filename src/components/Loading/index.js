import React, { useRef} from "react";
import { Text } from "./styled";
import { Flex } from "../common/styled";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
const Loading = () => {
  const loadingRef = useRef();

  return (
    <Flex>
      <Text role='status' aria-live="polite" ref={loadingRef}>Loading...</Text>
    </Flex>
  );
};

export default Loading;
