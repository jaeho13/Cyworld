import React from "react";
import { ProjectInfoTitle, TextBind } from "../styles/BindStyle";

const SecondProjectInfo = () => {
    return (
        <>
            <TextBind>
                <ProjectInfoTitle>
                    펜팔펜스
                </ProjectInfoTitle>
                (링크 - <a href="https://github.com/jaeho13/PenPalPens">https://github.com/jaeho13/PenPalPens</a>)
                <br /> <br />

                1. 개발 배경 및 내용 <br />
                - 어릴 적 펜팔(penpal) 친구와 주고받던 교환일기, 펜(pens)으로 다이어리에 작성하던 일기를 웹으로 구현해 시간이 지나도 사라지지 않는 일기장을 구현 <br /> <br />

                2. 개발 목표 <br />
                - 일기 및 친구와의 교환일기 작성 <br />
                - 카카오 로그인 API 구현 <br />
                - React, Spring 게시판 CRUD 정리 <br />  <br />

                3. 역할 <br />
                - 기획 및 디자인 <br />
                - Frontend <br />
                - 카카오 로그인 API 구현 <br />
                - RESTful API를 이용한 React, Spring 게시판 CRUD 구현 <br /> <br />

                4. 사용 기술 <br />
                - React, styled-components, axios, web API, RESTful API <br /> <br />

                5. 구현 내용 <br />
                - axios 통신을 이용한 비동기 통신 <br />
                - web API를 이용한 카카오 로그인 <br />
                - 초대코드 공유를 이용한 교환 일기 연결 <br />
                - RESTful API를 이용한 일기 및 교환 일기 구현 <br />
                - 공통 질문 생성 및 교환 일기 CRUD
            </TextBind >
        </>
    )
}

export default SecondProjectInfo;