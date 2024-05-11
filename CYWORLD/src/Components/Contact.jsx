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
            {/* <Body>
                <BookCover>
                    <Page>
                        <Main>
                            <Bind>
                                <Filed>
                                    <FiledTop>Contact </FiledTop>
                                    <FiledCenter>
                                        <Bind2>
                                            <FiledIcon1>
                                                <FiledIconImage1 img src="/background/Call.png" alt="call" />
                                            </FiledIcon1>
                                            <FiledIcon2>
                                                <FiledIconImage1 img src="/background/Mail.png" alt="mail" />
                                            </FiledIcon2>
                                        </Bind2>

                                        <Bind3>
                                            <FiledText1>010-9386-9804</FiledText1>
                                            <FiledText2>jaehooo13@naver.com</FiledText2>
                                        </Bind3>
                                        <FiledBottom>
                                            <FiledBottomImage img src="/background/Last.png" alt="last" />
                                        </FiledBottom>
                                    </FiledCenter>
                                </Filed>

                                <Right>
                                    <RightButton1 onClick={goToHome}>Home</RightButton1>
                                    <RightButton2 onClick={goToProfile}>Profile</RightButton2>
                                    <RightButton3 onClick={goToProject}>Project</RightButton3>
                                    <RightButton4 onClick={goToContact}>Contact</RightButton4>
                                </Right>
                            </Bind>
                        </Main>
                    </Page>
                </BookCover>
            </Body > */}
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
    padding-left: 2.5%;
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


// const FiledTop = styled.div`
//     width: 100%;
//     height: 1.2rem;
//     font-size: 1.2rem;
//     color: #3B87AB;
//     font-weight: bold;
//     margin-top: 1.2rem;
//     margin-left: 1.2rem;
// `


// const FiledCenter = styled.div`
//     width: 95%;
//     height: 38rem;
//     margin: 0 auto;
//     font-size: 1.2rem;
//     color: #3B87AB;
//     background-color: white;
//     font-weight: bold;
//     border-radius: 1rem;
// `

// const Bind2 = styled.div`
//     display: flex;
//     flex-direction: row;
//     display: flex;
//     justify-content: center;
//     margin-top: 2rem;
// `

// const FiledIcon1 = styled.div`
//     width: 8%;
//     height: 5rem;
//     border: 2px solid black;
//     border-radius: 1rem;
//     margin-right: 16rem;
//     margin-top: 2rem;
// `

// const FiledIconImage1 = styled.img`
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 1rem;
// `

// const FiledIcon2 = styled.div`
//     width: 8%;
//     height: 5rem;
//     border: 2px solid black;
//     border-radius: 1rem;
//     margin-top: 2rem;
// `


// const Bind3 = styled.div`
//     display: flex;
//     flex-direction: row;
//     display: flex;
//     justify-content: center;
// `

// const FiledText1 = styled.div`
//     width: 25%;
//     height: 3rem;
//     border-radius: 1rem;
//     margin-right: 5rem;
//     margin-top: 1rem;
//     font-size: 1.5rem;
// display: flex;
// justify-content: center;
// align-items: center;
// `

// const FiledText2 = styled.div`
//     width: 25%;
//     height: 3rem;
//     border-radius: 1rem;
//     margin-top: 1rem;
//     font-size: 1.5rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `


// const FiledBottom = styled.div`
//     width: 95%;
//     height: 25rem;
//     margin: 0 auto;
//     margin-top: 1rem;
// `

// const FiledBottomImage = styled.img`
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 1rem;
// `

// const Right = styled.div`
//     width: 10%;
//     height: 40rem;
//     margin-top: 2rem;
// `

// const RightButton1 = styled.button`
//     width: 100%;
//     height: 3rem;
//     border: 2px solid grey;
//     border-top-right-radius: 0.5rem;
//     border-bottom-right-radius: 0.5rem;
//     margin-top: 4rem;
//     font-size: 1.5rem;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     cursor: pointer;
//     color: white;
//     background-color: #3B87AB;
//     display: flex;
//     float: left;
//     align-items: center;
// `

// const RightButton2 = styled.button`
//     width: 100%;
//     height: 3rem;
//     border: 2px solid grey;
//     border-top-right-radius: 0.5rem;
//     border-bottom-right-radius: 0.5rem;
//     margin-top: 1rem;
//     font-size: 1.5rem;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     cursor: pointer;
//     color: white;
//     background-color: #3B87AB;
//     display: flex;
//     float: left;
//     align-items: center;
// `

// const RightButton3 = styled.button`
//     width: 100%;
//     height: 3rem;
//     border: 2px solid grey;
//     border-top-right-radius: 0.5rem;
//     border-bottom-right-radius: 0.5rem;
//     margin-top: 1rem;
//     font-size: 1.5rem;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     cursor: pointer;
//     color: white;
//     background-color: #3B87AB;
//     display: flex;
//     float: left;
//     align-items: center;
// `

// const RightButton4 = styled.button`
//     width: 100%;
//     height: 3rem;
//     border: 2px solid grey;
//     border-top-right-radius: 0.5rem;
//     border-bottom-right-radius: 0.5rem;
//     margin-top: 1rem;
//     font-size: 1.5rem;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     cursor: pointer;
//     /* color: white;
//     background-color: #3B87AB; */
//     color: black;
//     background-color: white;
//     display: flex;
//     float: left;
//     align-items: center;
// `