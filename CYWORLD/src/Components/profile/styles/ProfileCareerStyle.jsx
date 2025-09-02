import styled from "styled-components";

export const BoardTitle = styled.div`
  width: 97%;
  height: 3vh;
  margin-top: 1vh;
  color: #3b87ab;
  font-weight: bold;
  font-size: 1.5rem;
  padding-left: 3%;
  display: flex;
  align-items: center;
`;

export const BoardArea = styled.div`
  width: 93%;
  height: 30vh;
  /* min-height: 290px; */
  border: 2px solid #d4d4d4;
  border-radius: 16px;
  background-color: white;
  margin-top: 1vh;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 1vh;
  overflow: auto;
  overflow-x: hidden;
  white-space: pre-wrap;
`;

export const CareerTitle = styled.div`
  width: 100%;
  height: 3.5vh;
  /* min-height: 33px; */
  color: #3b87ab;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  /* border: 2px solid red; */
`;

export const CareerContent = styled.div`
  width: 100%;
  height: 10vh;
  /* min-height: 95px; */
  margin-bottom: 10px;
  font-size: 1.2rem;
  /* border: 2px solid red; */
  overflow: auto;
  overflow-x: hidden;
  white-space: pre-wrap;
  /* line-height: 1.3; */
  line-height: 1.2;
`;
