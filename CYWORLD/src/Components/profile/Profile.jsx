import React from "react";
import Background from '../background/Background';
import PageButton from "../button/PageButton";
import ProfileStack from "./ProfileStack";
import ProfileCareer from "./ProfileCareer";
import { BtnDown, FiledBind, FiledLeft, FiledRight } from "./styles/ProfileStyle";

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