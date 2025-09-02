import React from "react";
import Background from "../background/Background";
import PageButton from "../button/PageButton";
import {
  BoardBind,
  Center,
  CenterCommitImage,
  CenterCommitImageArea,
  CenterCommitState,
  CenterMiniroom,
  CenterMiniroomImage,
  CenterMiniroomImageArea,
  CenterTop,
  CenterTopLink,
  CenterTopLinkFlex,
  CenterTopSite,
  CenterTopSiteFlex,
  Left,
  LeftInfo,
  LeftInfoTitle,
  LeftLink,
  LeftLinkSelect,
  LeftLinkTitle,
  LeftProfile,
  LeftProfileImage,
  LeftTop,
  LeftTopFlex,
  Right,
  RightBind,
  VisitCount,
} from "./styles/HomeStyle";

const Home = () => {
  const handleLinkClick = (url) => {
    if (url !== "사이트") {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <Background>
        <BoardBind>
          <Left>
            <LeftTopFlex>
              <LeftTop>Today</LeftTop>
              <VisitCount>11</VisitCount>
              <LeftTop>| TOTAL 1113</LeftTop>
            </LeftTopFlex>

            <LeftProfile>
              <LeftProfileImage src="/background/picture.png" alt="profile" />
            </LeftProfile>

            <LeftInfoTitle>Introduce</LeftInfoTitle>

            <LeftInfo>
              프론트엔드 개발자를 꿈꾸는 이재호입니다.
              <br />
              사용자 경험을 고려한 직관적이고 효율적인 인터페이스를 디자인하고
              개발하는 것에 관심이 많습니다.
              <br />
            </LeftInfo>

            <LeftLinkTitle>Link</LeftLinkTitle>

            <LeftLink>
              <LeftLinkSelect onChange={(e) => handleLinkClick(e.target.value)}>
                <option value="사이트">깃허브 및 블로그</option>
                <option>https://github.com/jaeho13</option>
                <option>https://velog.io/@jaehooo13</option>
              </LeftLinkSelect>
            </LeftLink>
          </Left>

          <RightBind>
            <Center>
              <CenterTop>
                <CenterTopSiteFlex>
                  <CenterTopSite> 이재호의 미니홈피</CenterTopSite>
                </CenterTopSiteFlex>

                <CenterTopLinkFlex>
                  <CenterTopLink>
                    <a href="https://jaeho13.github.io/#/">
                      https://jaeho13.github.io/#/
                    </a>
                  </CenterTopLink>
                </CenterTopLinkFlex>
              </CenterTop>

              <CenterCommitState>Commit States</CenterCommitState>

              <CenterCommitImage>
                <CenterCommitImageArea src="https://ghchart.rshah.org/jaeho13" />
              </CenterCommitImage>

              <CenterMiniroom>Miniroom</CenterMiniroom>

              <CenterMiniroomImage>
                <CenterMiniroomImageArea
                  src="/background/study.png"
                  alt="study"
                />
              </CenterMiniroomImage>
            </Center>

            <Right>
              <PageButton name="Home" />
              <PageButton name="Profile" />
              <PageButton name="Project" />
              <PageButton name="Contact" />
            </Right>
          </RightBind>
        </BoardBind>
      </Background>
    </>
  );
};

export default Home;
