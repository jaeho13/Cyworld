import React from "react";
import { Link, ProjectInfoTitle, TextBind } from "../styles/BindStyle";

const FifthProjectInfo = () => {
    return (
        <>
            <TextBind>
                <ProjectInfoTitle>
                    도서 관리 시스템
                </ProjectInfoTitle>
                (링크 - <Link href="https://github.com/jaeho13/Library">https://github.com/jaeho13/Library</Link>)
                <br /> <br />

                1. 개발 배경 및 내용 <br />
                - 신규 라이브러리 사용 및 기존 학습 내용 복습 <br /> <br />

                2. 개발 목표 <br />
                - 기존 학습 내용 복습 및 정리 <br />
                - 사용해 보지 않은 신규 라이브러리 사용 <br /> <br />

                3. 역할 <br />
                - 기획 및 디자인 <br />
                - Frontend <br />
                - RESTful API를 이용한 React, Spring 게시판 CRUD 구현 <br />
                - 차트를 이용한 대시보드 구현 <br /> <br />

                4. 사용 기술 <br />
                - React, styled-components, axios, RESTful API, react-chartjs <br /> <br />

                5. 구현 내용 <br />
                - axios 통신을 이용한 비동기 통신 <br />
                - 도서 검색 기능 구현 <br />
                - RESTful API를 이용한 도서, 사용자 관리 CRUD <br />
                - react-chartjs를 이용한 대시보드 구현(도서 대출, 도서 분야, 회원 연령대)
            </TextBind>
        </>
    )
}

export default FifthProjectInfo;