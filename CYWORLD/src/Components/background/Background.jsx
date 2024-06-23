import React from 'react';
import styled from "styled-components";

const Background = () => {
    return (
        <>
            <BackgroundImage>
                <BackArea>
                    <BackBorder>
                        <BackColor>
                            <FiledBind>

                            </FiledBind>
                        </BackColor>
                    </BackBorder>
                </BackArea>
            </BackgroundImage>
        </>
    )
}

export default Background;

export const BackgroundImage = styled.div`
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

export const BackArea = styled.div`
    width: 70%;
    height: 85vh;
    border: 2px solid #738186;
    border-radius: 30px;
    background-color: #b4d1da;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BackBorder = styled.div`
    width: 97%;
    height: 80vh;
    border: 3.5px dashed white;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BackColor = styled.div`
    width: 97%;
    height: 75vh;
    border: 2px solid #d4d4d4;
    border-radius: 1rem;
    background-color: #d4d4d4;
    display: flex;
    align-items: center;
`

export const FiledBind = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`