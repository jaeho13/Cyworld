import React, { useEffect, useState } from "react";
import styled from "styled-components"
import UseNavigation from "./UseNavigation";
import { RightContact, RightContactFlexWhite, RightHome, RightHomeFlexWhite, RightProfile, RightProfileFlexWhite, RightProject, RightProjectFlexBlack } from "./button/Button";
import { BackArea, BackBorder, BackColor, BackgroundImage, FiledBind } from "./background/Background";


const Project = () => {

    const { goToHome, goToProfile, goToProject, goToContact } = UseNavigation();


    const [cyImageIndex, setCyImageIndex] = useState(0);
    const cyImages = ['/background/c_page.1.png', '/background/c_page.2.png', '/background/c_page.3.png', '/background/c_page.4.png'];

    const goCyImage = (index) => {
        setCyImageIndex(index);
    };

    useEffect(() => {
        const cyInterval = setInterval(() => {
            setCyImageIndex((prevIndex) => (prevIndex + 1) % cyImages.length);
        }, 2500);

        return () => {
            clearInterval(cyInterval);
        };
    }, [cyImages]);

    const [jbtiImageIndex, setJbtiImageIndex] = useState(0);
    const jbtiImages = ['/background/j_page.1.png', '/background/j_page.2.png', '/background/j_page.3.png', '/background/j_page.4.png', '/background/j_page.5.png'];

    const goJbtiImage = (index) => {
        setJbtiImageIndex(index);
    };

    useEffect(() => {
        const jbtiInterval = setInterval(() => {
            setJbtiImageIndex((prevIndex) => (prevIndex + 1) % jbtiImages.length);
        }, 2500);

        return () => {
            clearInterval(jbtiInterval);
        };
    }, [jbtiImages]);


    const [penpalImageIndex, setPenpalImageIndex] = useState(0);
    const penImages = ['/background/p_page.1.png', '/background/p_page.2.png', '/background/p_page.3.png', '/background/p_page.4.png', '/background/p_page.5.png'];

    const goPenpalImage = (index) => {
        setPenpalImageIndex(index);
    };

    useEffect(() => {
        const penInterval = setInterval(() => {
            setPenpalImageIndex((prevIndex) => (prevIndex + 1) % penImages.length);
        }, 2500);

        return () => {
            clearInterval(penInterval);
        };
    }, [penImages]);


    const [sellentImageIndex, setSellentImageIndex] = useState(0);
    const sellImages = ['/background/s_page.1.png', '/background/s_page.2.png', '/background/s_page.3.png', '/background/s_page.4.png', '/background/s_page.5.png'];

    const goSellentImage = (index) => {
        setSellentImageIndex(index);
    };

    useEffect(() => {
        const sellentInterval = setInterval(() => {
            setSellentImageIndex((prevIndex) => (prevIndex + 1) % sellImages.length);
        }, 2500);

        return () => {
            clearInterval(sellentInterval);
        };
    }, [sellImages]);


    return (
        <>
            <BackgroundImage>
                <BackArea>
                    <BackBorder>
                        <BackColor>
                            <FiledBind>
                                <FiledLeft>
                                    <ProjectTitle>
                                        Project
                                    </ProjectTitle>

                                    <ProjectListFlex>
                                        <ProjectImage>
                                            <img src={cyImages[cyImageIndex]} alt="carousel" />
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                {cyImages.map((_, index) => (
                                                    <span
                                                        key={index}
                                                        onClick={() => goCyImage(index)}
                                                        style={{
                                                            width: '10px',
                                                            height: '10px',
                                                            borderRadius: '50%',
                                                            backgroundColor: index === cyImageIndex ? '#3B87AB' : 'gray',
                                                            margin: '5px',
                                                            cursor: 'pointer',
                                                        }}
                                                    ></span>
                                                ))}
                                            </div>
                                        </ProjectImage>

                                        <ProjectInfo>
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
                                        </ProjectInfo>
                                    </ProjectListFlex>

                                    <ProjectListFlex>
                                        <ProjectImage>
                                            <img src={jbtiImages[jbtiImageIndex]} alt="jbti_carousel" />
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                {jbtiImages.map((_, index) => (
                                                    <span
                                                        key={index}
                                                        onClick={() => goJbtiImage(index)}
                                                        style={{
                                                            width: '10px',
                                                            height: '10px',
                                                            borderRadius: '50%',
                                                            backgroundColor: index === jbtiImageIndex ? '#3B87AB' : 'gray',
                                                            margin: '5px',
                                                            cursor: 'pointer',
                                                        }}
                                                    ></span>
                                                ))}
                                            </div>
                                        </ProjectImage>
                                        <ProjectInfo>
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
                                        </ProjectInfo>
                                    </ProjectListFlex>

                                    <ProjectListFlex>
                                        <ProjectImage>
                                            <img src={penImages[penpalImageIndex]} alt="pen_carousel" />
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                {penImages.map((_, index) => (
                                                    <span
                                                        key={index}
                                                        onClick={() => goPenpalImage(index)}
                                                        style={{
                                                            width: '10px',
                                                            height: '10px',
                                                            borderRadius: '50%',
                                                            backgroundColor: index === penpalImageIndex ? '#3B87AB' : 'gray',
                                                            margin: '5px',
                                                            cursor: 'pointer',
                                                        }}
                                                    ></span>
                                                ))}
                                            </div>
                                        </ProjectImage>
                                        <ProjectInfo>
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
                                            - React, Spring, Oracle, Figma <br /> <br />

                                            5. 프로젝트 후기 <br />
                                            저번 프로젝트에 이어서 React, Spring 게시판 CRUD를 구현하며 다시 한번 복습할 수 있었다. <br />
                                            나아가 저번에는 구현하지 못했던 로그인까지 카카오 로그인 API를 사용하여 구현할 수 있었다. <br />
                                            이번 프로젝트에서도 CRUD를 구현헀는데, 확실히 모든 개발은 CRUD에 의거하여 조금씩 수정하며 만들어지는 것 같다.
                                            또한 어렵게만 생각했던 로그인 API도 막상 구현해보니 어렵지 않고 재밌게 할 수 있었다. <br />
                                        </ProjectInfo>
                                    </ProjectListFlex>

                                    <ProjectListFlex>
                                        <ProjectImage>
                                            <img src={sellImages[sellentImageIndex]} alt="sell_carousel" />
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                {sellImages.map((_, index) => (
                                                    <span
                                                        key={index}
                                                        onClick={() => goSellentImage(index)}
                                                        style={{
                                                            width: '10px',
                                                            height: '10px',
                                                            borderRadius: '50%',
                                                            backgroundColor: index === sellentImageIndex ? '#3B87AB' : 'gray',
                                                            margin: '5px',
                                                            cursor: 'pointer',
                                                        }}
                                                    ></span>
                                                ))}
                                            </div>
                                        </ProjectImage>
                                        <ProjectInfo>
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

                                            <br />
                                        </ProjectInfo>
                                    </ProjectListFlex>
                                </FiledLeft>


                                <FiledRight>
                                    <RightHomeFlexWhite>
                                        <RightHome onClick={goToHome}>Home</RightHome>
                                    </RightHomeFlexWhite>

                                    <RightProfileFlexWhite>
                                        <RightProfile onClick={goToProfile}>Profile</RightProfile>
                                    </RightProfileFlexWhite>

                                    <RightProjectFlexBlack>
                                        <RightProject onClick={goToProject}>Project</RightProject>
                                    </RightProjectFlexBlack>

                                    <RightContactFlexWhite>
                                        <RightContact onClick={goToContact}>Contact</RightContact>
                                    </RightContactFlexWhite>
                                </FiledRight>

                            </FiledBind>
                        </BackColor>
                    </BackBorder>
                </BackArea>
            </BackgroundImage>
        </>
    );
}

export default Project;

const FiledLeft = styled.div`
    width: 90%;
    height: 73vh;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
    border-radius: 16px;
    background-color: rgba(255, 255, 255, 0.4);
    overflow: auto;
    overflow-x: hidden;
`

const FiledRight = styled.div`
    width: 7%;
    height: 73vh;
    /* border: 2px solid green; */
`

const ProjectTitle = styled.div`
    width: 97%;
    height: 3vh;
    margin-top: 1vh;
    /* border: 2px solid blue; */
    color: #3B87AB;
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 1vh;
    padding-left: 3%;
    margin-bottom: 3vh;
`

const ProjectListFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 3vh;
`

const ProjectImage = styled.div`
    width: 40%;
    height: 25vh;
    border: 2px solid #A3A3A3;
    border-radius: 16px;
    opacity: 0.9;
    img {
        width: 100%; /* Contents의 가로 너비에 맞게 이미지 너비 조정 */
        height: 100%; /* Contents의 세로 높이에 맞게 이미지 높이 조정 */
        object-fit: contain; /* 이미지를 Contents에 맞게 조절 */
        border-radius: 1rem; /* 이미지에도 둥근 모서리를 적용 */
     }
`

const ProjectInfo = styled.div`
    width: 39%;
    height: 25vh;
    border: 2px solid #A3A3A3;
    border-radius: 16px;
    overflow: auto;
    overflow-x: hidden;
    background-color: rgba(255, 255, 255, 0.4);
    padding-left: 1%;
    padding-top: 1%;
`

const ProjectInfoTitle = styled.div`
    /* width: 100%;
    border: 2px solid blue; */
    font-size: 1.5rem;
    /* white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */
`