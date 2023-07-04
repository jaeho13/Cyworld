import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
    return (
        <Body>
            <BookCover>
                <Bookdot>
                    <Page>
                        <Container1>
                            <Item1>
                                <Box>TODAY 28 | TOTAL 123456</Box>
                            </Item1>
                            <Item2></Item2>
                        </Container1>

                        <Container2>
                            <Item3>
                                이재호의 포트폴리오
                                <Tab>
                                    <a href="https://github.com/jaeho13">
                                        https://github.com/jaeho13
                                    </a>
                                </Tab>
                            </Item3>
                            <Item4></Item4>
                        </Container2>
                        <Container3></Container3>
                    </Page>
                </Bookdot>
            </BookCover>
        </Body>
    );
};

const Body = styled.div`
    font-size: 16px; /* 예시로 16px을 기준으로 설정 */
    background-color: #a3a3a3;
    background-image: url(/background/pattern.png);
    background-size: 100px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
`;

const BookCover = styled.div`
    background-color: #b4d1da;
    border-radius: 1rem;
    border: 1px solid #738186;
    width: 70rem;
    height: 45rem;
    margin: 0 auto;
    margin-top: 7rem;
    margin-bottom: 5rem;
    position: relative;
`;

const Bookdot = styled.div`
    border: 0.2rem dashed white;
    border-radius: 0.9rem;
    left: 1.5rem;
    top: 1.5rem;
    right: 1.5rem;
    bottom: 1.5rem;
    position: absolute;
`;

const Page = styled.div`
  background-color: #d4d4d4;
  border-radius: 0.9rem;
  width: 65rem;
  height: 40rem;
  margin: 1rem;
  position: absolute;
  display: flex;
`;

const Container1 = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Item1 = styled.div`
  flex: 0.1;
  border: none;
  padding: 0.5rem;
`;

const Item2 = styled.div`
  flex: 2;
  border: 0.2rem solid #d4d4d4;
  border-radius: 1rem;
  background-color: white;
`;

const Container2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Item3 = styled.div`
  flex: 0.1;
  border: none;
  padding: 0.5rem;
`;

const Item4 = styled.div`
  flex: 2;
  border: 0.2rem solid #d4d4d4;
  border-radius: 1rem;
  background-color: white;
`;

const Container3 = styled.div`
  flex: 0.1;
  border: 0.1rem solid grey;
  margin-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const Box = styled.div`
  display: inline-block;
  text-align: center;
  font-size: 1rem;
  margin-left: 1.5rem;
`;

const Tab = styled.div`
  display: inline-block;
  margin-left: 5rem;
`;

export default Home;
