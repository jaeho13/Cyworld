import React from "react";
import {
  BackgroundArea,
  BackgroundImage,
  BlueArea,
  GrayArea,
  WhiteBorder,
} from "./styles/BackgroundStyle";

const Background = ({ children }) => {
  return (
    <>
      <BackgroundArea>
        <BackgroundImage>
          <BlueArea>
            <WhiteBorder>
              <GrayArea>{children}</GrayArea>
            </WhiteBorder>
          </BlueArea>
        </BackgroundImage>
      </BackgroundArea>
    </>
  );
};

export default Background;
