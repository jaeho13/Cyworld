import React from "react";
import UseNavigation from "../UseNavigation";
import { useLocation } from 'react-router-dom';
import { TestBtn } from "./styles/PageButtonStyle";

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