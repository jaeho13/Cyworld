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
        <div className="w-full h-screen flex justify-center items-center">
          PC 환경에서 접속 부탁드립니다.
        </div>
      </MobileView>
    </>
  );
};

export default Background;
