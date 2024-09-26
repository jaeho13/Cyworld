import React from "react";
import styled from "styled-components"


const FifthProjectInfo = () => {
    return (
        <>
            <TextBind>
                <ProjectInfoTitle>
                    도서 관리 시스템
                </ProjectInfoTitle>
                (링크 - <a href="https://github.com/jaeho13/Library">https://github.com/jaeho13/Library</a>)
                <br /> <br />
                1. 개발 배경 및 내용 <br />
                - 신규 라이브러리 사용 및 기존 학습 내용 복습 <br /> <br />

                2. 개발 목표 <br />
                - 기존 학습 내용 복습 및 정리 <br />
                - 사용해 보지 않은 신규 라이브러리 사용 <br /> <br />

                3. 사용 기술 <br />
                - React, styled-components, axios, RESTful API, react-chartjs <br /> <br />

                4. 구현 내용 <br />
                - RESTful API를 이용한 도서 리스트 호출, 검색 및 사용자 관리 CRUD <br />
                - react-chartjs를 이용한 도서 대출, 도서 분야 및 회원 연령대 차트 구현
            </TextBind>
        </>
    )
}

export default FifthProjectInfo;

const TextBind = styled.div`
    width: 40%;
    height: 24vh;
    border: 2px solid #A3A3A3;
    border-radius: 16px;
    overflow: auto;
    overflow-x: hidden;
    background-color: rgba(255, 255, 255, 0.4);
    padding-left: 1%;
    padding-top: 1%;
`

const ProjectInfoTitle = styled.div`
    font-size: 1.3rem;
`