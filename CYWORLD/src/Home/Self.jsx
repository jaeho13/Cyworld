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
                                <Visit>TODAY <Visit2>28</Visit2> | TOTAL 123456</Visit>
                                <Bind2>
                                    <HomePage>이재호의 미니홈피</HomePage>
                                    <Link>https://github.com/jaeho13</Link>
                                </Bind2>
                            </Bind>

                            <Bind3>
                                <Left>
                                    <LeftTop>사진</LeftTop>
                                    <LeftBottom>스크롤</LeftBottom>
                                </Left>
                                <Center>
                                    <CentetTop>Stack</CentetTop>
                                    <CentetMiddle>Miniroom</CentetMiddle>
                                    <CenterBottom>
                                        <CenterBottomImage src="/background/Study.png" alt="study" />
                                    </CenterBottom>
                                </Center>
                                <Right>
                                    <RightButton1>Home</RightButton1>
                                    <RightButton2>Profile</RightButton2>
                                    <RightButton3>Project</RightButton3>
                                    <RightButton4>Contact</RightButton4>
                                </Right>
                            </Bind3>
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
    /* margin-top: 0.8rem; */
`

const Bind2 = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    /* justify-content: space-between; */
`

const Bind3 = styled.div`
    display: flex;
    flex-direction: row;
`

const Visit = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 20%;
    height: 1.5rem;
    /* border: 2px solid blue; */
    margin-left: 2rem;
    font-size: 1.2rem;
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Visit2 = styled.div`
    color: red;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`


const HomePage = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 80%;
    height: 2rem;
    /* border: 2px solid black; */
    margin-left: 4rem;
    font-size: 1.5rem;
`

const Link = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 80%;
    height: 2rem;
    /* border: 2px solid green; */
    margin-left: 10rem;
    margin-right: 6rem;
    font-size: 1.15rem;
    display: flex;
    justify-content: right;
    align-items: center;
    color: grey;
`

const Left = styled.div`
    width: 20%;
    height: 41rem;
    /* border: 2px solid red; */
    margin-top: 0.1rem;
    margin-left: 2rem;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 1rem;
`

const LeftTop = styled.div`
    width: 100%;
    height: 20rem;
    /* border: 2px solid green; */
`

const LeftBottom = styled.div`
    width: 100%;
    height: 19rem;
    /* border: 2px solid black; */
`

const Center = styled.div`
    width: 60%;
    height: 40.7rem;
    /* border: 2px solid purple; */
    margin-top: 0.5rem;
    margin-left: 3rem;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 1rem;
`

const CentetTop = styled.div`
    width: 100%;
    height: 14.5rem;
    margin-left: 1.3rem;
    font-size: 1.2rem;
    margin-top: 0.5rem;
    color: #3B87AB;
    font-weight: bold;
    /* border: 2px solid black; */
`

const CentetMiddle = styled.div`
    width: 100%;
    height: 1.2rem;
    font-size: 1.2rem;
    margin-left: 1.3rem;
    font-weight: bold;
    color: #3B87AB;
`

const CenterBottom = styled.div`
    width: 95%;
    height: 19rem;
    /* border: 2px solid pink; */
    display: flex;
    margin: 0 auto;
    margin-top: 1rem;
    /* align-items: center;
    justify-content: center; */
`

const CenterBottomImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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