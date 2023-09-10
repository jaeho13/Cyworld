import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

const Profile = () => {

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
                                    <FiledTop>Introduce </FiledTop>
                                    <FiledCenter>
                                        안녕하십니까 프론트엔드를 지망하는 97년생 이재호입니다. <br /> <br />
                                        프로그래밍 언어, 데이터베이스, 프레임워크 등을 학습하며 다양한 웹 개발 프로젝트에 참여하였습니다. <br />
                                        배운 내용을 활용하는 과정에서는 고정된 것이라고 생각했던 시각적 화면이 저의 손끝에서 구현된다는 생각에 가슴이 뛰었고, 그중에서 프론트엔드 구현에 가장 흥미와 즐거움을 느껴 JavaScript와 REACT를 집중적으로 공부하였습니다. <br /> <br />

                                        1. 화면 구현 <br />

                                        사용자 인터페이스(UI)를 설계하고, REACT를 활용하여 시각적인 화면을 개발하였습니다. 특히 사용자가 쉽게 접근하고 사용할 수 있는 직관적인 디자인을 구현해 사용자 경험을 개선하기 위해 노력하였습니다. <br />
                                        <br />
                                        2. 기획 및 CRUD 기능 구현 <br />
                                        CRUD(Create, Read, Update, Delete) 기능에 대한 사용자 플로우를 고려해 데이터를 효율적으로 생성, 조회, 수정, 삭제할 수 있도록 구현하였습니다. <br />
                                        <br />
                                        3. API 사용 <br />
                                        카카오 API를 사용하여 사이트 내 소셜 로그인을 지원하거나 위치 기반 정보를 표시하는 맵 API를 사용한 경험이 있습니다. <br />
                                        <br />
                                        4. 데이터베이스 테이블 설계 <br />

                                        프로젝트의 데이터를 효율적으로 저장하고 관리하기 위해 데이터베이스 테이블을 백엔드 팀원과 함께 설계하였습니다.
                                        데이터 구조와 관계를 고려하여 테이블을 정의하고 필요한 컬럼을 설계하였습니다. <br /> <br />
                                        저는 위와 같은 작업을 통해 프론트엔드 개발 및 백엔드와의 협업 경험을 쌓았고, 이를 통해 더 나은 웹 개발자로 성장하고자 끊임없이 노력하고 있습니다. <br /> <br />

                                        앞으로도 어떤 일을 하던 책임감을 가지고 진행하며, 부족함 없이 실행할 수 있도록 하겠습니다. 감사합니다. <br />
                                    </FiledCenter>
                                    <FiledTop>Stack</FiledTop>
                                    <FiledBottom>
                                        {/* html CSS JS React Flutter <br />
                                        Aws postgresql <br />
                                        Github Notion Slack Discord <br />
                                        Figma Zeplin <br /> */}
                                        프로그래밍 언어, 데이터베이스, 프레임워크 등을 학습하며 다양한 웹 개발 프로젝트에 참여하였습니다. <br />
                                        배운 내용을 활용하는 과정에서는 고정된 것이라고 생각했던 시각적 화면이 저의 손끝에서 구현된다는 생각에 가슴이 뛰었고, 그 중 프론트엔드 구현에 가장 흥미와 즐거움을 느껴 JavaScript와 REACT를 집중적으로 공부하였습니다.
                                    </FiledBottom>

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
            </Body>
        </>
    );
}

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
`

const FiledTop = styled.div`
    width: 100%;
    height: 1.2rem;
    font-size: 1.2rem;
    color: #3B87AB;
    font-weight: bold;
    margin-top: 1.2rem;
    margin-left: 1.2rem;
    margin-bottom: 1.1rem;
    /* border: 2px solid black; */
`

const FiledCenter = styled.div`
    width: 95%;
    height: 17rem;
    margin: 0 auto;
    padding: 0.5rem;
    font-size: 1.2rem;
    color: black;
    background-color: white;
    font-weight: bold;
    border-radius: 1rem;
    overflow: auto; /* 스크롤 추가 */
    overflow-x: hidden; /* 가로 스크롤 제거 */
    white-space: pre-wrap; /*한 줄 꽉 차면 줄 바꿈*/
`

const FiledBottom = styled.div`
    width: 95%;
    height: 16rem;
    margin: 0 auto;
    padding: 0.5rem;
    font-size: 1.2rem;
    /* margin-top: 1.1rem;
    margin-left: 1.1rem; */
    color: #3B87AB;
    background-color: white;
    font-weight: bold;
    border-radius: 1rem;
    overflow: auto; /* 스크롤 추가 */
    overflow-x: hidden; /* 가로 스크롤 제거 */
    white-space: pre-wrap; /*한 줄 꽉 차면 줄 바꿈*/
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
    /* color: white;
    background-color: #3B87AB; */
    color: black;
    background-color: white;
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