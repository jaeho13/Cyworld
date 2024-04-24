import { useNavigate } from 'react-router-dom';

const UseNavigation = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    const goToProfile = () => {
        navigate("/profile");
    };

    const goToProject = () => {
        navigate("/project");
    };

    const goToContact = () => {
        navigate("/contact");
    };

    return { goToHome, goToProfile, goToProject, goToContact };
};

export default UseNavigation;
