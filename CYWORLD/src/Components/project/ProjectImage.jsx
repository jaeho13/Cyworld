import React from "react";
import { ImageBind } from "./styles/ProjectImageStyle";

const ProjectImage = (props) => {
    return (
        <>
            <ImageBind src={props.imgSrc} />
        </>
    )
}

export default ProjectImage;