import React, { useRef} from "react";
import { Text } from "./styled";
import { Flex } from "../common/styled";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
const Loading = () => {
  const loadingRef = useRef();

  // const animation = gsap.to(loadingRef.current, {
  //   duration: 1,
  //   text: "Loading...",
  //   repeat: -1,
  //   yoyo: true,
  //   ease: "none",
  // });
  // useEffect(() => {
  //   animation.play(true)
  //   return () => animation.pause();
  // }, []);

  return (
    <Flex>
      <Text ref={loadingRef}>Loading...</Text>
    </Flex>
  );
};

export default Loading;
