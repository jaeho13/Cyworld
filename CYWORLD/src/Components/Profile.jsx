import React from "react";
import styled from "styled-components"
import Home from "./Home";

const Profile = () => {
    return (
        <>
            <Body>
                <BookCover>
                    <Page>
                        <Main>
                            <Bind2>
                                <Bind>
                                    <Top>자기소개서</Top>
                                    <Bottom>스택</Bottom>
                                </Bind>

                                <Right>
                                    <RightButton1>Home</RightButton1>
                                    <RightButton2>Profile</RightButton2>
                                    <RightButton3>Project</RightButton3>
                                    <RightButton4>Contact</RightButton4>
                                </Right>
                            </Bind2>

                        </Main>
                    </Page>
                </BookCover>
            </Body>
        </>
    );
};

export default Profile;

const Body = styled.div`
    font-size: 16px;
    background-color: #a3a3a3;
    background-image: url(/background/pattern.png);
    background-size: 100px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
`

const BookCover = styled.div`
    width: 70%;
    height: 50rem;
    border: 2px solid #738186;
    border-radius: 2rem;
    background-color: #b4d1da;
    margin: 0 auto;
    margin-top: 5rem;
`

const Bind = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Bind2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

const Page = styled.div`
    width: 96%;
    height: 47rem;
    border: 3.5px dashed white;
    border-radius: 1rem;
    margin: 0 auto;
    margin-top: 1rem;
`

const Main = styled.div`
    width: 95%;
    height: 45rem;
    border: 2px solid black;
    border-radius: 1rem;
    background-color: #d4d4d4;
    margin: 0 auto;
    margin-top: 1rem;
`

const Top = styled.div`
    width: 97%;
    height: 20rem;
    /* border: 2px solid red; */
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.6);
    margin-top: 2rem;
    margin-left: 2rem;
`

const Bottom = styled.div`
    width: 97%;
    height: 20rem;
    /* border: 2px solid red; */
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.6);
    margin-top: 2rem;
    margin-left: 2rem;
`

const Right = styled.div`
    width: 10%;
    height: 40rem;
    /* border: 2px solid blue; */
    /* margin-left: 3rem; */
    margin-top: 2rem;
`

const RightButton1 = styled.button`
    width: 100%;
    height: 3rem;
    border: 2px solid grey;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    margin-top: 1rem;
    font-size: 1.5rem;
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
    width: 100%;
    height: 3rem;
    border: 2px solid grey;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    margin-top: 1rem;
    font-size: 1.5rem;
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
    width: 100%;
    height: 3rem;
    border: 2px solid grey;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    margin-top: 1rem;
    font-size: 1.5rem;
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
    width: 100%;
    height: 3rem;
    border: 2px solid grey;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    margin-top: 1rem;
    font-size: 1.5rem;
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