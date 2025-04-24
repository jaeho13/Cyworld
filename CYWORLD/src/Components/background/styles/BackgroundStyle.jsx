import styled from "styled-components";

export const BackgroundImage = styled.div`
  background-color: #a3a3a3;
  background-image: url(/background/pattern.png);
  background-size: 100px;
  /* position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  border: 2px solid pink;
`;

export const BlueArea = styled.div`
  width: 70%;
  min-width: 1340px;
  height: 85vh;
  border: 2px solid #738186;
  border-radius: 30px;
  background-color: #b4d1da;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhiteBorder = styled.div`
  width: 97%;
  min-width: 1300px;
  height: 80vh;
  border: 3.5px dashed white;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GrayArea = styled.div`
  width: 97%;
  min-width: 1250px;
  height: 78vh;
  border: 2px solid #d4d4d4;
  border-radius: 16px;
  background-color: #d4d4d4;
  display: flex;
`;

export const Test = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ImgTest = styled.div`
  width: 100%;
  min-width: 1440px;
  height: 100%;
  background-color: #a3a3a3;
  background-image: url(/background/pattern.png);
  background-size: 100px 100px;
  background-repeat: repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
