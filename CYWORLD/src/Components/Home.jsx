import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const handleLinkClick = (url) => {
        if (url !== '사이트') {
            window.open(url, '_blank');
        }
    };

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
                                <Visit>TODAY <Visit2>11</Visit2> | TOTAL 1113</Visit>
                                <Bind2>
                                    <HomePage>이재호의 미니홈피</HomePage>
                                    <Link>
                                        <a href="https://jaeho13.github.io">https://jaeho13.github.io</a>
                                    </Link>
                                </Bind2>
                            </Bind>

                            <Bind3>
                                <Left>
                                    <LeftTop>
                                        <LeftTopImage src="/background/Picture.png" alt="profile" />
                                    </LeftTop>
                                    <LeftCenterComment>Introduce</LeftCenterComment>
                                    <LeftCenter>
                                        프론트엔드 개발자를 꿈꾸는 이재호입니다.<br />
                                        사용자 경험을 고려한 직관적이고 효율적인 인터페이스를 디자인하고 개발하는 것에 관심이 많습니다. <br />
                                    </LeftCenter>
                                    <LeftBottomComment>
                                        Link
                                    </LeftBottomComment>
                                    <LeftBottom>
                                        <Choice onChange={(e) => handleLinkClick(e.target.value)}>
                                            <option value="사이트">깃허브 및 블로그</option>
                                            <option>https://github.com/jaeho13</option>
                                            <option>https://velog.io/@jaehooo13</option>
                                        </Choice>
                                    </LeftBottom>
                                </Left>
                                <Center>
                                    <CenterTop>Commit Status
                                        <CenterTop2>
                                            <CenterTop2Image src="https://ghchart.rshah.org/jaeho13" />
                                        </CenterTop2>
                                    </CenterTop>
                                    <CenterMiddle>Miniroom</CenterMiddle>
                                    <CenterBottom>
                                        <CenterBottomImage src="/background/study.png" alt="study" />
                                    </CenterBottom>
                                </Center>
                                <Right>
                                    <RightButton1 onClick={goToHome}>Home</RightButton1>
                                    <RightButton2 onClick={goToProfile}>Profile</RightButton2>
                                    <RightButton3 onClick={goToProject}>Project</RightButton3>
                                    <RightButton4 onClick={goToContact}>Contact</RightButton4>
                                </Right>
                            </Bind3>
                        </Main>
                    </Page>
                </BookCover>
            </Body>
        </>
    );
};

export default Home;

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

const Visit = styled.div`
    width: 20%;
    height: 3vh;
    font-size: 1.3rem;
    margin-top: 0.5vh;
    /* border: 2px solid red; */
    margin-left: 1.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Visit2 = styled.div`
    color: red;
    margin-left: 0.5vh;
    margin-right: 0.5vh;
`

const Bind2 = styled.div`
    width: 67%;
    height: 3vh;
    font-size: 1.3rem;
    margin-top: 0.5vh;
    /* border: 2px solid blue; */
    display: flex;
    margin-left: 1rem;
    /* justify-content: space-between; */
`

const HomePage = styled.div`
    width: 50%;
    height: 3vh;
    font-size: 1.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Link = styled.div`
    width: 50%;
    height: 3vh;
    font-size: 1.3rem;
    display: flex;
    justify-content: right;
    align-items: center;
    // color: grey;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #3B87AB
`

const Bind3 = styled.div`
    display: flex;
    flex-direction: row;
`

const Left = styled.div`
    width: 20%;
    height: 71vh;
    /* border: 2px solid red; */
    margin-top: 1vh;
    margin-left: 2vh;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 1vh;
    /* padding: 1vh; */
`

const LeftTop = styled.div`
    width: 90%;
    height: 28vh;
    /* border: 2px solid green; */
    margin: 0 auto;
`

const LeftTopImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const LeftCenterComment = styled.div`
    width: 90%;
    height: 2vh;
    font-size: 1.3rem;
    color: #3B87AB;
    font-weight: bold;
    margin: 0 auto;
    margin-top: 2vh;
    display: flex;
    align-items: center;
`

const LeftCenter = styled.div`
    width: 90%;
    height: 25vh;
    font-size: 1.2rem;
    /* border: 2px solid red; */
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 auto;
    margin-top: 1vh;
`

const LeftBottomComment = styled.div`
    width: 90%;
    height: 3vh;
    font-size: 1.3rem;
    /* border: 2px solid blue; */
    display: flex;
    align-items: center;
    color: #3B87AB;
    font-weight: bold;
    /* margin-left: 0.5vh; */
    margin: 0 auto;
    margin-top: 4vh;
`

const LeftBottom = styled.div`
    width: 90%;
    height: 4vh;
    margin: 0 auto;
    /* border: 2px solid black; */
    /* margin-top: 2vh; */
    /* margin-left: 0.5vh; */
`

const Choice = styled.select`
    width: 100%;
    height: 3vh;
    border: 1px solid black;
    border-radius: 1vh;
    color: black;
    /* margin-top: 1vh; */
    background-color: rgba(163, 163, 163, 0.3);
`

const Center = styled.div`
    width: 70%;
    height: 71vh;
    /* border: 2px solid purple; */
    margin-top: 1vh;
    margin-left: 3vh;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 1vh;
`

const CenterTop = styled.div`
    width: 95%;
    height: 25vh;
    // border: 2px solid red;
    font-size: 1.2rem;
    margin-left: 1.3vh;
    margin-top: 0.5vh;
    color: #3B87AB;
    font-weight: bold;
    /* border: 2px solid black; */
`

const CenterTop2Image = styled.img`
    max-width: 100%; 
`

const CenterTop2 = styled.div`
    width: 100%;
    height: 18vh;
    margin-top: 1vh;
    display: flex;
    font-size: 2rem;
    align-items: center;
    justify-content: center;
    /* overflow: hidden; 내용이 넘치는 경우 숨기기 */
    text-align: center; /* 내용 가운데 정렬 */
    // border: 2px solid blue
`

const CenterMiddle = styled.div`
    width: 100%;
    height: 3vh;
    font-size: 1.2rem;
    margin-left: 1.3vh;
    margin-top: 1vh;
    font-weight: bold;
    color: #3B87AB;
    /* border: 2px solid pink; */
`


const CenterBottom = styled.div`
    width: 95%;
    height: 38vh;
    display: flex;
    margin: 0 auto;
    margin-top: 1vh;
    /* border: 2px solid red; */
`

const CenterBottomImage = styled.img`
    width: 100%;
    height: 100%;
    // object-fit: cover;
    border-radius: 1vh;
`

const Right = styled.div`
    width: 10%;
    height: 50vh;
    margin-top: 2vh;
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
    color: black;
    background-color: white;
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
    color: white;
    background-color: #3B87AB;
    display: flex;
    float: left;
    align-items: center;
`