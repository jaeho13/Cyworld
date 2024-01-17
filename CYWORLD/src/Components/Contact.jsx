import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

const Contact = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    const goToProfile = () => {
        navigate("/profile");
    };

    const goToProject = () => {
        navigate("/project");
    };

    const goToContact = () => {
        navigate("/contact");
    };

    return (
        <>
            <Body>
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
            </Body >
        </>
    );
}

export default Contact;

const Body = styled.div`
    font-size: 16px;
    background-color: #a3a3a3;
    background-image: url(/background/pattern.png);
    background-size: 100px;
    /* position: fixed; */
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
`

const BookCover = styled.div`
    width: 70%;
    height: 85vh;
    border: 2px solid #738186;
    border-radius: 2rem;
    background-color: #b4d1da;
    margin: 0 auto;
    display: flex;
    align-items: center;
`

const Page = styled.div`
    width: 96%;
    height: 80vh;
    border: 3.5px dashed white;
    border-radius: 1rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
`

const Main = styled.div`
    width: 97%;
    height: 77vh;
    border: 2px solid #d4d4d4;
    border-radius: 1rem;
    background-color: #d4d4d4;
    margin: 0 auto;
`

const Bind = styled.div`
    display: flex;
    flex-direction: row;
`

const Filed = styled.div`
    width: 95%;
    height: 74vh;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.4);
    margin-left: 1rem;
    margin-top: 1rem;
    align-items: center;
`

const FiledTop = styled.div`
    width: 95%;
    height: 1.2rem;
    font-size: 1.2rem;
    color: #3B87AB;
    font-weight: bold;
    margin-top: 1rem;
    margin-left: 1.2rem;
`

const FiledCenter = styled.div`
    width: 95%;
    height: 67vh;
    margin: 0 auto;
    margin-top: 1rem;
    color: #3B87AB;
    background-color: white;
    font-weight: bold;
    border-radius: 1rem;
`

const Bind2 = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const FiledIcon1 = styled.div`
    width: 8%;
    height: 10vh;
    border: 2px solid black;
    border-radius: 1rem;
`

const FiledIconImage1 = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
`

const FiledIcon2 = styled.div`
    width: 8%;
    height: 10vh;
    border: 2px solid black;
    border-radius: 1rem;
`

const Bind3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

const FiledText1 = styled.div`
    width: 25%;
    height: 3rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 2px solid red;
`

const FiledText2 = styled.div`
    width: 25%;
    height: 3rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 2px solid red;
`


const FiledBottom = styled.div`
    width: 95%;
    height: 42vh;
    margin: 0 auto;
    margin-top: 1rem;
`

const FiledBottomImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
`

const Right = styled.div`
    width: 10%;
    height: 50vh;
    margin-top: 5vh;
    /* border: 2px solid red; */
`

const RightButton1 = styled.button`
    width: 90%;
    height: 5vh;
    border: 2px solid grey;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    margin-top: 1vh;
    font-size: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    color: white;
    background-color: #3B87AB;
    display: flex;
    float: left;
    align-items: center;
`

const RightButton2 = styled.button`
    width: 90%;
    height: 5vh;
    border: 2px solid grey;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    margin-top: 1vh;
    font-size: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    color: white;
    background-color: #3B87AB;
    display: flex;
    float: left;
    align-items: center;
`

const RightButton3 = styled.button`
    width: 90%;
    height: 5vh;
    border: 2px solid grey;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    margin-top: 1vh;
    font-size: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    color: white;
    background-color: #3B87AB;
    display: flex;
    float: left;
    align-items: center;
`

const RightButton4 = styled.button`
    width: 90%;
    height: 5vh;
    border: 2px solid grey;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    margin-top: 1vh;
    font-size: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    /* color: white;
    background-color: #3B87AB; */
    color: black;
    background-color: white;
    display: flex;
    float: left;
    align-items: center;
`