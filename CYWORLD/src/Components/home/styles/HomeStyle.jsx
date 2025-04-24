import styled from "styled-components";

export const BoardBind = styled.div`
  width: 100%;
  min-width: 1100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* border: 2px solid red; */
`;

export const Left = styled.div`
  width: 19%;
  min-width: 240px;
  height: 75vh;
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
`;

export const LeftTopFlex = styled.div`
  width: 100%;
  height: 4vh;
  /* font-size: 20px; */
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftTop = styled.div`
  font-size: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const VisitCount = styled.div`
  color: red;
  margin-left: 8px;
  margin-right: 8px;
`;

export const LeftProfile = styled.div`
  width: 100%;
  height: 26vh;
  padding-top: 1vh;
  /* border: 2px solid blue; */
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
`;

export const LeftProfileImage = styled.img`
  width: 90%;
  height: 100%;
  object-fit: contain;
`;

export const LeftInfoTitle = styled.div`
  width: 95%;
  height: 4vh;
  /* border: 2px solid black; */
  color: #3b87ab;
  background-color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding-left: 5%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LeftInfo = styled.div`
  width: 95%;
  height: 30vh;
  /* border: 2px solid black; */
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 1.2rem;
  padding-left: 5%;
  overflow: auto;
  overflow-x: hidden;

  line-height: 1.3;
  /* overflow: hidden;
    text-overflow: ellipsis; */

  /* @media (max-width: 1024px) {
        font-size: 16px;
    }

    @media (max-width: 768px) {
        font-size: 13px;
    }

    @media (max-width: 375px) {
        font-size: 10px;
    } */
`;

export const LeftLinkTitle = styled.div`
  width: 95%;
  height: 4vh;
  /* border: 2px solid blue; */
  background-color: rgba(255, 255, 255, 0.6);
  color: #3b87ab;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding-left: 5%;
`;

export const LeftLink = styled.div`
  width: 100%;
  height: 5vh;
  /* border: 1px solid black; */
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  color: black;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftLinkSelect = styled.select`
  width: 90%;
  height: 3vh;
  border: 1px solid black;
  border-radius: 8px;
  padding-left: 2%;
  color: black;
  background-color: rgba(163, 163, 163, 0.3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* display: flex;
    align-items: center;
    margin: 0 auto; */
`;

export const RightBind = styled.div`
  width: 75%;
  min-width: 950px;
  height: 75vh;
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: row;
`;

export const Center = styled.div`
  width: 90%;
  height: 75vh;
  /* border: 2px solid red; */
`;

export const CenterTop = styled.div`
  width: 100%;
  height: 4vh;
  /* border: 2px solid black; */
  display: flex;
  flex-direction: row;
`;

export const CenterTopSiteFlex = styled.div`
  width: 50%;
  height: 4vh;
  display: flex;
  align-items: center;
  /* padding-left: 1%; */
  font-weight: bold;
`;

export const CenterTopSite = styled.div`
  /* color: #3B87AB; */
  font-size: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CenterTopLinkFlex = styled.div`
  width: 50%;
  height: 4vh;
  display: flex;
  justify-content: end;
  align-items: center;
  font-weight: bold;
`;

export const CenterTopLink = styled.div`
  font-size: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CenterCommitState = styled.div`
  width: 99%;
  height: 2vh;
  padding-top: 1vh;
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  color: #3b87ab;
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 1.2rem;
  font-weight: bold;
  padding-left: 1%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const CenterCommitImage = styled.div`
  width: 100%;
  height: 20vh;
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const CenterCommitImageArea = styled.img`
  width: 95%;
  height: 65%;
  /* height: auto; */
  /* border: 2px solid blue; */
`;

export const CenterMiniroom = styled.div`
  width: 99%;
  height: 3vh;
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  color: #3b87ab;
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 1.2rem;
  font-weight: bold;
  padding-left: 1%;
`;

export const CenterMiniroomImage = styled.div`
  width: 100%;
  height: 44vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const CenterMiniroomImageArea = styled.img`
  width: 95%;
  height: 95%;
  object-fit: fill;
  border-radius: 16px;
`;

export const Right = styled.div`
  width: 10%;
  height: 73vh;
  margin-top: 1vh;
  /* border: 2px solid red; */
  padding-top: 30px;
`;
