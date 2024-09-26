import React from "react";
import styled from "styled-components"


const FifthProjectInfo = () => {
    return (
        <>
            <TextBind>
                <ProjectInfoTitle>
                    싸이월드 자기소개서
                </ProjectInfoTitle>
                (링크 - <a href="https://github.com/jaeho13/Cyworld">https://github.com/jaeho13/Cyworld</a>)
                <br /> <br />
                1. 개발 배경 및 내용 <br />
                - 어린 시절 유행하던 싸이월드 자기소개서 <br /> <br />

                2. 개발 목표 <br />
                - CSS 학습 <br />
                - 자기소개서 개선 <br /> <br />

                3. 사용 기술 <br />
                - React, styled-components <br /> <br />

                4. 프로젝트 후기 <br />
                개발을 처음 시작하고 급급하게 만들었던 자기소개서를 보면서 볼수록 부족하다는 생각을 많이 들었다. <br />
                자기소개서를 새로 만들기로 결심하고, 어떻게 만들어야 사람들이 봤을 때 기억에 남을까 생각을 많이 했다. <br />
                어린 시절에 유행하던 싸이월드로 자기소개서를 만들면 사람들에 공감을 받을 수 있을 것 같아서 만들기 시작했는데, 생각했던 것보다 잘 나온 것 같아서 재밌었다.
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