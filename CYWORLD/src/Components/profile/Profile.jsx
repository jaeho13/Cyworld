import React from "react";
import styled from "styled-components"
import Background from '../background/Background';
import PageButton from "../button/PageButton";
import ProfileStack from "./ProfileStack";
import ProfileCareer from "./ProfileCareer";

const Profile = () => {

    return (
        <>
            <Background>
                <FiledBind>
                    <FiledLeft>
                        <ProfileStack title="Stack" />

                        <ProfileCareer title="Career" />

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
`

const FiledRight = styled.div`
    width: 7.5%;
    height: 73vh;
`

const BtnDown = styled.div`
    padding-top: 17px;
`