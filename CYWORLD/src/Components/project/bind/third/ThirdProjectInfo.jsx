import React from "react";
import { Link, ProjectInfoTitle, TextBind } from "../styles/BindStyle";

const ThirdProjectInfo = () => {
    return (
        <>
            <TextBind>
                <ProjectInfoTitle>
                    Jell-BTI
                </ProjectInfoTitle>
                (링크 - <Link href="https://github.com/kimpizza/Jell-BTI_Project">https://github.com/kimpizza/Jell-BTI_Project</Link>)
                <br /> <br />

                1. 개발 배경 및 내용 <br />
                - 젤리 MBTI 테스트로 성향 파악 <br />
                - 내 취향에 맞는 하리보 젤리 찾기 <br /> <br />

                2. 개발 목표 <br />
                - 외부 API 사용 학습 및 백엔트 팀과 협업으로 실무 능력 향상 <br />
                - RESTful API 이해<br /> <br />

                3. 역할 <br />
                - 기획 <br />
                - Frontend <br />
                - Jelly MBTI 테스트 구현 <br />
                - RESTful API를 이용한 React, Spring 게시판 및 댓글 CRUD 구현 <br /> <br />

                4. 사용 기술 <br />
                - React, styled-components, axios, web API, RESTful API <br /> <br />

                5. 구현 내용 <br />
                - axios 통신을 이용한 비동기 통신 <br />
                - web API를 이용한 카카오, 네이버 로그인 <br />
                - RESTful API를 이용한 게시판 CRUD, Jelly MBTI 테스트 구현
            </TextBind >
        </>
    )
}

export default ThirdProjectInfo;