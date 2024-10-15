import styled from "styled-components";

export const TestBtn = styled.div`
    width: 97%;
    height: 5vh;
    line-height: 5vh;
    border: 2px solid grey;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
    color: ${props => props.backgroundColor === "white" ? "black" : "white"};
    background-color: ${props => props.backgroundColor};
    margin-top: 1vh;
    padding-left: 3%;
    /* display: flex; */
    align-items: center;
    /* font-size: 1.3rem; */
    font-size: 20px;
    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;
`;
