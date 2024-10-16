import React from "react";
import { Link, ProjectInfoTitle, TextBind } from "../styles/BindStyle";

const FourthProjectInfo = () => {
    return (
        <>
            <TextBind>
                <ProjectInfoTitle>
                    셀런트
                </ProjectInfoTitle>
                (링크 - <Link href="https://github.com/jaeho13/Sellent">https://github.com/jaeho13/Sellent</Link>)
                <br /> <br />

                1. 개발 배경 및 내용<br />
                - 낭비되고 있는 재능을 구매하고 판매 <br />
                - 자신이 가진 재능을 판매하거나 구매할 수 있는 재능 거래 사이트 <br /> <br />

                2. 개발 목표 <br />
                - 카카오 지도, 결제 API 구현 <br />
                - 카카오, 네이버 로그인 API 구현 <br />
                - React, Spring 게시판 및 댓글 CRUD 정리 <br /> <br />

                3. 역할 <br />
                - 기획 및 디자인 <br />
                - Frontend <br />
                - 네이버 및 카카오 로그인 API 구현 <br />
                - 카카오 지도 API, 카카오 결제 API <br />
                - RESTful API를 이용한 React, Spring 게시판 및 댓글 CRUD 구현 <br /> <br />

                4. 사용 기술 <br />
                - React, styled-components, axios, 카카오 API(로그인, 지도, 결제), RESTful API <br /> <br />

                5. 구현 내용 <br />
                - axios 통신을 이용한 비동기 통신 <br />
                - web API를 이용한 카카오 로그인 <br />
                - 지도 API를 이용한 거래 장소 지정 <br />
                - 결제 API를 이용한 가상 결제 시스템 구현 <br />
                - RESTful API를 이용한 구매, 판매 거래 및 댓글 CRUD
            </TextBind >
        </>
    )
}

export default FourthProjectInfo;