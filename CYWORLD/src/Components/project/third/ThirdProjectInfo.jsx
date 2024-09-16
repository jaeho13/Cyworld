import React from "react";
import styled from "styled-components"


const ThirdProjectInfo = () => {
    return (
        <>
            <TextBind>
                <ProjectInfoTitle>
                    Jell-BTI
                </ProjectInfoTitle>
                (링크 - <a href="https://github.com/kimpizza/Jell-BTI_Project">https://github.com/kimpizza/Jell-BTI_Project</a>)
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
                - Jelly MBTI 테스트 구현 <br /> <br />
                - RESTful API를 이용한 React, Spring 게시판 및 댓글 CRUD 구현 <br />

                4. 사용 기술 <br />
                - React, Spring, Oracle, Figma <br /> <br />

                5. 프로젝트 후기 <br />
                처음으로 혼자가 아닌 팀으로 시작하게 된 프로젝트이다. 프로젝트에서는 게시판 및 댓글 기능 CRUD를 맡았는데,
                처음에는 어떻게 구현을 해야할 지 몰라 많이 힘들었지만 팀원과의 소통으로 개발의 방향성을 잡고 배워가며 맡은 일을 진행할 수 있었다. <br />
                이번 프로젝트에서 나는 게시판을 만드는 CRUD를 배웠고, 팀원들과의 소통이 얼마나 중요한지도 알 수 있었다. <br />
                더불어, 맡은 업무에 대한 책임감을 키우는 기회가 되어서 좋았다. <br />
            </TextBind >
        </>
    )
}

export default ThirdProjectInfo;

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