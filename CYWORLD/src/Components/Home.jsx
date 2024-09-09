import React from 'react';
import styled from "styled-components";
import Background from './background/Background';
import PageButton from "./button/PageButton";

const Home = () => {

    const handleLinkClick = (url) => {
        if (url !== '사이트') {
            window.open(url, '_blank');
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
                            <LeftProfileImage src="/background/Picture.png" alt="profile" />
                        </LeftProfile>
                        <LeftInfoTitle>
                            Introduce
                        </LeftInfoTitle>
                        <LeftInfo>
                            프론트엔드 개발자를 꿈꾸는 이재호입니다.<br />
                            사용자 경험을 고려한 직관적이고 효율적인 인터페이스를 디자인하고 개발하는 것에 관심이 많습니다.<br />
                        </LeftInfo>
                        <LeftLinkTitle>
                            Link
                        </LeftLinkTitle>
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
                                        <a href="https://jaeho13.github.io">https://jaeho13.github.io</a>
                                    </CenterTopLink>
                                </CenterTopLinkFlex>
                            </CenterTop>
                            <CenterCommitState>
                                Commit States
                            </CenterCommitState>
                            <CenterCommitImage>
                                <CenterCommitImageArea src="https://ghchart.rshah.org/jaeho13" />
                            </CenterCommitImage>
                            <CenterMiniroom>
                                Miniroom
                            </CenterMiniroom>
                            <CenterMiniroomImage>
                                <CenterMiniroomImageArea src="/background/study.png" alt="study" />
                            </CenterMiniroomImage>
                        </Center>

                        <Right>
                            <PageButton
                                name="Home"
                            />
                            <PageButton
                                name="Profile"
                            />
                            <PageButton
                                name="Project"
                            />
                            <PageButton
                                name="Contact"
                            />
                        </Right>
                    </RightBind>
                </BoardBind>
            </Background>
        </>
    )
}

export default Home;

const BoardBind = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* border: 2px solid red; */
`

const Left = styled.div`
    width: 19%;
    height: 75vh;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
`

const LeftTopFlex = styled.div`
    width: 100%;
    height: 4vh;
    /* font-size: 20px; */
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LeftTop = styled.div`
    font-size: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const VisitCount = styled.div`
    color: red;
    margin-left: 8px;
    margin-right: 8px;
`

const LeftProfile = styled.div`
    width: 100%;
    height: 26vh;
    padding-top: 1vh;
    /* border: 2px solid blue; */
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: center;
`

const LeftProfileImage = styled.img`
    width: 90%;
    height: 100%;
    object-fit: contain;
`

const LeftInfoTitle = styled.div`
    width: 95%;
    height: 4vh;
    /* border: 2px solid black; */
    color: #3B87AB;
    background-color: rgba(255, 255, 255, 0.6);
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    padding-left: 5%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`


const LeftInfo = styled.div`
    width: 95%;
    height: 30vh;
    /* border: 2px solid black; */
    background-color: rgba(255, 255, 255, 0.6);
    font-size: 1.2rem;
    padding-left: 5%;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 1024px) {
        font-size: 16px;
    }

    @media (max-width: 768px) {
        font-size: 13px;
    }

    @media (max-width: 375px) {
        font-size: 10px;
    }
`

const LeftLinkTitle = styled.div`
    width: 95%;
    height: 4vh;
    /* border: 2px solid blue; */
    background-color: rgba(255, 255, 255, 0.6);
    color: #3B87AB;
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    padding-left: 5%;
`

const LeftLink = styled.div`
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
`

const LeftLinkSelect = styled.select`
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
`

const RightBind = styled.div`
    width: 75%;
    height: 75vh;
    /* border: 2px solid blue; */
    display: flex;
    flex-direction: row;
`

const Center = styled.div`
    width: 90%;
    height: 75vh;
    /* border: 2px solid red; */
`

const CenterTop = styled.div`
    width: 100%;
    height: 4vh;
    /* border: 2px solid black; */
    display: flex;
    flex-direction: row;

`

const CenterTopSiteFlex = styled.div`
    width: 50%;
    height: 4vh;
    display: flex;
    align-items: center;
    /* padding-left: 1%; */
    font-weight: bold;
`

const CenterTopSite = styled.div`
    /* color: #3B87AB; */
    font-size: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const CenterTopLinkFlex = styled.div`
    width: 50%;
    height: 4vh;
    display: flex;
    justify-content: end;
    align-items: center;
    font-weight: bold;
`

const CenterTopLink = styled.div`
    font-size: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const CenterCommitState = styled.div`
    width: 99%;
    height: 2vh;
    padding-top: 1vh;
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    color: #3B87AB;
    background-color: rgba(255, 255, 255, 0.6);
    font-size: 1.2rem;
    font-weight: bold;
    padding-left: 1%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`

const CenterCommitImage = styled.div`
    width: 100%;
    height: 20vh;
    /* border: 2px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.6);
`

const CenterCommitImageArea = styled.img`
    width: 95%;
    height: 65%;
    /* height: auto; */
    /* border: 2px solid blue; */
`

const CenterMiniroom = styled.div`
    width: 99%;
    height: 3vh;
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    color: #3B87AB;
    background-color: rgba(255, 255, 255, 0.6);
    font-size: 1.2rem;
    font-weight: bold;
    padding-left: 1%;
`

const CenterMiniroomImage = styled.div`
    width: 100%;
    height: 44vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.6);
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
`

const CenterMiniroomImageArea = styled.img`
    width: 95%;
    height: 95%;
    object-fit: fill;
    border-radius: 16px;
`

const Right = styled.div`
    width: 10%;
    height: 73vh;
    margin-top: 1vh;
    /* border: 2px solid red; */
    padding-top: 30px
`