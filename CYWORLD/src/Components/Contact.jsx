import React from "react";
import styled from "styled-components"
import Background from './background/Background';
import PageButton from "./button/PageButton";

const Contact = () => {

    return (
        <>
            <Background>
                <FiledBind>
                    <FiledLeft>
                        <ContactTitle>
                            Contact
                        </ContactTitle>

                        <BoardBind>
                            <BoardTop>
                                <IconBorder>
                                    <ContactIcon src="/background/Call.png" alt="Phone" />
                                </IconBorder>

                                <IconBorder>
                                    <ContactIcon src="/background/Mail.png" alt="Phone" />
                                </IconBorder>
                            </BoardTop>

                            <BoardCenterBind>
                                <BoardCenter>
                                    010-9386-9804
                                </BoardCenter>

                                <BoardCenter>
                                    jaehooo13@naver.com
                                </BoardCenter>
                            </BoardCenterBind>

                            <BoardBottom>
                                <ImgBorder>
                                    <EndImg src="/background/Last.png" alt="Thank" />
                                </ImgBorder>
                            </BoardBottom>
                        </BoardBind>
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

export default Contact;

const FiledBind = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const FiledLeft = styled.div`
    width: 90%;
    height: 76vh;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    background-color: rgba(255, 255, 255, 0.4);
`

const ContactTitle = styled.div`
    width: 97%;
    height: 3vh;
    margin-top: 1vh;
    color: #3B87AB;
    font-weight: bold;
    font-size: 1.5rem;
    padding-left: 3%;
    display: flex;
    align-items: center;
`

const BoardBind = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BoardTop = styled.div`
    width: 95%;
    height: 15vh;
    margin-top: 1vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`

const IconBorder = styled.div`
    width: 90px;
    height: 90px;
    border: 2px solid black;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContactIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 16px;
`

const BoardCenterBind = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
`

const BoardCenter = styled.div`
    width: 50%;
    height: 7vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: #3B87AB;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const BoardBottom = styled.div`
    width: 95%;
    height: 48vh;
    background-color: white;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImgBorder = styled.div`
    width: 90%;
    height: 90%;
    border-radius: 16px;
`

const EndImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 16px;
`

const FiledRight = styled.div`
    width: 7.5%;
    height: 73vh;
`

const BtnDown = styled.div`
    padding-top: 17px;
`