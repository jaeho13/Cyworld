import React from "react";
import styled from "styled-components"


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
                - React, styled-components, axios, RESTful API <br /> <br />

                5. 프로젝트 후기 <br />
                저번 프로젝트에 이어서 React, Spring 게시판 CRUD를 구현하며 다시 한번 복습할 수 있었다. <br />
                나아가 저번에는 구현하지 못했던 로그인까지 카카오 로그인 API를 사용하여 구현할 수 있었다. <br />
                이번 프로젝트에서도 CRUD를 구현헀는데, 확실히 모든 개발은 CRUD에 의거하여 조금씩 수정하며 만들어지는 것 같다.
                또한 어렵게만 생각했던 로그인 API도 막상 구현해보니 어렵지 않고 재밌게 할 수 있었다. <br />
            </TextBind >
        </>
    )
}

export default SecondProjectInfo;

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