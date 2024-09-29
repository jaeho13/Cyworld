import React from 'react';
import { BackgroundImage, BlueArea, GrayArea, WhiteBorder } from './styles/BackgroundStyle';

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