import React from "react";
import {
  BackgroundImage,
  BlueArea,
  GrayArea,
  ImgTest,
  Test,
  WhiteBorder,
} from "./styles/BackgroundStyle";

const Background = ({ children }) => {
  return (
    <>
      <Test>
        <ImgTest>
          <BlueArea>
            <WhiteBorder>
              <GrayArea>{children}</GrayArea>
            </WhiteBorder>
          </BlueArea>
        </ImgTest>
      </Test>
    </>
  );
};

export default Background;
