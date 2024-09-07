import React from "react";
import styled from "styled-components";
import UseNavigation from "../UseNavigation";
import { useLocation } from 'react-router-dom';

const PageButton = (props) => {
    const { goToHome, goToProfile, goToProject, goToContact } = UseNavigation();
    const location = useLocation();

    const handleButtonClick = () => {
        switch (props.name) {
            case "Home":
                goToHome();
                break;
            case "Profile":
                goToProfile();
                break;
            case "Project":
                goToProject();
                break;
            case "Contact":
                goToContact();
                break;
            default:
                break;
        }
    };

    const getBackgroundColor = () => {
        const currentPath = location.pathname;

        if (props.name === "Home" && currentPath === "/") {
            return "white";
        } else if (props.name === "Profile" && currentPath === "/profile") {
            return "white";
        } else if (props.name === "Project" && currentPath === "/project") {
            return "white";
        } else if (props.name === "Contact" && currentPath === "/contact") {
            return "white";
        } else {
            return "#3B87AB";
        }
    };

    return (
        <TestBtn onClick={handleButtonClick} backgroundColor={getBackgroundColor()}>
            {props.name}
        </TestBtn>
    );
};

export default PageButton;

const TestBtn = styled.div`
    width: 97%;
    height: 5vh;
    border: 2px solid grey;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
    color: ${props => props.backgroundColor === "white" ? "black" : "white"};
    background-color: ${props => props.backgroundColor};
    margin-top: 1vh;
    padding-left: 3%;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
