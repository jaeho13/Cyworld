import React from "react";
import {
  BackgroundArea,
  BackgroundImage,
  BlueArea,
  GrayArea,
  WhiteBorder,
} from "./styles/BackgroundStyle";
import { BrowserView, MobileView } from "react-device-detect";

const Background = ({ children }) => {
  return (
    <>
      <BrowserView>
        <BackgroundArea>
          <BackgroundImage>
            <BlueArea>
              <WhiteBorder>
                <GrayArea>{children}</GrayArea>
              </WhiteBorder>
            </BlueArea>
          </BackgroundImage>
        </BackgroundArea>
      </BrowserView>

      <MobileView>
        <div className="w-full h-screen bg-red-500">테스트</div>
      </MobileView>
    </>
  );
};

export default Background;
