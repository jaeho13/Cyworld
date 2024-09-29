import React from "react";
import Background from '../background/Background';
import PageButton from "../button/PageButton";
import FirstProjectSlide from "./bind/first/FirstProjectSlide";
import FirstProjectInfo from "./bind/first/FirstProjectInfo";
import SecondProjectSlide from "./bind/second/SecondProjectSlide";
import SecondProjectInfo from "./bind/second/SecondProjectInfo";
import ThirdProjectSlide from "./bind/third/ThirdProjectSlide";
import ThirdProjectInfo from "./bind/third/ThirdProjectInfo";
import FourthProjectSlide from "./bind/fourth/FourthProjectSlide";
import FourthProjectInfo from "./bind/fourth/FourthProjectInfo";
import FifthProjectSlide from "./bind/fifth/FifthProjectSlide";
import FifthProjectInfo from "./bind/fifth/FifthProjectInfo";
import { BtnDown, FiledBind, FiledLeft, FiledRight, ProjectBind, ProjectTitle } from "./styles/ProjectStyle";

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