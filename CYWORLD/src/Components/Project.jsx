import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

const Project = () => {

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
                                    <FiledTop>프로젝트</FiledTop>

                                    <Bind2>
                                        <Contents>1번</Contents>
                                        <ContentsDetail>
                                            <ContentsDetailTitle>싸이월드 자소서</ContentsDetailTitle>

                                        </ContentsDetail>

                                    </Bind2>

                                    <Bind2>
                                        <Contents>2번</Contents>
                                        <ContentsDetail>
                                            <ContentsDetailTitle>젤비티아이</ContentsDetailTitle>
                                            처음으로 참여한 팀 프로젝트입니다. <br />
                                            젤리를 먹고 후기를 남길 수 있고 다른 사람의 후기에 댓글도 달 수 있습니다. <br />
                                            이 프로젝트에서 저는 게시판 및 댓글 구현을 맡아 리액트 스프링 CRUD를 작업하였습니다. <br />
                                        </ContentsDetail>
                                    </Bind2>

                                    <Bind2>
                                        <Contents>3번</Contents>
                                        <ContentsDetail>
                                            <ContentsDetailTitle>펜팔펜스</ContentsDetailTitle>

                                        </ContentsDetail>
                                    </Bind2>

                                    <Bind2>
                                        <Contents>4번</Contents>
                                        <ContentsDetail>4번 설명</ContentsDetail>
                                    </Bind2>
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

export default Project;

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
`

const Filed = styled.div`
    width: 95%;
    height: 43rem;
    /* border: 2px solid red; */
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.4);
    margin-top: 1rem;
    margin-left: 2rem;
    overflow: auto; /* 스크롤 추가 */
    overflow-x: hidden; /* 가로 스크롤 제거 */
`

const FiledTop = styled.div`
    width: 100%;
    height: 1.2rem;
    font-size: 1.2rem;
    color: #3B87AB;
    font-weight: bold;
    margin-top: 1.2rem;
    margin-left: 1.2rem;
    margin-bottom: 2rem;
    /* border: 2px solid black; */
`

const Bind2 = styled.div`
    display: flex;
    flex-direction: row;
`

const Contents = styled.div`
    width: 46%;
    height: 15rem;
    margin-left: 2rem;
    margin-bottom: 3rem;
    border: 2px solid #A3A3A3;
    border-radius: 1rem;
    opacity: 0.9;
`

const ContentsDetail = styled.div`
    width: 46%;
    height: 15rem;
    margin-left: 2rem;
    margin-bottom: 3rem;
    border-radius: 1rem;
    /* border: 2px solid red; */
    background-color: rgba(255, 255, 255, 0.4);
    overflow: auto; /* 스크롤 추가 */
    overflow-x: hidden; /* 가로 스크롤 제거 */
    white-space: pre-wrap;
`

const ContentsDetailTitle = styled.div`
    font-size: 1.3rem;
 `


const Right = styled.div`
    width: 10%;
    height: 40rem;
    /* border: 2px solid blue;   */
    /* margin-left: 3rem; */
    margin-top: 2rem;
`

const RightButton1 = styled.button`
    width: 100%;
    height: 3rem;
    border: 2px solid grey;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    margin-top: 4rem;
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
    /* color: white;
    background-color: #3B87AB; */
    color: black;
    background-color: white;
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