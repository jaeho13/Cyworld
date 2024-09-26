import React from "react";
import styled from "styled-components"
import Background from '../background/Background';
import PageButton from "../button/PageButton";
import FirstProjectSlide from "./first/FirstProjectSlide";
import FirstProjectInfo from "./first/FirstProjectInfo";
import SecondProjectSlide from "./second/SecondProjectSlide";
import SecondProjectInfo from "./second/SecondProjectInfo";
import ThirdProjectSlide from "./third/ThirdProjectSlide";
import ThirdProjectInfo from "./third/ThirdProjectInfo";
import FourthProjectSlide from "./fourth/FourthProjectSlide";
import FourthProjectInfo from "./fourth/FourthProjectInfo";
import FifthProjectSlide from "./fifth/FifthProjectSlide";
import FifthProjectInfo from "./fifth/FifthProjectInfo";

const Profile = () => {

    return (
        <>
            <Background>
                <FiledBind>
                    <FiledLeft>
                        <ProjectTitle>
                            Project
                        </ProjectTitle>

                        {/* <ProjectBind>
                            <FirstProjectSlide />
                            <FirstProjectInfo />
                        </ProjectBind> */}

                        <ProjectBind>
                            <ThirdProjectSlide />
                            <ThirdProjectInfo />
                        </ProjectBind>

                        <ProjectBind>
                            <SecondProjectSlide />
                            <SecondProjectInfo />
                        </ProjectBind>

                        <ProjectBind>
                            <FourthProjectSlide />
                            <FourthProjectInfo />
                        </ProjectBind>

                        <ProjectBind>
                            <FifthProjectSlide />
                            <FifthProjectInfo />
                        </ProjectBind>

                    </FiledLeft>

                    <FiledRight>
                        <BtnDown>
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
                        </BtnDown>
                    </FiledRight>
                </FiledBind>
            </Background>
        </>
    );
}

export default Profile;

const FiledBind = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const FiledLeft = styled.div`
    width: 90%;
    height: 76vh;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    background-color: rgba(255, 255, 255, 0.4);
    align-items: center;
    overflow: auto;
    overflow-x: hidden;
`

const ProjectTitle = styled.div`
    width: 97%;
    height: 3vh;
    margin-top: 1vh;
    color: #3B87AB;
    font-weight: bold;
    font-size: 1.5rem;
    padding-left: 3%;
    display: flex;
    align-items: center;
    margin-bottom: 3vh;
`

const ProjectBind = styled.div`
    width: 95%;
    height: 25vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 50px;
`

const FiledRight = styled.div`
    width: 7.5%;
    height: 73vh;
`

const BtnDown = styled.div`
    padding-top: 17px;
`