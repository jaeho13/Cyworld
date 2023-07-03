import React from "react";
import styled from "styled-components"

const Home = () => {
    return (
        <>
            <Body
            // img src="/background/pattern.png" alt="배경"
            >

                <BookCover>안녕하세요
                    <Bookdot>위치가 어딜까요
                        <Page>이건 어디야</Page>
                    </Bookdot>
                </BookCover>
            </Body>

        </>
    );
};

export default Home;

const Body = styled.div`
    background-color: #a3a3a3;
    background-image: url(/background/pattern.png);
    background-size: 100px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
`

const BookCover = styled.div`
    width: 70%;
    height: 45rem;
    border: 1px solid #738186;
    border-radius: 0.5rem;
    background-color: #b4d1da;
    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
   /** .bookdot 요소에서 absolute 속성값을 이용하기 위해 position: relative 로 설정 */
    position: relative;
`

const Bookdot = styled.div`
    border: 3px dashed white;
    border-radius: 9px;
    left: 15px;
    top: 15px;
    right: 15px;
    bottom: 15px;
    position: absolute;
`

const Page = styled.div`
    width: 60rem;
    height: 40rem;
    border-radius: 0.5rem;
    background-color: white;
    margin: auto; /* 가로 중앙 정렬 */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`