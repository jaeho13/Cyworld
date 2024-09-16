import React from "react";
import styled from "styled-components"


const FourthProjectInfo = () => {
    return (
        <>
            <TextBind>
                <ProjectInfoTitle>
                    셀런트
                </ProjectInfoTitle>
                (링크 - <a href="https://github.com/jaeho13/Sellent">https://github.com/jaeho13/Sellent</a>)
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
                - React, Spring, Oracle, Figma <br /> <br />

                5. 프로젝트 후기 <br />
                이번 프로젝트에서는 로그인 API만을 사용한게 아닌 다양한 API를 사용해보고 싶었다. <br />
                처음 프로젝트를 시작하기 전에 어떠한 API를 사용해볼지 생각하고 그에 맞게 프로젝트를 기획했다. <br />
                지도와 결제 API는 어렵다는 평가가 많았는데, 요즘에는 잘 정리되어 있어서 금방 해결할 수 있었다. <br />
            </TextBind >
        </>
    )
}

export default FourthProjectInfo;

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