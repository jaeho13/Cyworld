import React from "react";
import Background from '../background/Background';
import PageButton from "../button/PageButton";
import { BoardBind, BoardBottom, BoardCenter, BoardCenterBind, BoardTop, BtnDown, ContactIcon, ContactTitle, EndImg, FiledBind, FiledLeft, FiledRight, IconBorder, ImgBorder } from "./styles/ContactStyle";

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