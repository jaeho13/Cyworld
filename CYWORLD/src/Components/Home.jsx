import React from "react";
import styled from "styled-components";
import UseNavigation from "./UseNavigation";

const Home = () => {

    const handleLinkClick = (url) => {
        if (url !== '사이트') {
            window.open(url, '_blank');
        }
    };

    const { goToHome, goToProfile, goToProject, goToContact } = UseNavigation();

    return (
        <>
            <BackgroundImage>
                <BackArea>
                    <BackBorder>
                        <BackColor>
                            <BoardBind>
                                <Left>
                                    <LeftTop>
                                    TODAY 11 | TOTAL 1113
                                    </LeftTop>
                                </Left>


                                
                                <RightBind>
                                    <Center>
                                        <CenterTop>
                                            
                                        </CenterTop>
                                    </Center>

                                    <Right>
                                        
                                    </Right>
                                </RightBind>
                            </BoardBind>
    

                            {/* <TopTitle>
                                <LeftTopTitle>TODAY <Visit2>11</Visit2> | TOTAL 1113</LeftTopTitle>
                                <RightTopTitle>
                                    <HomePage>이재호의 미니홈피</HomePage>
                                    <Link>
                                        <a href="https://jaeho13.github.io">https://jaeho13.github.io</a>
                                    </Link>
                                </RightTopTitle>
                            </TopTitle>


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
                            </Bind3> */}
                        </BackColor>
                    </BackBorder>
                </BackArea>
            </BackgroundImage>
        </>
    );
};

export default Home;

const BackgroundImage = styled.div`
    background-color: #a3a3a3;
    background-image: url(/background/pattern.png);
    background-size: 100px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BackArea = styled.div`
    width: 70%;
    height: 85vh;
    border: 2px solid #738186;
    border-radius: 30px;
    background-color: #b4d1da;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BackBorder = styled.div`
    width: 97%;
    height: 80vh;
    border: 3.5px dashed white;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BackColor = styled.div`
    width: 97%;
    height: 75vh;
    border: 2px solid #d4d4d4;
    border-radius: 1rem;
    background-color: #d4d4d4;
    display: flex;
    align-items: center;
`

const BoardBind = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Left = styled.div`
    width: 20%;
    height: 75vh;
    border: 2px solid red;
    display: flex;
    flex-direction: column;
`

const LeftTop = styled.div`
    width: 100%;
    height: 3vh;
    border: 2px solid black;
    /* font-size: 20px; */
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const RightBind = styled.div`
    width: 70%;
    height: 75vh;
    border: 2px solid blue;
    display: flex;
    flex-direction: row;
`

const Center = styled.div`
    width: 90%;
    height: 75vh;
    border: 2px solid red;
`

const CenterTop = styled.div`
    width: 100%;
    height: 3vh;
    border: 2px solid black;
`

const Right = styled.div`
    width: 10%;
    height: 75vh;
    border: 2px solid green;
`

// const TopTitle = styled.div`
//     display: flex;
//     flex-direction: row;
//     /* margin-top: 0.8rem; */
// `

// const LeftTopTitle = styled.div`
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     width: 20%;
//     height: 1.5rem;
//     border: 2px solid blue;
//     margin-left: 1.5rem;
//     font-size: 1.2rem;
//     padding-top: 10px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `


// const Visit2 = styled.div`
//     color: red;
//     margin-left: 0.5rem;
//     margin-right: 0.5rem;
// `


// const RightTopTitle = styled.div`
//     width: 70%;
//     display: flex;
//     flex-direction: row;
//     margin-top: 1rem;
//     border: 2px solid blue;
//     /* justify-content: space-between; */
// `

// const HomePage = styled.div`
//     width: 80%;
//     height: 2rem;
//     /* border: 2px solid black; */
//     margin-left: 2.5rem;
//     font-size: 1.5rem;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
// `

// const Link = styled.div`
//     width: 80%;
//     height: 2rem;
//     /* border: 2px solid green; */
//     margin-left: 10rem;
//     margin-right: 6rem;
//     font-size: 1.15rem;
//     display: flex;
//     justify-content: right;
//     align-items: center;
//     color: grey;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     color: #3B87AB
// `


// const Bind3 = styled.div`
//     display: flex;
//     flex-direction: row;
// `


// const Left = styled.div`
//     width: 20%;
//     height: 41rem;
//     /* border: 2px solid red; */
//     margin-top: 0.1rem;
//     margin-left: 2rem;
//     background-color: rgba(255, 255, 255, 0.6);
//     border-radius: 1rem;
//     /* padding: 1rem; */
// `

// const LeftTop = styled.div`
//     width: 90%;
//     height: 17rem;
//     /* border: 2px solid green; */
//     margin-top: 1rem;
//     margin: 0 auto;
// `

// const LeftTopImage = styled.img`
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
// `

// const LeftCenterComment = styled.div`
//     width: 90%;
//     height: 2rem;
//     font-size: 1.2rem;
//     /* border: 2px solid blue; */
//     color: #3B87AB;
//     font-weight: bold;
//     /* margin-left: 0.5rem; */
//     margin: 0 auto;
//     margin-top: 2rem;
    
// `

// const LeftCenter = styled.div`
//     width: 90%;
//     height: 13rem;
//     font-size: 1.2rem;
//     /* margin-top: 2rem; */
//     /* margin-left: 0.3rem; */
//     /* border: 2px solid red; */
//     overflow: hidden;
//     text-overflow: ellipsis;
//     margin: 0 auto;
// `

// const LeftBottomComment = styled.div`
//     width: 90%;
//     height: 2rem;
//     font-size: 1.2rem;
//     /* border: 2px solid blue; */
//     color: #3B87AB;
//     font-weight: bold;
//     /* margin-left: 0.5rem; */
//     margin: 0 auto;
//     margin-top: 1rem;
// `

// const LeftBottom = styled.div`
//     width: 90%;
//     height: 4rem;
//     margin: 0 auto;
//     /* border: 2px solid black; */
//     /* margin-top: 2rem; */
//     /* margin-left: 0.5rem; */
// `

// const Choice = styled.select`
//     width: 100%;
//     height: 2rem;
//     border: 1px solid black;
//     border-radius: 1rem;
//     color: black;
//     background-color: rgba(163, 163, 163, 0.3);
// `

// const Center = styled.div`
//     width: 70%;
//     height: 40.7rem;
//     /* border: 2px solid purple; */
//     margin-top: 0.5rem;
//     margin-left: 3rem;
//     background-color: rgba(255, 255, 255, 0.6);
//     border-radius: 1rem;
// `

// const CenterTop = styled.div`
//     width: 100%;
//     height: 10.5rem;
//     font-size: 1.2rem;
//     margin-left: 1.3rem;
//     margin-top: 0.5rem;
//     color: #3B87AB;
//     font-weight: bold;
//     /* border: 2px solid black; */
// `

// const CenterTop2Image = styled.img`
//     max-width: 100%; 
// `

// const CenterTop2 = styled.div`
//     width: 90%;
//     height: 4.5rem;
//     margin-top: 3rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     /* overflow: hidden; 내용이 넘치는 경우 숨기기 */
//     text-align: center; /* 내용 가운데 정렬 */
// `

// const CenterMiddle = styled.div`
//     width: 100%;
//     height: 1.2rem;
//     font-size: 1.2rem;
//     margin-left: 1.3rem;
//     margin-top: 3rem;
//     font-weight: bold;
//     color: #3B87AB;
//     /* border: 2px solid pink; */
// `


// const CenterBottom = styled.div`
//     width: 95%;
//     height: 23rem;
//     /* border: 2px solid pink; */
//     display: flex;
//     margin: 0 auto;
//     margin-top: 1rem;
//     /* align-items: center;
//     justify-content: center; */
// `

// const CenterBottomImage = styled.img`
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 1rem;
// `

// const Right = styled.div`
//     width: 10%;
//     height: 33rem;
//     /* border: 2px solid red; */
//     /* margin-left: 3rem; */
//     margin-top: 2rem;
// `

// const RightButton1 = styled.button`
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
//     color: white;
//     background-color: #3B87AB;
//     display: flex;
//     float: left;
//     align-items: center;
// `