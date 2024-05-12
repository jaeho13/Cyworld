import React from "react";
import styled from "styled-components"
import UseNavigation from "./UseNavigation";
import { RightContact, RightContactFlexBlack, RightHome, RightHomeFlexWhite, RightProfile, RightProfileFlexWhite, RightProject, RightProjectFlexWhite } from "./button/Button";
import { BackArea, BackBorder, BackColor, BackgroundImage, FiledBind } from "./background/Background";


const Contact = () => {

    const { goToHome, goToProfile, goToProject, goToContact } = UseNavigation();


    return (
        <>
            <BackgroundImage>
                <BackArea>
                    <BackBorder>
                        <BackColor>
                            <FiledBind>
                                <FiledLeft>

                                    <ContactTitle>
                                        Contact
                                    </ContactTitle>

                                    <ContactBackgroundImageFlex>
                                        <ContactBackgroundImage>
                                            <ContactImageCover>
                                                <ContactPhoneCover>
                                                    <ContactImage src="/background/Call.png" alt="Phone" />
                                                </ContactPhoneCover>

                                                <ContactMailCover>
                                                    <ContactImage src="/background/Mail.png" alt="Phone" />
                                                </ContactMailCover>
                                            </ContactImageCover>

                                            <ContactString>
                                                <ContactStringFlex>
                                                    <ContactNumber>
                                                        010-9386-9804
                                                    </ContactNumber>
                                                </ContactStringFlex>
                                                <ContactStringFlex>
                                                    <ContactMail>
                                                        jaehooo13@naver.com
                                                    </ContactMail>
                                                </ContactStringFlex>
                                            </ContactString>

                                            <ContactThankImageCover>
                                                <ContactThankImage src="/background/Last.png" alt="Thank" />
                                            </ContactThankImageCover>

                                        </ContactBackgroundImage>
                                    </ContactBackgroundImageFlex>
                                </FiledLeft>

                                <FiledRight>
                                    <RightHomeFlexWhite>
                                        <RightHome onClick={goToHome}>Home</RightHome>
                                    </RightHomeFlexWhite>

                                    <RightProfileFlexWhite>
                                        <RightProfile onClick={goToProfile}>Profile</RightProfile>
                                    </RightProfileFlexWhite>

                                    <RightProjectFlexWhite>
                                        <RightProject onClick={goToProject}>Project</RightProject>
                                    </RightProjectFlexWhite>

                                    <RightContactFlexBlack>
                                        <RightContact onClick={goToContact}>Contact</RightContact>
                                    </RightContactFlexBlack>
                                </FiledRight>
                            </FiledBind>
                        </BackColor>
                    </BackBorder>
                </BackArea>
            </BackgroundImage>
        </>
    );
}

export default Contact;

const FiledLeft = styled.div`
    width: 90%;
    height: 73vh;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
    border-radius: 16px;
    background-color: rgba(255, 255, 255, 0.4);
`

const FiledRight = styled.div`
    width: 7%;
    height: 73vh;
    /* border: 2px solid green; */
`

const ContactTitle = styled.div`
    width: 97%;
    height: 3vh;
    margin-top: 1vh;
    /* border: 2px solid blue; */
    color: #3B87AB;
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 1vh;
    padding-left: 3%;
`

const ContactBackgroundImageFlex = styled.div`
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 2px solid blue; */
`

const ContactBackgroundImage = styled.div`
    width: 95%;
    height: 65vh;
    /* border: 2px solid red; */
    background-color: white;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContactImageCover = styled.div`
    width: 100%;
    height: 20vh;
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const ContactPhoneCover = styled.div`
    width: 10%;
    height: 10vh;
    border: 2px solid black;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContactMailCover = styled.div`
    width: 10%;
    height: 10vh;
    border: 2px solid black;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContactImage = styled.img`
    width: 90%;
    height: 90%;
    object-fit: contain;
    border-radius: 16px;
`

const ContactString = styled.div`
    width: 100%;
    height: 5vh;
    /* border: 2px solid red; */
    display: flex;
`

const ContactStringFlex = styled.div`
    /* width: 25%; */
    width: 50%;
    height: 5vh;
    /* border: 2px solid blue; */
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContactNumber = styled.div`
    font-size: 1.5rem;
    color: #3B87AB;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const ContactMail = styled.div`
    font-size: 1.5rem;
    color: #3B87AB;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const ContactThankImageCover = styled.div`
    width: 95%;
    height: 40vh;
    /* border: 2px solid blue; */
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContactThankImage = styled.img`
    width: 90%;
    height: 90%;
    object-fit: contain;
    /* border: 2px solid red; */
    border-radius: 16px;
`