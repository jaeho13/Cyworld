import React from 'react';
import styled from "styled-components";

const Background = ({ children }) => {
    return (
        <>
            <BackgroundImage>
                <BlueArea>
                    <WhiteBorder>
                        <GrayArea>
                            {children}
                        </GrayArea>
                    </WhiteBorder>
                </BlueArea>
            </BackgroundImage>
        </>
    )
}


export default Background;

const BackgroundImage = styled.div`
    background-color: #a3a3a3;
    background-image: url(/background/pattern.png);
    background-size: 100px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BlueArea = styled.div`
    width: 70%;
    height: 85vh;
    border: 2px solid #738186;
    border-radius: 30px;
    background-color: #b4d1da;
    display: flex;
    justify-content: center;
    align-items: center;
`

const WhiteBorder = styled.div`
    width: 97%;
    height: 80vh;
    border: 3.5px dashed white;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const GrayArea = styled.div`
    width: 97%;
    height: 78vh;
    border: 2px solid #d4d4d4;
    border-radius: 16px;
    background-color: #d4d4d4;
    display: flex;
`