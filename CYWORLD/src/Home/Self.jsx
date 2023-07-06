import React from "react";
import styled from "styled-components";

const Self = () => {
    return (
        <>
            <Body>
                <BookCover>
                    <Page>
                        <Main>
                            <Bind>
                                <Visit>방문자수 123명</Visit>
                                <HomePage>이재호의 미니홈피</HomePage>
                                <Link>이 홈페이지 주소</Link>
                            </Bind>

                            <Bind2>
                                <Left>
                                    <LeftTop>사진</LeftTop>
                                    <LeftBottom>스크롤</LeftBottom>
                                </Left>
                                <Center>
                                    <CentetTop>깃허브 그것처럼 기술 간단하게</CentetTop>
                                    <CentetBottom>공부 사진</CentetBottom>
                                </Center>
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

export default Self;

const Body = styled.div`
    font-size: 16px; /* 예시로 16px을 기준으로 설정 */
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

const Page = styled.div`
    width: 96%;
    height: 47rem;
    border: 3.5px dashed white;
    border-radius: 1rem;
    margin: 0 auto;
    margin-top: 1rem;
`

const Main = styled.div`
    width: 97%;
    height: 45rem;
    border: 2px solid #d4d4d4;
    border-radius: 1rem;
    background-color: #d4d4d4;
    margin: 0 auto;
    margin-top: 1rem;
`

const Bind = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 0.8rem;
`

const Bind2 = styled.div`
    display: flex;
    flex-direction: row;
`

const Visit = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 20%;
    height: 3rem;
    border: 2px solid blue;
    margin-left: 2rem;
    font-size: 2rem;
`

const HomePage = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 20%;
    height: 3rem;
    border: 2px solid black;
    margin-left: 3rem;
    font-size: 2rem;
`

const Link = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 30%;
    height: 3rem;
    border: 2px solid green;
    margin-left: 3rem;
    font-size: 2rem;
`

const Left = styled.div`
    width: 20%;
    height: 33rem;
    border: 2px solid red;
    margin-top: 2rem;
    margin-left: 2rem;
`

const LeftTop = styled.div`
    width: 100%;
    height: 20rem;
    border: 2px solid green;
`

const LeftBottom = styled.div`
    width: 100%;
    height: 10rem;
    border: 2px solid black;
`

const Center = styled.div`
    width: 60%;
    height: 33rem;
    border: 2px solid purple;
    margin-top: 2rem;
    margin-left: 3rem;
`

const CentetTop = styled.div`
    width: 100%;
    height: 15rem;
    border: 2px solid black;
`

const CentetBottom = styled.div`
    width: 100%;
    height: 15rem;
    border: 2px solid pink;
`

const Right = styled.div`
    width: 10%;
    height: 33rem;
    /* border: 2px solid red; */
    /* margin-left: 3rem; */
    margin-top: 2rem;
`

const RightButton1 = styled.button`
    width: 100%;
    height: 3rem;
    border: 2px solid black;
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
    border: 2px solid black;
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
    border: 2px solid black;
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
    border: 2px solid black;
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