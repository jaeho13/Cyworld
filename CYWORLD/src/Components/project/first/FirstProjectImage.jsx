import React from "react";
import styled from "styled-components";


const FirstProjectImage = (props) => {
    return (
        <>
            <ImageBind src={props.imgSrc} />
        </>
    )
}

export default FirstProjectImage;

const ImageBind = styled.img`
    width: 99%;
    height: 25vh;
    margin: 0 auto;
    border-radius: 16px;
    object-fit: fill;
`