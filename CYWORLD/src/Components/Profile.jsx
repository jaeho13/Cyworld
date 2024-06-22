import React from "react";
import styled from "styled-components"
import UseNavigation from "./UseNavigation";
import { RightContact, RightContactFlexWhite, RightHome, RightHomeFlexWhite, RightProfile, RightProfileFlexBlack, RightProject, RightProjectFlexWhite } from "./button/Button";
import { BackArea, BackBorder, BackColor, BackgroundImage } from "./background/Background";


const Profile = () => {

    const { goToHome, goToProfile, goToProject, goToContact } = UseNavigation();


    return (
        <>
            <BackgroundImage>
                <BackArea>
                    <BackBorder>
                        <BackColor>
                            <FiledBind>

                                <FiledLeft>
                                    <BoardTitle>Stack</BoardTitle>
                                    <StackBoard>
                                        <StackSkillFlex>
                                            <StackSkillTitle>
                                                Front-End
                                            </StackSkillTitle>

                                            <StackSkillTitle>
                                                Tool
                                            </StackSkillTitle>
                                        </StackSkillFlex>

                                        <StackSkillFlex>
                                            <StackSkillInfo>
                                                - JavaScript <br />
                                                - React, Styled-Components <br />
                                            </StackSkillInfo>

                                            <StackSkillInfo>
                                                - Dbeaver <br />
                                                - Sourcetree <br />
                                                - Figma Zeplin <br />
                                            </StackSkillInfo>
                                        </StackSkillFlex>


                                        <StackSkillFlex>
                                            <StackSkillTitle>
                                                Experience
                                            </StackSkillTitle>
                                            <StackSkillTitle>
                                                Etc.
                                            </StackSkillTitle>
                                        </StackSkillFlex>
                                        <StackSkillFlex>
                                            <StackSkillInfo>
                                                - DB <br />
                                                - Flutter <br />
                                                - Android <br />
                                            </StackSkillInfo>

                                            <StackSkillInfo>
                                                - Github Notion <br />
                                                - Slack Discord <br />
                                                - MsOffice Hwp <br />
                                            </StackSkillInfo>
                                        </StackSkillFlex>
                                    </StackBoard>

                                    <BoardTitle>Career</BoardTitle>
                                    <CareerBoard>
                                        <CareerFlex>
                                            <CareerName>
                                                인졀미 (23.07 ~ 24.02)
                                            </CareerName>
                                        </CareerFlex>
                                        <CareerFlex>
                                            <CareerExperience>
                                                - 앱 프론트 개발 및 관리자 페이지 개발 <br />
                                                - 사용자 경험 개선을 위한 테스트 및 버그 리포트 작성 <br />
                                                - PostgreSQL을 이용한 게임 데이터 밸런스 작업 진행 <br />
                                            </CareerExperience>
                                        </CareerFlex>

                                        <CareerFlex>
                                            <CareerName>
                                                라온시큐어 (24.02 ~ )
                                            </CareerName>
                                        </CareerFlex>
                                        <CareerFlex>
                                            <CareerExperience>
                                                - 샘플 앱 및 데모 앱 개선 <br />
                                                - 어플리케이션 빌드 및 테스트 <br />
                                                - 관리자 페이지 화면 ui 개선 <br />
                                                {/* - 장애 대응 <br />
                                                - 관리자 페이지 리액트 라이브러리로 마이그레이션 <br /> */}
                                            </CareerExperience>
                                        </CareerFlex>
                                    </CareerBoard>



                                </FiledLeft>

                                <FiledRight>
                                    <RightHomeFlexWhite>
                                        <RightHome onClick={goToHome}>Home</RightHome>
                                    </RightHomeFlexWhite>

                                    <RightProfileFlexBlack>
                                        <RightProfile onClick={goToProfile}>Profile</RightProfile>
                                    </RightProfileFlexBlack>

                                    <RightProjectFlexWhite>
                                        <RightProject onClick={goToProject}>Project</RightProject>
                                    </RightProjectFlexWhite>

                                    <RightContactFlexWhite>
                                        <RightContact onClick={goToContact}>Contact</RightContact>
                                    </RightContactFlexWhite>
                                </FiledRight>

                            </FiledBind>
                        </BackColor>
                    </BackBorder>
                </BackArea>
            </BackgroundImage>
        </>
    );
}

export default Profile;

const FiledBind = styled.div`
    width: 100%;
    /* border: 2px solid black; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const FiledLeft = styled.div`
    width: 90%;
    height: 73vh;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background-color: rgba(255, 255, 255, 0.4);
`

const FiledRight = styled.div`
    width: 7.5%;
    height: 73vh;
    /* border: 2px solid green; */
`

const BoardTitle = styled.div`
    width: 95%;
    height: 3vh;
    margin-top: 1vh;
    /* border: 2px solid red; */
    padding-left: 1%;
    color: #3B87AB;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-bottom: 1vh;
`

const StackBoard = styled.div`
    width: 95%;
    height: 30vh;
    /* border: 2px solid black; */
    border-radius: 16px;
    background-color: white;
    margin-bottom: 1vh;
    padding: 8px;
    /* padding-left: 8px;
    padding-top: 8px; */
`

const StackSkillFlex = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 1%;
`

const StackSkillTitle = styled.div`
    width: 50%;
    height: 4vh;
    /* border: 2px solid red; */
    color: #3B87AB;
    font-weight: bold;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
`

const StackSkillInfo = styled.div`
    width: 50%;
    height: 10vh;
    /* border: 2px solid blue; */
    overflow: auto;
    overflow-x: hidden;
    white-space: pre-wrap;
    font-size: 1.2rem;
`

const CareerBoard = styled.div`
    width: 95%;
    height: 30vh;
    /* border: 2px solid black; */
    border-radius: 16px;
    background-color: white;
    margin-bottom: 1vh;
    padding: 8px;
    /* padding-left: 8px;
    padding-top: 8px; */
    overflow: auto;
    overflow-x: hidden;
    white-space: pre-wrap;
`

const CareerFlex = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 1%;
`

const CareerName = styled.div`
    width: 100%;
    height: 4vh;
    /* border: 2px solid red; */
    font-size: 1.3rem;
    font-weight: bold;
    color: #3B87AB;
    display: flex;
    align-items: center;
    overflow: auto;
    overflow-x: hidden;
    white-space: pre-wrap;
`

const CareerExperience = styled.div`
    width: 100%;
    height: 10vh;
    /* border: 2px solid blue; */
    font-size: 1.2rem;
    overflow: auto;
    overflow-x: hidden;
    white-space: pre-wrap;
`